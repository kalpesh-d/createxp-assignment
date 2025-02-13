import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    companyName: string;
    location: string;
    type: string;
    category: string;
    salaryMin: number;
    salaryMax: number;
    createdAt: Date;
  };
  viewType: "candidate" | "company";
}

export function JobCard({ job, viewType }: JobCardProps) {
  const href =
    viewType === "candidate"
      ? `/candidate/jobs/${job.id}`
      : `/company/jobs/${job.id}/applications`;

  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>{job.title}</CardTitle>
            <Badge>
              {job.type
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </Badge>
          </div>
          <CardDescription>
            {job.companyName} • {job.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="space-x-2">
              <Badge variant="outline">{job.category}</Badge>
              <span className="text-sm text-gray-500">
                ${job.salaryMin.toLocaleString()} - $
                {job.salaryMax.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(job.createdAt).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
