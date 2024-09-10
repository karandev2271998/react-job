const JobListingService = {
    getJobs: async (viewAllJobs) => {
        try {
            let endpoint = !viewAllJobs ? 'api/jobs/?_limit=3' : 'api/jobs'
            let res = await fetch(endpoint);
            let data = await res.json();
            return data;
        } catch (error) {
            console.log(error, "getting error while fething the jobs in JobListing useEffect function");
        }
    },

    getJob: async (id) => {
        try {
            let endpoint = `/api/jobs/${id}`;
            let res = await fetch(endpoint);
            let data = await res.json();
            return data;
        } catch (error) {
            console.log(error, "getting error while fething the job in JobListing getJob useEffect function");
        }
    },

    addNewJOb: async (newJob) => {
        try {
            let endpoint = `/api/jobs`;
            let res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newJob),
            });
            console.log(res, 'res-output');
            return res;
        } catch (error) {
            console.log(error, "getting error while adding the job in JobListing addNewJOb function");
        }
    },

    deleteJob: async (jobId) => {
        try {
            let endpoint = `/api/jobs/${jobId}`;
            let res = await fetch(endpoint, {
                method: 'DELETE',
            });
            return res;
        } catch (error) {
            console.log(error, "getting error while deleting the job in JobListing deleteJob function");
        }
    },

    updateJob: async (job) => {
        try {
            let endpoint = `/api/jobs/${job.id}`;
            let res = await fetch(endpoint, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(job),
            });
            return res;
        } catch (error) {
            console.log(error, "getting error while updatin the job in JobListing updateJob function");
        }
    },


}
export default JobListingService;




