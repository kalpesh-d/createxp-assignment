import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Job Board
      </h1>
      <div className="flex gap-4">
        <Link href="/candidate/jobs">
          <Button size="lg">I&apos;m a Candidate</Button>
        </Link>
        <Link href="/company/jobs">
          <Button size="lg" variant="outline">
            I&apos;m an Employer
          </Button>
        </Link>
      </div>
    </div>
  );
}
