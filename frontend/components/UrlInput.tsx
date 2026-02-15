"use client";

import { useState } from "react";
import { predictFromUrl } from "@/services/api";

export default function UrlInput({
  onResult,
}: {
  onResult: (res: any) => void;
}) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onResult(null);

    try {
      const data = await predictFromUrl(url);
      setExtractedData(data.extracted_fields || null);
    } catch (error) {
      alert("Failed to fetch job data.");
    }

    setLoading(false);
  };

  const handleAnalyze = async () => {
    setLoading(true);
    const result = await predictFromUrl(url);
    onResult(result);
    setLoading(false);
  };

  return (
    <div className="space-y-8">

      {/* URL Input */}
      <form onSubmit={handleFetch} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Job Posting URL
          </label>

          <input
            type="url"
            required
            placeholder="https://example.com/job-posting"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105"
          >
            {loading ? "Fetching..." : "Fetch Job Data"}
          </button>
        </div>
      </form>

      {/* Extracted Data Preview */}
      {extractedData && (
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">

          <h3 className="text-lg font-semibold mb-6">
            Extracted Job Details
          </h3>

          <div className="space-y-4 text-sm">

            <div>
              <p className="font-medium">Title:</p>
              <p className="text-gray-600">
                {extractedData.title || "Not found"}
              </p>
            </div>

            <div>
              <p className="font-medium">Company:</p>
              <p className="text-gray-600">
                {extractedData.company_profile || "Not found"}
              </p>
            </div>

            <div>
              <p className="font-medium">Description:</p>
              <p className="text-gray-600 line-clamp-4">
                {extractedData.description || "Not found"}
              </p>
            </div>

            <div>
              <p className="font-medium">Requirements:</p>
              <p className="text-gray-600 line-clamp-4">
                {extractedData.requirements || "Not found"}
              </p>
            </div>

            <div>
              <p className="font-medium">Benefits:</p>
              <p className="text-gray-600">
                {extractedData.benefits || "Not found"}
              </p>
            </div>
          </div>

          {/* Analyze Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleAnalyze}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-black"
            >
              Analyze Extracted Job
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
