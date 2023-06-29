import { JobsView } from "../components/JobsView"

export const JobsPage = ({allJobs}) => {

  return (
    <div className="pt-40 px-8">
      <JobsView jobs={allJobs}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/getJobs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allJobs = await res.json();

  return {
    props: { allJobs },
  };
}
export default JobsPage