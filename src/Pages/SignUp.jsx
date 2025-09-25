import { NavLink } from "react-router-dom";

const SignUp = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content">
                <div className=" text-center">
                    <h1 className="text-5xl font-bold">SignUp Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label text-cyan-600 font-semibold">User Name</label>
                                <input name="name" type="text" className="input" required placeholder=" User Name" />
                                <label className="label text-cyan-600 font-semibold">Email</label>
                                <input name="email" type="email" className="input" required placeholder="Email" />
                                <label className="label text-cyan-600 font-semibold">Password</label>
                                <input name="password" type="password" className="input" required placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Sign Up</button>
                            </fieldset>
                            <p className="text-center mt-5">All ready have an account's ! <span className="text-green-600 font-bold"><NavLink to='/sign-in'> Sign In</NavLink> </span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;