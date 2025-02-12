import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitApplication } from "@/app/action/applications";

export function ApplicationForm({ jobId }: { jobId: string }) {
  return (
    <form action={submitApplication} className="space-y-6">
      <input type="hidden" name="jobId" value={jobId} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <Input id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="resumeUrl" className="block text-sm font-medium mb-1">
          Resume URL
        </label>
        <Input
          id="resumeUrl"
          name="resumeUrl"
          type="url"
          required
          placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
        />
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium mb-1">
          Cover Letter
        </label>
        <Textarea
          id="coverLetter"
          name="coverLetter"
          required
          className="h-48"
        />
      </div>

      <Button type="submit" className="w-full">
        Submit Application
      </Button>
    </form>
  );
}
