import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/useAuth";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/job-application?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setJobs(data))
                .catch((err) => console.error("Failed to fetch jobs:", err));
        }
    }, [user?.email]);

    const getStatusBadgeClass = (status) => {
        switch (status?.toLowerCase()) {
            case "approved":
                return "badge badge-success";
            case "rejected":
                return "badge badge-error";
            case "pending":
                return "badge badge-warning";
            default:
                return "badge badge-ghost";
        }
    };

    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedJob(null);
        setIsModalOpen(false);
    };

    return (
        <div>
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
                            <th></th>
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
                                        <span className="badge badge-ghost badge-sm">{job.position}</span>
                                    </td>
                                    <td>
                                        <span className={getStatusBadgeClass(job.status)}>
                                            {job.status || "Pending"}
                                        </span>
                                    </td>
                                    <th>
                                        <button
                                            className="btn btn-ghost btn-xs"
                                            onClick={() => openModal(job)}
                                        >
                                            Details
                                        </button>
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
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-600 rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
                        <h3 className="text-xl font-bold mb-4">Application Details</h3>
                        <p><strong>Name:</strong> {selectedJob.name}</p>
                        <p><strong>Email:</strong> {selectedJob.email}</p>
                        <p><strong>Location:</strong> {selectedJob.location}</p>
                        <p><strong>Company:</strong> {selectedJob.company}</p>
                        <p><strong>Position:</strong> {selectedJob.position}</p>
                        <p>
                            <strong>Status:</strong>{" "}
                            <span className={getStatusBadgeClass(selectedJob.status)}>
                                {selectedJob.status || "Pending"}
                            </span>
                        </p>
                        <p><strong>Applied On:</strong> {selectedJob.appliedOn || "N/A"}</p>

                        <button
                            className="btn btn-sm btn-error mt-4 absolute top-2 right-2"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyApplications;
