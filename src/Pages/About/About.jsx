import team from "../../assets/images/peopleInOffice.jpg"
const About = () => {
    return (
        <div className="bg-cyan-50 min-h-screen px-4 py-12">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="flex-1">
                    <img
                        src={team}
                        alt="Team working"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4">
                        About E-Jobs
                    </h1>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        E-Jobs is your go-to platform for finding the latest job opportunities
                        across various industries. We aim to bridge the gap between talent and
                        companies, helping job seekers find meaningful work and employers find
                        the right candidates.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        Our mission is to make job hunting simple, efficient, and accessible
                        for everyone. With our user-friendly platform, you can browse jobs,
                        apply quickly, and get updates in real-time.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Join thousands of professionals and companies already using E-Jobs to
                        grow their careers and teams!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
