import { jobMethods } from "@/lib/methods";
import { JobFilters } from "@/components/JobFilters";
import { JobCard } from "@/components/JobCard";

interface SearchParams {
  category?: string;
  location?: string;
  search?: string;
}

export default async function CandidateJobsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const jobs = await jobMethods.getJobs({
    category: resolvedSearchParams.category || "",
    location: resolvedSearchParams.location || "",
    searchTerm: resolvedSearchParams.search || "",
  });

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Available Jobs</h1>
      <JobFilters />
      <div className="grid gap-4 mt-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} viewType="candidate" />
        ))}
      </div>
    </div>
  );
}
