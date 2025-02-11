import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get("companyId");

    if (!companyId) {
      return NextResponse.json(
        { error: "Company ID is required" },
        { status: 400 }
      );
    }

    const jobs = await prisma.job.findMany({
      where: {
        companyId: companyId,
      },
    });

    if (!jobs.length) {
      return NextResponse.json(
        { message: "No jobs found for this company" },
        { status: 200 }
      );
    }

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching company jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch company jobs" },
      { status: 500 }
    );
  }
}
