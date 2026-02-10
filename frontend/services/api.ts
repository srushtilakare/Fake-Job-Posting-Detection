const API_BASE_URL = "http://127.0.0.1:8000";

export type PredictionResponse = {
  prediction: "FAKE" | "REAL";
  fake_probability: number;
  threshold: number;
};

export async function predictJob(data: {
  title: string;
  company_profile: string;
  description: string;
  requirements: string;
  benefits: string;
}): Promise<PredictionResponse> {
  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Backend error");
  }

  return response.json();
}

export async function predictFromUrl(url: string) {
  const response = await fetch(`${API_BASE_URL}/predict-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("URL prediction failed");
  }

  return response.json();
}
