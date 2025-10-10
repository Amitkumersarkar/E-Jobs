import Lottie from "lottie-react";
import signUpAnimationData from "../assets/Lottie/Login Leady.json";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthContext from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log("User created:", user);

                updateProfile(user, { displayName: name })
                    .then(() => {
                        console.log("Profile updated with name:", name);
                        setSuccess("Account created successfully!");
                        setError("");
                        form.reset();

                        setTimeout(() => {
                            navigate("/sign-in");
                        }, 1500);
                    })
                    .catch((err) => {
                        console.error("Error updating profile:", err.message);
                        setError(err.message);
                    });
            })
            .catch((err) => {
                console.error(err.message);
                setError(err.message);
                setSuccess("");
            });
    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center gap-10 w-full max-w-5xl">
                {/* Left Side */}
                <div className="flex flex-col items-center text-center w-full lg:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Create Your Account
                    </h1>
                    <Lottie animationData={signUpAnimationData} className="w-80 h-80" />
                </div>

                {/* Right Side Form */}
                <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <fieldset className="space-y-3">
                            <label className="label font-semibold text-cyan-600">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter your name"
                                required
                            />

                            <label className="label font-semibold text-cyan-600">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                                required
                            />

                            <label className="label font-semibold text-cyan-600">Password</label>
                            <div className="relative w-full">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? (
                                        <FiEyeOff className="text-xl" />
                                    ) : (
                                        <FiEye className="text-xl" />
                                    )}
                                </button>
                            </div>

                            {/* Error / Success Messages */}
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {success && <p className="text-green-500 text-sm">{success}</p>}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary w-full mt-4">Sign Up</button>
                        </fieldset>

                        <p className="text-center mt-5">
                            Already have an account?{" "}
                            <NavLink to="/sign-in" className="text-green-600 font-bold">
                                Sign In
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
