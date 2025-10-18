import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/useAuth";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error("Error loading jobs:", err));
    }, [user?.email]);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-cyan-100 via-cyan-50 to-white py-10 px-4">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Company Name</th>
                            <th>Job Field</th>
                            <th>Job Type</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{job.company}</td>
                                <td>{job.field}</td>
                                <td>{job.jobType}</td>
                                <td>{job.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
