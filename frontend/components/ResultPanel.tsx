type ResultProps = {
  result: {
    prediction: "FAKE" | "REAL";
    fake_probability: number;
    threshold: number;
  } | null;
};

export default function ResultPanel({ result }: ResultProps) {
  if (!result) {
    return (
      <div className="border rounded-lg p-6 bg-gray-50 mt-6">
        <p className="text-gray-500">
          Submit a job posting to see detection results.
        </p>
      </div>
    );
  }

  const probabilityPercent = Math.round(result.fake_probability * 100);

  let riskLevel = "Low Risk";
  let barColor = "bg-green-500";

  if (result.fake_probability >= result.threshold) {
    riskLevel = "High Risk";
    barColor = "bg-red-600";
  } else if (result.fake_probability >= result.threshold - 0.15) {
    riskLevel = "Medium Risk";
    barColor = "bg-yellow-500";
  }

  return (
    <div className="border rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Analysis Result</h3>

      {/* Prediction Badge */}
      <div className="mb-3">
        <span
          className={`px-3 py-1 rounded-full text-white text-sm ${
            result.prediction === "FAKE"
              ? "bg-red-600"
              : "bg-green-600"
          }`}
        >
          {result.prediction}
        </span>
      </div>

      {/* Probability Bar */}
      <div className="mb-3">
        <p className="text-sm mb-1">
          Fake Probability: <strong>{probabilityPercent}%</strong>
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`${barColor} h-3 rounded-full transition-all`}
            style={{ width: `${probabilityPercent}%` }}
          />
        </div>
      </div>

      {/* Risk Level */}
      <p className="mb-1">
        <strong>Risk Level:</strong>{" "}
        <span className="font-semibold">{riskLevel}</span>
      </p>

      {/* Threshold */}
      <p className="text-sm text-gray-500">
        Decision threshold: {result.threshold}
      </p>
    </div>
  );
}
