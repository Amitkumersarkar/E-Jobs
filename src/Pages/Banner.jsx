import { motion } from "framer-motion";
import team1 from "../assets/images/peopleInOffice.jpg";
import team2 from "../assets/images/excited.jpg";
import team3 from "../assets/images/businesspeople-meeting.jpg";
import team4 from "../assets/images/office-space.jpg";
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-cyan-100 min-h-screen flex items-center px-6 py-10">
            {/* Decorative Background Shapes  */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-cyan-200 opacity-30 rounded-full top-10 -left-16 blur-3xl"></div>
                <div className="absolute w-96 h-96 bg-pink-200 opacity-25 rounded-full bottom-0 right-10 blur-3xl"></div>
                <div className="absolute w-64 h-64 bg-cyan-300 opacity-20 rounded-full bottom-20 left-1/3 blur-2xl"></div>
            </div>

            {/*  Main Content  */}
            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10">

                {/*  TEXT SECTION  */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-5xl font-extrabold text-cyan-700 leading-tight"
                    >
                        Find Your Next <br />
                        <span className="text-cyan-500">Dream Job</span> Today
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-gray-600 text-base leading-relaxed"
                    >
                        Join thousands of professionals and discover top job opportunities
                        across industries. Let’s build your career path together.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary mt-4"
                    >
                        <NavLink to='/hot-jobs'>Explore Jobs</NavLink>
                    </motion.button>
                </div>

                {/*  IMAGE SECTION  */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-5 justify-items-center relative">
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white p-2 rounded-2xl shadow-lg border border-cyan-200 transform hover:scale-105 duration-300"
                    >
                        <img
                            src={team1}
                            alt="Team working"
                            className="rounded-xl w-44 sm:w-52 md:w-60 object-cover"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white p-2 rounded-2xl shadow-lg border border-cyan-200 transform hover:scale-105 duration-300"
                    >
                        <img
                            src={team2}
                            alt="Excited team"
                            className="rounded-xl w-44 sm:w-52 md:w-60 object-cover"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white p-2 rounded-2xl shadow-lg border border-cyan-200 transform hover:scale-105 duration-300"
                    >
                        <img
                            src={team3}
                            alt="Meeting"
                            className="rounded-xl w-44 sm:w-52 md:w-60 object-cover"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white p-2 rounded-2xl shadow-lg border border-cyan-200 transform hover:scale-105 duration-300"
                    >
                        <img
                            src={team4}
                            alt="Office space"
                            className="rounded-xl w-44 sm:w-52 md:w-60 object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
