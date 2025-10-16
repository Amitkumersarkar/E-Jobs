
const statsData = [
    {
        title: "Total Jobs",
        value: "1,250",
        description: "All active job postings on our platform.",
    },
    {
        title: "Companies",
        value: "350",
        description: "Number of companies registered with E-Jobs.",
    },
    {
        title: "Applications",
        value: "4,500",
        description: "Total job applications submitted by users.",
    },
    {
        title: "Remote Jobs",
        value: "650",
        description: "Jobs available for remote work.",
    },
];

const Statistics = () => {
    return (
        <div className="bg-cyan-50 min-h-screen px-4 py-12">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
                    Our Statistics
                </h1>
                <p className="text-gray-700 text-lg md:text-xl">
                    Explore the latest numbers and trends from E-Jobs platform.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {statsData.map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer"
                    >
                        <h2 className="text-3xl font-bold text-cyan-600 mb-2">{stat.value}</h2>
                        <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                        <p className="text-gray-600 text-sm">{stat.description}</p>
                    </div>
                ))}
            </div>

            {/* Optional: Bar-style indicators */}
            <div className="max-w-6xl mx-auto mt-12 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4 text-center">
                    Job Categories Breakdown
                </h2>
                {[
                    { category: "Engineering", percent: 35 },
                    { category: "Finance", percent: 25 },
                    { category: "Management", percent: 20 },
                    { category: "Accounts", percent: 20 },
                ].map((item, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-700 font-semibold">{item.category}</span>
                            <span className="text-gray-700 font-semibold">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-cyan-600 h-4 rounded-full transition-all duration-500"
                                style={{ width: `${item.percent}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
