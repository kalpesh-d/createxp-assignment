// interface Jobs {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   location: string;
//   salaryMin?: number;
//   salaryMax?: number;
//   type: string;
//   requirements?: string;
//   companyId: string;
// }

const JobsPage = async () => {
  // const BaseUrl = 'http://localhost:3000/api/jobs';

  // const res = await fetch(BaseUrl)
  // const data: Jobs[] = await res.json(); 

  return (
    <ul>
      {/* {data.map(job => (
        <li key={job.id}>{job.title}</li>
      ))} */}
    </ul>
  )
}

export default JobsPage