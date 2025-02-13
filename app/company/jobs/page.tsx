import { jobMethods } from "@/lib/methods";
import { JobCard } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CompanyJobsPage() {
  const jobs = await jobMethods.getCompanyJobs();

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Job Postings</h1>
        <Link href="/company/jobs/new">
          <Button>Post New Job</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} viewType="company" />
        ))}
      </div>
    </div>
  );
}
