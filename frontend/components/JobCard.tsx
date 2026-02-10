type JobCardProps = {
    title: string;
    company: string;
    location: string;
  };
  
  export default function JobCard({ title, company, location }: JobCardProps) {
    return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-sm text-gray-500">{location}</p>
  
        <button className="mt-4 text-sm text-red-600 hover:underline">
          Check Safety →
        </button>
      </div>
    );
  }
  