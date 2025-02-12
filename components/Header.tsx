import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Job Board
        </Link>
        <nav className="space-x-4">
          <Link href="/candidate/jobs" className="hover:text-gray-600">
            Find Jobs
          </Link>
          <Link href="/company/jobs" className="hover:text-gray-600">
            Post Jobs
          </Link>
        </nav>
      </div>
    </header>
  );
}
