from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import torch
import numpy as np
from scipy.sparse import hstack
from transformers import DistilBertTokenizer, DistilBertModel
import os

app = FastAPI(title="Fake Job Posting Detection API")

THRESHOLD = 0.45

# Global objects (loaded on startup)
tfidf = None
model = None
tokenizer = None
bert_model = None
device = None


# -----------------------------
# Load models on startup
# -----------------------------
@app.on_event("startup")
def load_models():
    global tfidf, model, tokenizer, bert_model, device

    print("🔹 Loading models...")

    # Check paths first (prevents silent crash)
    assert os.path.exists("models/hybrid_tfidf_vectorizer.pkl")
    assert os.path.exists("models/hybrid_logistic_regression.pkl")

    tfidf = joblib.load("models/hybrid_tfidf_vectorizer.pkl")
    model = joblib.load("models/hybrid_logistic_regression.pkl")

    tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
    bert_model = DistilBertModel.from_pretrained("distilbert-base-uncased")
    bert_model.eval()

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    bert_model.to(device)

    print("All models loaded successfully")


# -----------------------------
# Input schema
# -----------------------------
class JobInput(BaseModel):
    title: str = ""
    company_profile: str = ""
    description: str = ""
    requirements: str = ""
    benefits: str = ""


# -----------------------------
# Utilities
# -----------------------------
def get_bert_embedding(text: str):
    inputs = tokenizer(
        text,
        truncation=True,
        padding="max_length",
        max_length=256,
        return_tensors="pt"
    )
    inputs = {k: v.to(device) for k, v in inputs.items()}

    with torch.no_grad():
        outputs = bert_model(**inputs)
        emb = outputs.last_hidden_state[:, 0, :]

    return emb.cpu().numpy()


# -----------------------------
# Health check
# -----------------------------
@app.get("/")
def root():
    return {"status": "API running with ML loaded"}


# -----------------------------
# Prediction endpoint
# -----------------------------
@app.post("/predict")
def predict(job: JobInput):

    text = " ".join([
        job.title,
        job.company_profile,
        job.description,
        job.requirements,
        job.benefits
    ]).lower().strip()

    X_tfidf = tfidf.transform([text])
    X_bert = get_bert_embedding(text)
    X_final = hstack([X_tfidf, X_bert])

    prob = model.predict_proba(X_final)[0][1]
    label = "FAKE" if prob >= THRESHOLD else "REAL"

    return {
        "prediction": label,
        "fake_probability": round(float(prob), 4),
        "threshold": THRESHOLD
    }
