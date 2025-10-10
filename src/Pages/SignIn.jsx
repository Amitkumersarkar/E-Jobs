import Lottie from "lottie-react";
import loginAnimationData from "../assets/Lottie/Login Leady.json";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthContext from "../Context/AuthContext";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                console.log("Signed in:", result.user);
                setSuccess("Login successful!");
                setError("");
                form.reset();

                setTimeout(() => {
                    navigate("/");
                }, 1500);
            })
            .catch((err) => {
                console.error(err.message);
                setError("Invalid email or password!");
                setSuccess("");
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center gap-10 w-full max-w-5xl">
                {/* Left Side */}
                <div className="flex flex-col items-center text-center w-full lg:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Welcome Back!
                    </h1>
                    <Lottie animationData={loginAnimationData} className="w-80 h-80" />
                </div>

                {/* Right Side Form */}
                <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="space-y-3">
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

                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {success && <p className="text-green-500 text-sm">{success}</p>}
                            <div><a className="link link-hover"><NavLink to='error'>Forgot password?</NavLink></a></div>
                            <button className="btn btn-primary w-full mt-4">Sign In</button>
                        </fieldset>

                        <p className="text-center mt-5">
                            Don’t have an account?{" "}
                            <NavLink to="/sign-up" className="text-green-600 font-bold">
                                Sign Up
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
