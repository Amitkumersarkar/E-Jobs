import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const linkedIn = form.linkedIn.value.trim();
        const github = form.github.value.trim();
        const resume = form.resume.value.trim();

        if (!linkedIn || !github || !resume) {
            Swal.fire("Oops!", "Please fill in all fields.", "warning");
            setLoading(false);
            return;
        }

        const jobApplication = {
            job_id: id,
            applicant_email: user?.email,
            linkedIn,
            github,
            resume,
            applied_date: new Date().toISOString(),
        };

        try {
            const res = await fetch("https://job-portal-server-bay-zeta.vercel.app/job-applications", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(jobApplication),
            });

            const data = await res.json();

            if (data.success || data.insertedId) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Application submitted successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/myApplications");
            } else {
                Swal.fire("Error", "Failed to submit your application.", "error");
            }
        } catch (err) {
            Swal.fire("Server Error", "Something went wrong. Please try again.", "error");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-4 sm:p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-cyan-100"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-cyan-700">
                    Apply for Job
                </h2>

                <div className="form-control mb-4">
                    <label className="label font-medium text-cyan-600">LinkedIn URL</label>
                    <input
                        name="linkedIn"
                        type="url"
                        placeholder="Enter your LinkedIn profile URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label font-medium text-cyan-600">GitHub URL</label>
                    <input
                        name="github"
                        type="url"
                        placeholder="Enter your GitHub profile URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="form-control mb-6">
                    <label className="label font-medium text-cyan-600">Resume URL</label>
                    <input
                        name="resume"
                        type="url"
                        placeholder="Enter your resume link"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-info w-full font-semibold text-white tracking-wide"
                >
                    {loading ? "Submitting..." : "Apply Now"}
                </button>
            </form>
        </div>
    );
};

export default JobApply;
