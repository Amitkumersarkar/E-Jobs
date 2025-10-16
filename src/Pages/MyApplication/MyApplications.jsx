import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/useAuth";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/job-application?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setJobs(data);
                })
                .catch((err) => console.error("Failed to fetch jobs:", err));
        }
    }, [user?.email]);

    return (
        <div className="w-11/12 mx-auto m-20">
            <h2 className="text-2xl mb-4">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <tr key={job._id || index}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.avatar || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                        alt={job.name}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.name}</div>
                                                <div className="text-sm opacity-50">{job.location || "Unknown"}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.company}
                                        <br />
                                        <span className="badge badge-info badge-sm">{job.position}</span>
                                    </td>
                                    <td>{job.status || "Pending"}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    No applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;
