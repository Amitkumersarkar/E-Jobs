import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";
import { motion } from "framer-motion";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <section className="bg-cyan-50 py-12 px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700">
                    Hot Jobs
                </h2>
                <p className="text-gray-600 mt-2">
                    Explore the latest job opportunities and find your perfect match.
                </p>
                <div className="w-24 h-1 bg-cyan-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Jobs Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <motion.div
                        key={job._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HotJobsCard job={job} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HotJobs;
