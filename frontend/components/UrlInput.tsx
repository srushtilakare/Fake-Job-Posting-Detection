"use client";

import { useState } from "react";
import { predictFromUrl } from "@/services/api";

export default function UrlInput({
  onResult,
}: {
  onResult: (res: any) => void;
}) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await predictFromUrl(url);
    onResult(result);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="url"
        placeholder="Paste job posting URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        type="submit"
        className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700"
      >
        Fetch & Analyze
      </button>
    </form>
  );
}
