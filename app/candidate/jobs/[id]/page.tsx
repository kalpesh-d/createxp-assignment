import { jobMethods } from "@/lib/methods";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function JobDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const job = await jobMethods.getJob(params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-24">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span>{job.companyName}</span>
          <span>•</span>
          <span>{job.location}</span>
          <Badge>
            {job.type
              .replace(/_/g, " ")
              .toLowerCase()
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </Badge>
        </div>
      </div>

      <div className="rounded-lg shadow py-6 mb-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <div className="whitespace-pre-wrap">{job.description}</div>
        </div>
      </div>

      <div className="rounded-lg shadow py-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-gray-600">Category</dt>
            <dd>{job.category}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Salary Range</dt>
            <dd>
              ${job.salaryMin.toLocaleString()} - $
              {job.salaryMax.toLocaleString()}
            </dd>
          </div>
        </dl>
      </div>

      <Link href={`/candidate/apply/${job.id}`}>
        <Button size="lg" className="w-full">
          Apply Now
        </Button>
      </Link>
    </div>
  );
}
