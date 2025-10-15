import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, company, deadline } = useLoaderData();
    // console.log(job);
    return (
        <div className="m-12">
            <h2 className="text-2xl">job details for : {title}</h2>
            <p>apply for : {company}</p>
            <p>Deadline : {deadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-info">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;