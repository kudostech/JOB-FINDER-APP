import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Job Not Found</h1>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">{job.title}</h2>
        <p className="text-gray-600 mb-2">Company: {job.company}</p>
        <p className="text-gray-500 mb-4">Location: {job.location}</p>
        <p className="text-gray-700 mb-6">
          This is a placeholder description for the job. You can add any details
          such as responsibilities, requirements, and benefits.
        </p>
        <span className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
          {job.type}
        </span>
       <a
  href={job.applyUrl}
  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
>
  Apply Now
</a>
        <Link
          to="/"
          className="block mt-4 text-blue-600 hover:underline text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;
