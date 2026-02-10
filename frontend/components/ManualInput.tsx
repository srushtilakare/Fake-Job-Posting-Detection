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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await predictJob(formData);
    onResult(result);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="title" placeholder="Job Title" className="w-full border p-2 rounded" onChange={handleChange} />
      <textarea name="company_profile" placeholder="Company Profile" className="w-full border p-2 rounded" rows={2} onChange={handleChange} />
      <textarea name="description" placeholder="Job Description" className="w-full border p-2 rounded" rows={4} onChange={handleChange} />
      <textarea name="requirements" placeholder="Requirements" className="w-full border p-2 rounded" rows={3} onChange={handleChange} />
      <textarea name="benefits" placeholder="Benefits" className="w-full border p-2 rounded" rows={3} onChange={handleChange} />

      <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded">
        Analyze Job
      </button>
    </form>
  );
}
