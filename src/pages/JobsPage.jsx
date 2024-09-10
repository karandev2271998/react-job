import Joblisting from "../componentes/JobListings"

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-8">
      <Joblisting viewAllJobs={true} />
    </section>
  )
}

export default JobsPage