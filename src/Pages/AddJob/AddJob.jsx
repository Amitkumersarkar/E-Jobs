import React, { useState } from "react";

const AddJob = () => {
    const [jobData, setJobData] = useState({
        company: "",
        hr_name: "",
        email: "",
        title: "",
        location: "",
        field: "",
        jobType: "",
        salary: "",
        description: "",
        requirements: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    return (
        <section className="bg-gradient-to-br from-cyan-50 to-white min-h-screen flex flex-col items-center py-10 px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-600 mb-10 text-center">
                Post a New Job
            </h2>

            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
                {/*  Form Section  */}
                <form className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-cyan-100">
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold text-cyan-500 mb-2 border-b pb-2">
                            Job Information
                        </legend>

                        {[
                            { label: "Company Name", name: "company", type: "text" },
                            { label: "HR Name", name: "hr_name", type: "text" },
                            { label: "HR Email", name: "email", type: "email" },
                            { label: "Job Title", name: "title", type: "text" },
                            { label: "Job Location", name: "location", type: "text" },
                            { label: "Salary Range", name: "salary", type: "text" },
                        ].map((field) => (
                            <div key={field.name}>
                                <label className="block font-semibold text-gray-700 mb-1">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={jobData[field.name]}
                                    onChange={handleChange}
                                    placeholder={`Enter ${field.label}`}
                                    className="input input-bordered w-full focus:ring-2 focus:ring-cyan-400"
                                />
                            </div>
                        ))}

                        {/* Job Field */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">
                                Job Field
                            </label>
                            <select
                                name="field"
                                value={jobData.field}
                                onChange={handleChange}
                                className="select select-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            >
                                <option value="">Select a field</option>
                                <option>Engineering</option>
                                <option>Finance</option>
                                <option>Accounts</option>
                                <option>Management</option>
                                <option>Design</option>
                                <option>Development</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">
                                Job Type
                            </label>
                            <select
                                name="jobType"
                                value={jobData.jobType}
                                onChange={handleChange}
                                className="select select-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            >
                                <option value="">Select job type</option>
                                <option>Remote</option>
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Internship</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">
                                Job Description
                            </label>
                            <textarea
                                name="description"
                                value={jobData.description}
                                onChange={handleChange}
                                placeholder="Write a short job description..."
                                rows={4}
                                className="textarea textarea-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            ></textarea>
                        </div>

                        {/* Requirements */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">
                                Job Requirements
                            </label>
                            <textarea
                                name="requirements"
                                value={jobData.requirements}
                                onChange={handleChange}
                                placeholder="List key skills and qualifications..."
                                rows={4}
                                className="textarea textarea-bordered w-full focus:ring-2 focus:ring-cyan-400"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 text-center">
                            <button className="btn btn-primary w-full md:w-1/2 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition">
                                Submit Job
                            </button>
                        </div>
                    </fieldset>
                </form>

                {/*  Live Preview Section  */}
                <div className="bg-white shadow-md rounded-2xl p-6 border border-cyan-100 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-cyan-600 mb-4 border-b pb-2">
                        Live Job Preview
                    </h3>

                    <div className="space-y-3 text-gray-700">
                        <p>
                            <span className="font-bold">🏢 Company:</span>{" "}
                            {jobData.company || "Not specified"}
                        </p>
                        <p>
                            <span className="font-bold">💼 Job Title:</span>{" "}
                            {jobData.title || "Not specified"}
                        </p>
                        <p>
                            <span className="font-bold">📍 Location:</span>{" "}
                            {jobData.location || "Not specified"}
                        </p>
                        <p>
                            <span className="font-bold">🧩 Field:</span>{" "}
                            {jobData.field || "Not specified"}
                        </p>
                        <p>
                            <span className="font-bold">🕒 Type:</span>{" "}
                            {jobData.jobType || "Not specified"}
                        </p>
                        <p>
                            <span className="font-bold">💰 Salary:</span>{" "}
                            {jobData.salary || "Not specified"}
                        </p>
                        <p>
                            <span className="font-bold">📝 Description:</span>{" "}
                            {jobData.description || "No description added"}
                        </p>
                        <p>
                            <span className="font-bold">📋 Requirements:</span>{" "}
                            {jobData.requirements || "No requirements added"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddJob;
