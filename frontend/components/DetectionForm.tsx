"use client";

import { useState } from "react";
import ManualInput from "./ManualInput";
import UrlInput from "./UrlInput";
import ResultPanel from "./ResultPanel";

export default function DetectionForm() {
  const [mode, setMode] = useState<"manual" | "url">("manual");
  const [result, setResult] = useState(null);

  return (
    <>
      <div className="border rounded-lg p-6">
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              mode === "manual" ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setMode("manual")}
          >
            Manual Entry
          </button>

          <button
            className={`px-4 py-2 rounded ${
              mode === "url" ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setMode("url")}
          >
            Paste Job URL
          </button>
        </div>

        {mode === "manual" ? (
          <ManualInput onResult={setResult} />
        ) : (
          <UrlInput onResult={setResult} />
        )}
      </div>

      <ResultPanel result={result} />
    </>
  );
}
