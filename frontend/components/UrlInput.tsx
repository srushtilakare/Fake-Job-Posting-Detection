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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await predictFromUrl(url);
      onResult(result);
    } catch {
      alert("Could not analyze this URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="url"
        placeholder="Paste job posting URL"
        className="w-full border p-2 rounded"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-red-600 text-white px-6 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Fetch & Analyze"}
      </button>
    </form>
  );
}
