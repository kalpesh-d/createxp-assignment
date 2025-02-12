import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Building2, DollarSign } from "lucide-react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { Jobs } from "../app/candidate/jobs/page";

const JobCard = ({ job }: { job: Jobs }) => {
  return (
    <Card className="border hover:shadow-lg duration-500 h-full cursor-pointer hover:border-white hover:scale-[1.02] transition ease-in-out">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-200">
          {job.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-gray-400">
          <Building2 className="w-4 h-4" />
          {job.company?.name || "Loading..."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Briefcase className="w-4 h-4 mr-1" />
              {job.type}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-gray-400">
              {job.category}
            </Badge>
            {job.salaryMin && job.salaryMax && (
              <Badge variant="outline" className="text-gray-400">
                <DollarSign className="w-3 h-3 mr-1" />
                {job.salaryMin.toLocaleString()} -{" "}
                {job.salaryMax.toLocaleString()}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
