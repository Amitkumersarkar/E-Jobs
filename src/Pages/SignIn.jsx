import Lottie from "lottie-react";
import signUpAnimationData from "../assets/Lottie/Login Leady.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    // state declaration
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [password, setPassword] = useState("");
    //declared event handler or password handling
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // conditions
        if (value.length < 6) {
            setError("Password must be at least 6 characters long.");
            setSuccess("");
        } else {
            setError("");
            setSuccess("password length is valid");
        }
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters long .");
            return;
        }

        console.log("User Info :", name, email, password)
        form.reset();
        setSuccess("Account created successfully")
        setPassword("");
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center gap-10 w-full max-w-5xl">

                <div className="flex flex-col items-center text-center w-full lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Sign In Your Account
                    </h1>
                    <Lottie
                        animationData={signUpAnimationData}
                        className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
                    />
                </div>

                <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset space-y-3">
                            <label className="label">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Full Name"
                                required
                            />

                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                required
                            />

                            <label className="label">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            {/* declared error and success message */}
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {!error && password && (
                                <p className="text-green-500 text-sm">{success}</p>
                            )}
                            <button className="btn btn-primary w-full mt-4">Sign Up</button>
                        </fieldset>
                        <p className="text-center mt-5">Don't have an accounts ? <span className="text-cyan-500 font-bold"> <NavLink to='/sign-up'>SignUp</NavLink></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
