
const AddJob = () => {

    return (
        <div>
            <h2 className="3xl"> post a new job : </h2>
            <form className="flex justify-center m-20">
                <fieldset className=" fieldset bg-base-400 border-green-500 rounded-box w-xl border p-4">
                    <legend className="fieldset-legend text-center">Jobs Information</legend>

                    <label className="label font-bold text-cyan-500">Job Title</label>
                    <input type="text" name='title' className="input w-2xl" placeholder="Job Title" />

                    <label className="label font-bold text-cyan-500">Job Location</label>
                    <input type="text" name="location" className="input w-2xl" placeholder="Job Location" />

                    <button className="btn btn-primary mt-4">PostNow</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;