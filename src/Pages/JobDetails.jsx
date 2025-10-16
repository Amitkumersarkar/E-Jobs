import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, company, deadline, description, salaryRange } =
        useLoaderData();

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-12">
            <h2 className="text-3xl font-bold text-cyan-700 mb-4">{title}</h2>


            <div className="text-gray-700 mb-2">
                <strong>Company:</strong> {company}
            </div>

            {salaryRange && (
                <div className="text-gray-700 mb-2">
                    <strong>Salary:</strong> {salaryRange.min}-{salaryRange.max}{" "}
                    {salaryRange.currency}
                </div>
            )}

            <div className="text-gray-700 mb-4">
                <strong>Deadline:</strong> {deadline}
            </div>

            {description && (
                <p className="text-gray-600 mb-6">{description}</p>
            )}

            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-info hover:scale-105 transition transform">
                    Apply Now
                </button>
            </Link>
        </div>
    );
};

export default JobDetails;
