import Navbar from "@/components/Navbar";
import DetectionForm from "@/components/DetectionForm";

export default function DetectPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">
          Fake Job Detection
        </h1>

        <p className="text-gray-600 mb-8">
          Analyze job postings using AI-powered fraud detection.
        </p>

        <DetectionForm />
      </main>
    </>
  );
}
