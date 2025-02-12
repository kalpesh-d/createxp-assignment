import Header from "@/components/Header";
import JobCard from "@/components/JobCard";

interface Company {
  name: string;
}

export interface Jobs {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  salaryMin?: number;
  salaryMax?: number;
  type: string;
  requirements?: string;
  companyId: string;
  company: Company;
}

const JobsPage = async () => {
  const BaseUrl = "http://localhost:3000/api";

  const jobsRes = await fetch(`${BaseUrl}/jobs`);
  const data: Jobs[] = await jobsRes.json();

  return (
    <div className="container mx-auto py-8 px-4">
      <Header
        heading="Available Positions"
        para="Discover your next career opportunity"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
