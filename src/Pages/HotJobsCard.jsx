import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
    const {
        _id,
        company,
        logo,
        title,
        location,
        salary,
        requirements = [],
        description,
        type,
        deadline
    } = job;

    //  Handle logo display 
    const logoSrc = logo?.startsWith("http")
        ? logo
        : logo
            ? `http://localhost:3000/${logo}`
            : "https://via.placeholder.com/64?text=Logo";

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col w-full sm:w-80 md:w-96 h-full"
        >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 bg-cyan-50">
                <figure>
                    <img
                        src={logoSrc}
                        alt={company}
                        className="w-16 h-16 object-contain rounded-xl border border-gray-200 p-2 bg-white"
                    />
                </figure>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{company}</h2>
                    <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <FaMapLocationDot className="text-cyan-600" /> {location}
                    </p>
                </div>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-cyan-700">{title}</h3>
                    {type && (
                        <span className="badge bg-cyan-100 text-cyan-700 border-none">
                            {type}
                        </span>
                    )}
                </div>

                <p className="text-gray-600 text-sm line-clamp-4 flex-1">{description}</p>

                {/* Requirements */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {(Array.isArray(requirements)
                        ? requirements
                        : requirements?.split(",") || []
                    )
                        .slice(0, 5)
                        .map((req, idx) => (
                            <span
                                key={idx}
                                className="text-sm px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 hover:bg-cyan-100 transition-colors"
                            >
                                {req.trim()}
                            </span>
                        ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="flex flex-col items-start text-sm sm:text-base font-medium text-gray-700">
                        {/*  Deadline above salary */}
                        {deadline && (
                            <p className="flex items-center gap-1 text-gray-600">
                                <FaRegCalendarAlt className="text-cyan-600 text-base" />
                                Deadline:{" "}
                                <span className="font-medium text-gray-800">
                                    {new Date(deadline).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </span>
                            </p>
                        )}
                        <p className="flex items-center gap-1 mt-1">
                            <HiCurrencyBangladeshi className="text-cyan-600 text-lg" />
                            {salary || "Negotiable"}
                        </p>
                    </div>

                    <Link to={`/jobs/${_id}`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary rounded-full px-5 text-sm sm:text-base w-full sm:w-auto"
                        >
                            Apply Now
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default HotJobsCard;
