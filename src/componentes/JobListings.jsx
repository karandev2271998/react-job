import { useEffect, useState } from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";
import JobListingService from "../services/JobListing";
import Spinner from "./Spinner";
function JobListings({ viewAllJobs = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let data = await JobListingService.getJobs(viewAllJobs);
        setJobs(data);
      } catch (error) {
        console.log(error, "getting error while fething the jobs in JobListing useEffect function");
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [])


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {!viewAllJobs ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (<Spinner loading={loading} />) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobListings;
