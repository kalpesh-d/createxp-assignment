"use client";

import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitApplication } from "@/app/action/applications";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Submit Application"
      )}
    </Button>
  );
}

export function ApplicationForm({ jobId }: { jobId: string }) {
  return (
    <form action={submitApplication} className="space-y-6">
      <input type="hidden" name="id" value={jobId} />

      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Please enter a valid email address"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="resumeUrl" className="block text-sm font-medium">
          Resume URL
        </label>
        <Input
          id="resumeUrl"
          name="resumeUrl"
          type="url"
          required
          placeholder="https://drive.google.com/your-resume"
          title="Please enter a valid URL starting with http:// or https://"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="coverLetter" className="block text-sm font-medium">
          Cover Letter
        </label>
        <Textarea
          id="coverLetter"
          name="coverLetter"
          required
          className="h-48 resize-y min-h-[12rem]"
          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
        />
      </div>

      <SubmitButton />
    </form>
  );
}
