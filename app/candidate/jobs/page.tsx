import { BaseUrl } from "@/app/layout";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import Link from "next/link";

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
  company: Company;
}

const JobsPage = async () => {
  const jobsRes = await fetch(`${BaseUrl}/jobs`);
  const data: Jobs[] = await jobsRes.json();

  return (
    <section className="container mx-auto py-8 px-4">
      <Header
        heading="Available Positions"
        para="Discover your next career opportunity"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((job) => (
          <Link key={job.id} href={`/candidate/jobs/${job.id}`}>
            <JobCard job={job} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default JobsPage;
