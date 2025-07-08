/* eslint-disable react/prop-types */
const JobCard = ({ job }) => {
    return (
        <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.description.slice(0, 100)}...</p>
            <span className="text-blue-600 font-semibold">£{job.price}</span>
        </div>
    );
};

export default JobCard;
