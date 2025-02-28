import { ApplicationStatus, JobType } from "@prisma/client";
import prisma from "./prisma";

// Job-related methods
export const jobMethods = {
  // Get all jobs with optional filtering
  async getJobs(params: {
    skip?: number;
    take?: number;
    category?: string;
    location?: string;
    searchTerm?: string;
  }) {
    const { skip = 0, take = 10, category, location, searchTerm } = params;

    return prisma.job.findMany({
      where: {
        AND: [
          category ? { category } : {},
          location ? { location } : {},
          searchTerm
            ? {
                OR: [
                  { title: { contains: searchTerm, mode: "insensitive" } },
                  {
                    description: { contains: searchTerm, mode: "insensitive" },
                  },
                  {
                    companyName: { contains: searchTerm, mode: "insensitive" },
                  },
                ],
              }
            : {},
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take,
    });
  },

  // Get a single job by ID
  async getJob(id: string) {
    return prisma.job.findUnique({
      where: { id },
      include: {
        _count: {
          select: { applications: true },
        },
      },
    });
  },

  // Get all jobs for a specific company
  async getCompanyJobs() {
    return prisma.job.findMany({
      include: {
        _count: {
          select: { applications: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // Create a new job
  async createJob(data: {
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
    return prisma.job.create({ data });
  },
};

// Application-related methods
export const applicationMethods = {
  // Create a new application
  async createApplication(data: {
    name: string;
    email: string;
    resumeUrl: string;
    coverLetter: string;
    jobId: string;
  }) {
    return prisma.application.create({
      data: {
        ...data,
        status: "PENDING",
      },
    });
  },

  // Get all applications for a specific job
  async getJobApplications(jobId: string) {
    return prisma.application.findMany({
      where: {
        jobId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // Update application status
  async updateApplicationStatus(id: string, status: string) {
    return prisma.application.update({
      where: { id },
      data: { status: status as ApplicationStatus },
    });
  },

  // Get application statistics for a job
  async getApplicationStats(jobId: string) {
    return prisma.application.groupBy({
      by: ["status"],
      where: {
        jobId,
      },
      _count: true,
    });
  },
};
