export default function Hero() {
    return (
      <section className="text-center py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">
          Verify Job Authenticity Before You Apply
        </h2>
  
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Detect fraudulent job postings using AI-powered analysis of job descriptions,
          requirements, and contextual patterns.
        </p>
  
        <a
          href="/detect"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
        >
          Check Job Safety
        </a>
      </section>
    );
  }
  