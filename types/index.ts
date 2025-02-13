export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
  companyName: string;
  companyEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Application {
  id: string;
  name: string;
  email: string;
  resumeUrl: string;
  coverLetter: string | null;
  status: string;
  jobId: string;
  createdAt: Date;
  updatedAt: Date;
}
