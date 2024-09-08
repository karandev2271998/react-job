import { useEffect, useState } from "react";

import jobs from "../jobs.json";
import JobListing from "./JobListing";
function JobListings({viewAllJobs=false}) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect( () => {
    const fetchJobs = async () => {
      try {
        let res = await fetch('http://localhost:3000/jobs');
        let data = await res.json();
        let recentJobs = !viewAllJobs ? data.slice(0,3) : data
        setJobs(recentJobs);
      } catch (error) {
        console.log(error, "getting error while fething the jobs in JobListing useEffect function");
      }
    }
    fetchJobs();
  }, [])
  
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {!viewAllJobs ? 'Recent Jobs' : 'Browse Jobs' }
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
