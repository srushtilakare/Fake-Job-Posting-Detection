type ResultProps = {
  result: any;
};

export default function ResultPanel({ result }: ResultProps) {
  const probability = Math.round(result.fake_probability * 100);

  return (
    <div className="mt-12 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg">

      <h3 className="text-xl font-semibold mb-6 text-center">
        Analysis Result
      </h3>

      <div className="text-center mb-6">
        <span
          className={`px-5 py-2 rounded-full text-sm font-semibold ${
            result.prediction === "FAKE"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {result.prediction}
        </span>
      </div>

      <p className="text-center mb-4">
        Fake Probability: <strong>{probability}%</strong>
      </p>

      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-4">
        <div
          className={`h-4 ${
            result.prediction === "FAKE"
              ? "bg-gradient-to-r from-red-500 to-pink-500"
              : "bg-gradient-to-r from-green-500 to-emerald-500"
          }`}
          style={{ width: `${probability}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 text-center">
        Decision threshold: {result.threshold}
      </p>
    </div>
  );
}
