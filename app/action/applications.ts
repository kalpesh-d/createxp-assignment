"use server";

import { applicationMethods } from "@/lib/methods";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function submitApplication(formData: FormData) {
  try {
    const application = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      resumeUrl: formData.get("resumeUrl") as string,
      coverLetter: formData.get("coverLetter") as string,
      jobId: formData.get("jobId") as string,
    };

    // Validate the data
    if (
      !application.name ||
      !application.email ||
      !application.resumeUrl ||
      !application.coverLetter
    ) {
      throw new Error("Missing required fields");
    }

    await applicationMethods.createApplication(application);

    // Redirect to success page
    redirect("/candidate/applications/success");
  } catch (error) {
    console.error("Error submitting application:", error);
    throw new Error("Failed to submit application");
  }
}

export async function updateApplicationStatus(id: string, status: string) {
  try {
    await applicationMethods.updateApplicationStatus(id, status);
    revalidatePath("/company/jobs/[id]/applications");
  } catch (error) {
    console.error("Error updating application status:", error);
    throw new Error("Failed to update application status");
  }
}
