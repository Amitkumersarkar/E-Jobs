import React from "react";

const AddJob = () => {
    return (
        <div className="flex flex-col items-center px-4 py-8 bg-cyan-50 min-h-screen">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-cyan-600">
                Post a New Job
            </h2>

            <form className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
                <fieldset className="border border-cyan-300 rounded-lg p-4">
                    <legend className="text-lg font-semibold text-center text-cyan-500 px-2">
                        Job Information
                    </legend>

                    {/* Job Title */}
                    <label className="label font-bold text-cyan-500 mt-4">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input input-bordered w-full"
                        placeholder="Enter job title"
                    />

                    {/* Job Location */}
                    <label className="label font-bold text-cyan-500 mt-4">Job Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full"
                        placeholder="Enter job location"
                    />

                    {/* Job Field */}
                    <label className="label font-bold text-cyan-500 mt-4">Job Field</label>
                    <select className="select select-bordered w-full">
                        <option disabled selected>
                            Pick a field
                        </option>
                        <option>Engineering</option>
                        <option>Finance</option>
                        <option>Accounts</option>
                        <option>Management</option>
                    </select>

                    {/* Job Type */}
                    <label className="label font-bold text-cyan-500 mt-4">Job Type</label>
                    <select className="select select-bordered w-full">
                        <option disabled selected>
                            Pick a job type
                        </option>
                        <option>Remote</option>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Internship</option>
                    </select>

                    {/* Salary Range */}
                    <label className="label font-bold text-cyan-500 mt-4">Salary Range</label>
                    <input
                        type="text"
                        name="salary"
                        className="input input-bordered w-full"
                        placeholder="e.g. $500 - $1500 per month"
                    />

                    {/* Job Description */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold">Job Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            name="description"
                            placeholder="Add Job Requirements"
                            rows={5}
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 flex justify-center">
                        <button className="btn btn-primary w-full md:w-1/2 hover:bg-cyan-700 transition">
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;
