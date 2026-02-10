import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Live Job Openings
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <JobCard
            title="Software Engineer"
            company="TechNova Pvt Ltd"
            location="Bangalore, India"
          />
          <JobCard
            title="Data Analyst Intern"
            company="DataWorks"
            location="Remote"
          />
          <JobCard
            title="Marketing Executive"
            company="BrightEdge Solutions"
            location="Mumbai, India"
          />
        </div>
      </section>
    </>
  );
}
