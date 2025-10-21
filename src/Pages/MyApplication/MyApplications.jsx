import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch user's applications
    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`https://job-portal-server-bay-zeta.vercel.app/job-application?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setJobs(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Failed to fetch jobs:", err);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    // Delete application
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This application will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch(`https://job-portal-server-bay-zeta.vercel.app/job-applications/${id}`, {
                    method: "DELETE",
                });
                const data = await res.json();

                if (data.success) {
                    setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));

                    Swal.fire({
                        title: "Deleted!",
                        text: "Application has been removed successfully.",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: data.message || "Failed to delete the application.",
                        icon: "error",
                    });
                }
            } catch (err) {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while deleting.",
                    icon: "error",
                });
                console.error("Error deleting application:", err);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-cyan-60 to-white py-10 px-4">
            <h2 className="text-3xl font-bold mb-6 text-cyan-700">
                My Applications ({jobs.length})
            </h2>

            <div className="overflow-x-auto ">
                <table className="table w-full border border-gray-200 rounded-lg shadow-sm">
                    <thead className="bg-cyan-50">
                        <tr>
                            <th></th>
                            <th>Company</th>
                            <th>Job Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-500">
                                    Loading...
                                </td>
                            </tr>
                        ) : jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <tr key={job._id || index} className="hover:bg-gray-50">
                                    <th>{index + 1}</th>

                                    {/* Company with Logo */}
                                    <td className="flex items-center gap-3 py-2">
                                        {job.logo ? (
                                            <img
                                                src={job.logo}
                                                alt={job.company}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                                                N/A
                                            </div>
                                        )}
                                        <span className="font-medium">{job.company}</span>
                                    </td>

                                    {/* Job Type */}
                                    <td>{job.jobType || "N/A"}</td>

                                    {/* Status Badge */}
                                    <td>
                                        <span
                                            className={`badge ${job.status === "Approved"
                                                ? "badge-success"
                                                : job.status === "Rejected"
                                                    ? "badge-error"
                                                    : "badge-warning"
                                                } badge-sm`}
                                        >
                                            {job.status || "Pending"}
                                        </span>
                                    </td>

                                    {/* Delete Button */}
                                    <td>
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className="btn btn-ghost btn-xs text-red-500 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-500">
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
