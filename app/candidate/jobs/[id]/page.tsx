import { BaseUrl } from "@/app/layout";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Building2, DollarSign } from "lucide-react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Jobs } from "../page";

interface JobDetailsPageProps {
  params: { id: string };
}

const JobDetailsPage = async ({ params }: JobDetailsPageProps) => {
  const jobId = params.id;

  const jobRes = await fetch(`${BaseUrl}/jobs/${jobId}`);
  const job: Jobs = await jobRes.json();

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container mx-auto py-8 px-4">
      <Card className="border p-6 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-gray-200">
            {job.title}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-gray-500 mt-2">
            <Building2 className="w-5 h-5" />
            {job.company?.name || "Loading..."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-5 h-5 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Briefcase className="w-5 h-5 mr-1" />
                {job.type}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="text-gray-300">
                {job.category}
              </Badge>
              {job.salaryMin && job.salaryMax && (
                <Badge variant="outline" className="text-gray-300">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {job.salaryMin.toLocaleString()} -{" "}
                  {job.salaryMax.toLocaleString()}
                </Badge>
              )}
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-500">
                Job Description
              </h2>
              <p className="text-gray-300">{job.description}</p>
            </div>

            {job.requirements && (
              <div className="prose max-w-none mt-6">
                <h2 className="text-2xl font-semibold text-gray-500">
                  Requirements
                </h2>
                <p className="text-gray-300">{job.requirements}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default JobDetailsPage;
