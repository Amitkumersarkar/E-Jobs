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
            <fieldset className="fieldset bg-base-500 border-blue-600 rounded-box w-xs border p-4">
                <legend className="fieldset-legend ">Information</legend>

                <label className="label">LinkedIn URL</label>
                <input name="linkedin" type="url" className="input" required placeholder="Enter Your LinkedIn URL" />

                <label className="label">Github URL</label>
                <input name="github" type="url" className="input" required placeholder="Enter Your Github URL" />

                <label className="label">Resume URL</label>
                <input name="resume" type="url" className="input" required placeholder="Enter Your Resume URL" />

                <button className="btn btn-info mt-4">Apply</button>
            </fieldset >
        </form>
    );
};

export default JobApply;