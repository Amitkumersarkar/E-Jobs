import { useParams } from "react-router-dom";

const JobApply = () => {
    const { id } = useParams();
    // console.log(id);

    const SubmitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedin, github, resume);

    }

    return (
        <form onSubmit={SubmitJobApplication} className="flex justify-center m-5">
            <fieldset className="fieldset text-center bg-base-500 border-blue-600 rounded-box w-2xl border p-4 pb-5 mb-25">
                <legend className="fieldset-legend ">Information</legend>

                <label className="label text-cyan-500">LinkedIn URL</label>
                <input name="linkedin" type="url" className="input w-2xl" required placeholder="Enter Your LinkedIn URL" />

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