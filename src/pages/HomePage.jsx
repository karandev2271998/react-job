import React from "react";
import Hero from "../componentes/Hero";
import HomeCards from "../componentes/HomeCards";
import JobListings from "../componentes/JobListings";
import ViewAllJobs from "../componentes/ViewAllJobs";
const HomePage = () => {
  let title = "Become a React Dev";
  let subTitle = "Find the React job that fits your skills and needs";
  return (
    <>
      <Hero title={title} subTitle={subTitle} />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
