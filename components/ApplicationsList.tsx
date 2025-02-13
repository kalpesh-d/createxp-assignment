"use client";
import { updateApplicationStatus } from "@/app/action/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Application } from "@/types/index";

export function ApplicationsList({
  applications,
  stats,
}: {
  applications: Application[];
  stats: { status: string; _count: number }[];
}) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.status}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {stat.status}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat._count}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {applications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{application.name}</CardTitle>
                  <p className="text-sm text-gray-600">{application.email}</p>
                </div>
                <Select
                  defaultValue={application.status}
                  onValueChange={(value) =>
                    updateApplicationStatus(application.id, value)
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="REVIEWED">Reviewed</SelectItem>
                    <SelectItem value="INTERVIEWING">Interviewing</SelectItem>
                    <SelectItem value="ACCEPTED">Accepted</SelectItem>
                    <SelectItem value="REJECTED">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Resume</h3>
                  <a
                    href={application.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Resume
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Cover Letter</h3>
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {application.coverLetter}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
