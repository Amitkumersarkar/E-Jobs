import { motion } from "framer-motion";
import team1 from "../assets/images/peopleInOffice.jpg";
import Team2 from "../assets/images/excited.jpg";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1 flex gap-5">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-70 rounded-tl-[40px] rounded-br-[40px] border-l-[5px] border-b-[4px] border-l-cyan-600 shadow-2xl"
                    />
                    <motion.img
                        src={Team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-70 rounded-tl-[40px] rounded-br-[40px] border-l-[5px] border-b-[4px] border-l-cyan-600 shadow-2xl"
                    />
                </div>

                <div className="flex-1">
                    <motion.h1
                        animate={{ x: 50, color: ["#0ea5e9", "#14b8a6", "#0ea5e9"] }}
                        transition={{ duration: 2, delay: 1, ease: "easeOut", repeat: Infinity }}
                        className="text-5xl font-bold"
                    >
                        Latest Jobs For You!
                    </motion.h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
