import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";

const AddJob = () => {
    const [logoPreview, setLogoPreview] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmitJob = async (event) => {
        event.preventDefault();
        const form = event.target;

        const jobData = {
            company: form.company.value,
            logo: form.logo.value,
            hr_name: form.hr_name.value,
            hr_email: form.hr_email.value,
            title: form.title.value,
            location: form.location.value,
            field: form.field.value,
            jobType: form.type.value,
            deadline: form.deadline.value,
            salaryRange: form.salary.value,
            description: form.description.value,
            requirements: form.requirements.value
                .split(",")
                .map((req) => req.trim())
                .filter((req) => req.length > 0),
        };

        console.log("Job submitted:", jobData);

        try {
            const res = await fetch("http://localhost:3000/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jobData),
            });

            const data = await res.json();
            console.log("Backend Response:", data);

            if (data.success) {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                    navigate("/postedJobs");
                }, 1500);
            }

            form.reset();
            setLogoPreview("");
        } catch (error) {
            console.error("Error submitting job:", error);
        }
    };

    const handleLogoChange = (e) => {
        const url = e.target.value;
        setLogoPreview(url);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-cyan-100 via-cyan-50 to-white py-10 px-4">
            <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md shadow-xl rounded-3xl border border-cyan-200 p-8">
                <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">
                    🚀 Post a New Job
                </h2>

                <form onSubmit={handleSubmitJob} className="space-y-6">
                    {/* Company Logo */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Company Logo URL
                        </label>
                        <input
                            type="url"
                            name="logo"
                            onChange={handleLogoChange}
                            className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            placeholder="https://example.com/logo.png"
                        />
                        {logoPreview && (
                            <div className="mt-3 flex justify-center">
                                <img
                                    src={logoPreview}
                                    alt="Company Logo Preview"
                                    className="w-24 h-24 object-contain border border-cyan-100 rounded-xl shadow-sm"
                                />
                            </div>
                        )}
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            placeholder="Enter company name"
                            required
                        />
                    </div>

                    {/* HR Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                HR Name
                            </label>
                            <input
                                type="text"
                                name="hr_name"
                                className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                                placeholder="Enter HR name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                HR Email
                            </label>
                            <input
                                type="email"
                                name="hr_email"
                                defaultValue={user?.email}
                                className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                                placeholder="Enter HR email"
                                required
                            />
                        </div>
                    </div>

                    {/* Job Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                                placeholder="Enter job title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Job Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                                placeholder="Enter location"
                                required
                            />
                        </div>
                    </div>

                    {/* Dropdowns */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Job Field
                            </label>
                            <select
                                name="field"
                                className="select select-bordered w-full focus:ring-2 focus:ring-cyan-400"
                                required
                            >
                                <option value="">Choose field</option>
                                <option>Engineering</option>
                                <option>Finance</option>
                                <option>Accounts</option>
                                <option>Design</option>
                                <option>Development</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Job Type
                            </label>
                            <select
                                name="type"
                                className="select select-bordered w-full focus:ring-2 focus:ring-cyan-400"
                                required
                            >
                                <option value="">Choose type</option>
                                <option>Remote</option>
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Internship</option>
                            </select>
                        </div>
                    </div>

                    {/* Salary */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Salary Range
                        </label>
                        <input
                            type="text"
                            name="salary"
                            className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            placeholder="e.g. $500 - $1500"
                        />
                    </div>
                    {/* application deadline */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            DeadLine
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            placeholder="Enter application deadline"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Job Description
                        </label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            placeholder="Write a short job description"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Requirements */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Job Requirements
                        </label>
                        <textarea
                            name="requirements"
                            className="textarea textarea-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            placeholder="Enter key requirements separated by commas. e.g. React, JavaScript, Tailwind"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="pt-4 text-center">
                        <button
                            type="submit"
                            className="btn bg-cyan-600 hover:bg-cyan-700 text-white font-semibold w-full md:w-1/2 rounded-full transition duration-200"
                        >
                            Submit Job
                        </button>
                    </div>
                </form>
            </div>

            {/* Success Message */}
            {showSuccess && (
                <div className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-2 rounded-lg shadow-lg animate-bounce">
                    ✅ Job Posted Successfully!
                </div>
            )}
        </div>
    );
};

export default AddJob;
