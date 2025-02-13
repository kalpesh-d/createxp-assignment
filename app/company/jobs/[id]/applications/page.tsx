import { applicationMethods, jobMethods } from "@/lib/methods";
import { ApplicationsList } from "@/components/ApplicationsList";
import { notFound } from "next/navigation";

export default async function JobApplicationsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await jobMethods.getJob(id);

  if (!job) {
    notFound();
  }

  const applications = await applicationMethods.getJobApplications(id);
  const stats = await applicationMethods.getApplicationStats(id);

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-2">Applications for {job.title}</h1>
      <p className="text-gray-600 mb-6">
        {applications.length} total applications
      </p>

      <ApplicationsList applications={applications} stats={stats} />
    </div>
  );
}
