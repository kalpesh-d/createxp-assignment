"use server";

import { jobMethods } from "@/lib/methods";
import { JobType } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createJob(job: {
  title: string;
  description: string;
  category: string;
  location: string;
  type: JobType;
  salaryMin: number;
  salaryMax: number;
  companyName: string;
  companyEmail: string;
}) {
  try {
    if (!job.title || !job.description || !job.companyEmail) {
      throw new Error("Missing required fields");
    }

    if (job.salaryMin > job.salaryMax) {
      throw new Error("Minimum salary cannot be greater than maximum salary");
    }

    await jobMethods.createJob(job);

    // Revalidate the jobs list page
    revalidatePath("/company/jobs");
    revalidatePath("/candidate/jobs");

    return { success: true };
  } catch (error) {
    console.error("Error creating job:", error);
    throw new Error("Failed to create job posting");
  }
}
