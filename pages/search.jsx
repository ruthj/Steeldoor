import { TextInput } from '../components/inputs/TextInput'


export const search = ({allJobs}) => {
  console.log("allJobs",allJobs)
  return (
    <div className="flex justify-center">
     
        <TextInput />
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

export default search