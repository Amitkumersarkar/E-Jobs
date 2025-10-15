import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(id, user);

    const SubmitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(linkedIn, github, resume);
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })

    }

    return (
        <form onSubmit={SubmitJobApplication} className="flex justify-center m-5">
            <fieldset className="fieldset text-center bg-base-500 border-blue-600 rounded-box w-2xl border p-4 pb-5 mb-25">
                <legend className="fieldset-legend ">Information</legend>

                <label className="label text-cyan-500">LinkedIn URL</label>
                <input name="linkedIn" type="url" className="input w-2xl" required placeholder="Enter Your LinkedIn URL" />

                <label className="label text-cyan-500">Github URL</label>
                <input name="github" type="url" className="input w-2xl" required placeholder="Enter Your Github URL" />

                <label className="label text-cyan-500">Resume URL</label>
                <input name="resume" type="url" className="input w-2xl" required placeholder="Enter Your Resume URL" />

                <button className="btn btn-info mt-4">Apply</button>
            </fieldset >
        </form>
    );
};

export default JobApply;