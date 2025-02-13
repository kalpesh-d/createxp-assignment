"use server";
import { applicationMethods } from "@/lib/methods";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function submitApplication(formData: FormData) {
  try {
    // Get all form data
    const name = formData.get("name");
    const email = formData.get("email");
    const resumeUrl = formData.get("resumeUrl");
    const coverLetter = formData.get("coverLetter");
    const jobId = formData.get("id");

    // Validate all required fields are present and not empty
    if (!name || !email || !resumeUrl || !jobId) {
      throw new Error("Missing required fields");
    }

    // Create the application object with validated data
    const application = {
      name: name.toString().trim(),
      email: email.toString().trim(),
      resumeUrl: resumeUrl.toString().trim(),
      coverLetter: coverLetter ? coverLetter.toString().trim() : "",
      jobId: jobId.toString().trim(),
    };

    // Additional validation
    if (!application.name || !application.email || !application.jobId) {
      throw new Error("Invalid input data");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(application.email)) {
      throw new Error("Invalid email format");
    }

    // Create the application
    const result = await applicationMethods.createApplication(application);

    if (!result) {
      throw new Error("Failed to create application");
    }

    // Only redirect if the creation was successful
    redirect("/candidate/applications/success");
  } catch (error) {
    // Log the actual error for debugging
    console.error("Error submitting application:", error);

    // Throw a more user-friendly error
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Failed to submit application");
    }
  }
}

export async function updateApplicationStatus(id: string, status: string) {
  if (!id || !status) {
    throw new Error("ID and status are required");
  }

  try {
    const result = await applicationMethods.updateApplicationStatus(id, status);
    if (!result) {
      throw new Error("Failed to update status");
    }

    revalidatePath("/company/jobs/[id]/applications");
    return result;
  } catch (error) {
    console.error("Error updating application status:", error);
    throw new Error("Failed to update application status");
  }
}
