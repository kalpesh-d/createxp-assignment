import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ApplicationSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <h1 className="text-2xl font-bold mb-4">Application Submitted!</h1>
      <p className="text-gray-600 mb-6">
        Thank you for your application. The company will review your submission
        and contact you if they'd like to move forward.
      </p>
      <Link href="/candidate/jobs">
        <Button>Browse More Jobs</Button>
      </Link>
    </div>
  );
}
