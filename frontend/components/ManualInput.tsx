"use client";

import { useState } from "react";
import { predictJob } from "@/services/api";

export default function ManualInput({
  onResult,
}: {
  onResult: (res: any) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    company_profile: "",
    description: "",
    requirements: "",
    benefits: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await predictJob(formData);
    onResult(result);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Job Title
        </label>
        <input
          name="title"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="e.g. Software Engineer"
        />
      </div>

      {/* Company Profile */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Company Profile
        </label>
        <textarea
          name="company_profile"
          rows={3}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="Brief company description"
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Job Description
        </label>
        <textarea
          name="description"
          rows={4}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="Describe the job role..."
        />
      </div>

      {/* Requirements */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Requirements
        </label>
        <textarea
          name="requirements"
          rows={3}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="List required skills..."
        />
      </div>

      {/* Benefits */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Benefits
        </label>
        <textarea
          name="benefits"
          rows={3}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="Mention benefits..."
        />
      </div>

      {/* Button */}
      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105"
        >
          {loading ? "Analyzing..." : "Analyze Job"}
        </button>
      </div>
    </form>
  );
}
