import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                Swal.fire({
                    title: "Jobs Loaded!",
                    text: `${data.length} job(s) found.`,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            })
            .catch((err) => {
                console.error("Error loading jobs:", err);
                Swal.fire({
                    title: "Error",
                    text: "Failed to load your posted jobs.",
                    icon: "error",
                });
            });
    }, [user?.email]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-cyan-50 py-10 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-bold text-cyan-700 mb-8 text-center">
                My Posted Jobs
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table w-full border border-gray-200 rounded-lg bg-white shadow-sm">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th>#</th>
                            <th>Company</th>
                            <th>Field</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr
                                key={job._id}
                                className="hover:bg-cyan-50 transition-all"
                            >
                                <th>{index + 1}</th>
                                <td>{job.company}</td>
                                <td>{job.field}</td>
                                <td>{job.jobType}</td>
                                <td>{job.location}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button
                                            className="btn btn-info btn-sm font-semibold"
                                            onClick={() =>
                                                Swal.fire({
                                                    title: "Opening Applications",
                                                    text: "Loading job applicants...",
                                                    icon: "info",
                                                    timer: 1000,
                                                    showConfirmButton: false,
                                                })
                                            }
                                        >
                                            View Applications
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {jobs.map((job, index) => (
                    <div
                        key={job._id}
                        className="bg-white shadow-sm border border-gray-200 rounded-2xl p-4"
                    >
                        <h3 className="font-semibold text-cyan-700 text-lg mb-2">
                            {index + 1}. {job.company}
                        </h3>
                        <p className="text-gray-700 text-sm">
                            <strong>Field:</strong> {job.field}
                        </p>
                        <p className="text-gray-700 text-sm">
                            <strong>Type:</strong> {job.jobType}
                        </p>
                        <p className="text-gray-700 text-sm">
                            <strong>Location:</strong> {job.location}
                        </p>
                        <div className="mt-3">
                            <Link to={`/viewApplications/${job._id}`}>
                                <button
                                    className="btn btn-info btn-sm font-semibold w-full"
                                    onClick={() =>
                                        Swal.fire({
                                            title: "Opening Applications",
                                            text: "Loading job applicants...",
                                            icon: "info",
                                            timer: 1000,
                                            showConfirmButton: false,
                                        })
                                    }
                                >
                                    View Applications
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {jobs.length === 0 && (
                <p className="text-center text-gray-600 mt-6">
                    You haven’t posted any jobs yet.
                </p>
            )}
        </div>
    );
};

export default MyPostedJobs;
