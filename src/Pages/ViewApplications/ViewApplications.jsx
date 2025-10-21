import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const { job_id } = useParams();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://job-portal-server-bay-zeta.vercel.app/job-applications/jobs/${job_id}`)
            .then((res) => res.json())
            .then((data) => {
                setApplications(Array.isArray(data) ? data : []);
                setLoading(false);

                // console.log("Requested job_id:", job_id); 

                if (data.length > 0) {
                    Swal.fire({
                        title: "Applications Loaded!",
                        text: `${data.length} application(s) found.`,
                        icon: "success",
                        timer: 1800,
                        showConfirmButton: false,
                    });
                } else {
                    Swal.fire({
                        title: "No Applications Found",
                        text: "There are no applicants for this job yet.",
                        icon: "info",
                        timer: 1800,
                        showConfirmButton: false,
                    });
                }
            })
            .catch((err) => {
                console.error("Error loading applications:", err);
                setLoading(false);
                Swal.fire({
                    title: "Error",
                    text: "Failed to load applications. Please try again later.",
                    icon: "error",
                });
            });
    }, [job_id]);


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-cyan-600"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-cyan-50 py-10 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-700">
                Applications
            </h2>

            {applications.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">
                    No applications found for this job.
                </p>
            ) : (
                <>
                    {/* Table for large screens */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="table w-full border border-gray-200 rounded-lg bg-white shadow-sm">
                            <thead className="bg-cyan-600 text-white">
                                <tr>
                                    <th>#</th>
                                    <th>Applicant Name</th>
                                    <th>Email</th>
                                    <th>Resume</th>
                                    <th>Applied On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((app, index) => (
                                    <tr
                                        key={app._id}
                                        className="hover:bg-cyan-50 transition-all"
                                    >
                                        <th>{index + 1}</th>
                                        <td>{app.applicant_name}</td>
                                        <td>{app.applicant_email}</td>
                                        <td>
                                            {app.resume ? (
                                                <a
                                                    href={app.resume}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-blue-500 underline"
                                                >
                                                    View Resume
                                                </a>
                                            ) : (
                                                "N/A"
                                            )}
                                        </td>
                                        <td>{app.applied_date || "—"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card layout for mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                        {applications.map((app, index) => (
                            <div
                                key={app._id}
                                className="bg-white shadow-sm border border-gray-200 rounded-2xl p-4"
                            >
                                <h3 className="font-semibold text-cyan-700 text-lg mb-2">
                                    {index + 1}. {app.applicant_name}
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    <strong>Email:</strong> {app.applicant_email}
                                </p>
                                <p className="text-gray-700 text-sm">
                                    <strong>Applied On:</strong> {app.applied_date || "—"}
                                </p>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Resume:</strong>{" "}
                                    {app.resume ? (
                                        <a
                                            href={app.resume}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-500 underline"
                                        >
                                            View Resume
                                        </a>
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ViewApplications;
