import { jobMethods } from "@/lib/methods";
import { ApplicationForm } from "@/components/ApplicationForm";
import { notFound } from "next/navigation";

export default async function ApplyPage({
  params,
}: {
  params: { jobId: string };
}) {
  const { jobId } = params;
  const job = await jobMethods.getJob(jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-2">Apply for {job.title}</h1>
      <p className="text-gray-600 mb-6">at {job.companyName}</p>
      <ApplicationForm jobId={job.id} />
    </div>
  );
}
