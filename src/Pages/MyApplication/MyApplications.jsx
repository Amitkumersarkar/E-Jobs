import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/useAuth";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    return (

        <div>
            <h2 className="text-2xl">My Applications: {jobs.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {jobs.map((j, idx) => (
                    <div key={idx} className="border p-4 rounded-lg shadow">
                        <p><strong>Jobs ID:</strong> {j.job_id}</p>
                        <p><strong>LinkedIn:</strong> {j.linkedIn}</p>
                        <p><strong>Resume:</strong> {j.resume}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MyApplications;