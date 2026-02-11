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
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setMode("manual")}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            mode === "manual"
              ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Manual Entry
        </button>

        <button
          onClick={() => setMode("url")}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            mode === "url"
              ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Paste Job URL
        </button>
      </div>

      {/* Form Section */}
      {mode === "manual" ? (
        <ManualInput onResult={setResult} />
      ) : (
        <UrlInput onResult={setResult} />
      )}

      {/* Result */}
      {result && <ResultPanel result={result} />}
    </>
  );
}
