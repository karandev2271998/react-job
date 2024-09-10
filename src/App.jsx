import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import PageNotFound from "./pages/PageNotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import JobListingService from "./services/JobListing";
import EditJobPage from "./pages/EditJobPage";
let addJob = (newJob) => {
  JobListingService.addNewJOb(newJob);
}

let deleteJob = (jobId) => {
  JobListingService.deleteJob(jobId);
}

let updateJob = (job) => {
  JobListingService.updateJob(job);
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />}/>
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path="/edit-jobs/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
