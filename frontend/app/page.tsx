import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-white to-purple-100 opacity-60 blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto text-center px-6">
    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
      Verify Job Authenticity <br />
      <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
        Before You Apply
      </span>
    </h1>

    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
      AI-powered fraud detection analyzing job descriptions,
      requirements, and contextual scam patterns instantly.
    </p>

    <a
      href="/detect"
      className="inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105"
    >
      Check Job Safety
    </a>
  </div>
</section>


      {/* Live Jobs */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">
          Live Job Openings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-lg font-semibold">
      Software Engineer
    </h3>

    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
      Verified
    </span>
  </div>

  <p className="text-gray-600 text-sm">
    TechNova Pvt Ltd
  </p>

  <p className="text-gray-500 text-sm mb-6">
    Bangalore, India
  </p>

  <a
    href="/detect"
    className="inline-block bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-black"
  >
    Check Safety →
  </a>
</div>


<div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-lg font-semibold">
      Software Engineer
    </h3>

    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
      Verified
    </span>
  </div>

  <p className="text-gray-600 text-sm">
    TechNova Pvt Ltd
  </p>

  <p className="text-gray-500 text-sm mb-6">
    Bangalore, India
  </p>

  <a
    href="/detect"
    className="inline-block bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-black"
  >
    Check Safety →
  </a>
</div>

<div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-lg font-semibold">
      Software Engineer
    </h3>

    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
      Verified
    </span>
  </div>

  <p className="text-gray-600 text-sm">
    TechNova Pvt Ltd
  </p>

  <p className="text-gray-500 text-sm mb-6">
    Bangalore, India
  </p>

  <a
    href="/detect"
    className="inline-block bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-black"
  >
    Check Safety →
  </a>
</div>

<div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-lg font-semibold">
      Software Engineer
    </h3>

    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
      Verified
    </span>
  </div>

  <p className="text-gray-600 text-sm">
    TechNova Pvt Ltd
  </p>

  <p className="text-gray-500 text-sm mb-6">
    Bangalore, India
  </p>

  <a
    href="/detect"
    className="inline-block bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-black"
  >
    Check Safety →
  </a>
</div>

        </div>
      </section>
    </>
  );
}
