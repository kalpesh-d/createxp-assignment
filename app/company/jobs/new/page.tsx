import { createJob } from "@/app/action/jobs";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobType } from "@prisma/client";

export default function NewJobPage() {
  async function create(formData: FormData) {
    "use server";

    const job = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      location: formData.get("location") as string,
      type: formData.get("type") as JobType,
      salaryMin: parseInt(formData.get("salaryMin") as string),
      salaryMax: parseInt(formData.get("salaryMax") as string),
      companyName: formData.get("companyName") as string,
      companyEmail: formData.get("companyEmail") as string,
    };

    await createJob(job);
    redirect("/company/jobs");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Post a New Job</h1>

      <form action={create} className="space-y-6">
        {/* Company Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Company Details</h2>
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium mb-1"
            >
              Company Name
            </label>
            <Input
              id="companyName"
              name="companyName"
              required
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label
              htmlFor="companyEmail"
              className="block text-sm font-medium mb-1"
            >
              Company Email
            </label>
            <Input
              id="companyEmail"
              name="companyEmail"
              type="email"
              required
              placeholder="contact@company.com"
            />
          </div>
        </div>

        {/* Job Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Job Details</h2>

          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Job Title
            </label>
            <Input
              id="title"
              name="title"
              required
              placeholder="e.g. Senior Software Engineer"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Job Description
            </label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="Enter detailed job description"
              className="h-32"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-1"
            >
              Category
            </label>
            <Select name="category" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">
              Job Type
            </label>
            <Select name="type" required>
              <SelectTrigger>
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FULL_TIME">Full Time</SelectItem>
                <SelectItem value="PART_TIME">Part Time</SelectItem>
                <SelectItem value="CONTRACT">Contract</SelectItem>
                <SelectItem value="INTERNSHIP">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium mb-1"
            >
              Location
            </label>
            <Input
              id="location"
              name="location"
              required
              placeholder="e.g. New York, NY or Remote"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="salaryMin"
                className="block text-sm font-medium mb-1"
              >
                Minimum Salary
              </label>
              <Input
                id="salaryMin"
                name="salaryMin"
                type="number"
                required
                placeholder="e.g. 50000"
              />
            </div>

            <div>
              <label
                htmlFor="salaryMax"
                className="block text-sm font-medium mb-1"
              >
                Maximum Salary
              </label>
              <Input
                id="salaryMax"
                name="salaryMax"
                type="number"
                required
                placeholder="e.g. 80000"
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Post Job
        </Button>
      </form>
    </div>
  );
}
