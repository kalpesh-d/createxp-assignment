import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    const { jobId } = await params;

    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    const { name, email, resumeUrl, coverLetter } = body;

    if (!name || !email || !resumeUrl) {
      return NextResponse.json(
        { error: "Name, email and resume URL are required" },
        { status: 400 }
      );
    }

    const existingApplication = await prisma.application.findFirst({
      where: {
        jobId,
        email,
      },
    });

    if (existingApplication) {
      return NextResponse.json(
        { error: "You have already applied for this job" },
        { status: 400 }
      );
    }

    const application = await prisma.application.create({
      data: {
        jobId,
        name,
        email,
        resumeUrl,
        coverLetter,
        status: "pending",
      },
    });

    return NextResponse.json(application);
  } catch (error) {
    console.error("[APPLICATION_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
