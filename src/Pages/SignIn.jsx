import Lottie from "lottie-react";
import signInAnimationData from "../assets/Lottie/Login Leady.json";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthContext from "../Context/AuthContext";

const SignIn = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const passwordValue = form.password.value;

        setError("");
        setSuccess("");

        signInUser(email, passwordValue)
            .then((result) => {
                console.log("Signed In:", result.user);
                setSuccess("Signed in successfully!");
                form.reset();
                setPassword("");
            })
            .catch(() => {
                setError("Invalid email or password");
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center gap-10 w-full max-w-5xl">
                {/* Left Side */}
                <div className="flex flex-col items-center text-center w-full lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Sign In to Your Account
                    </h1>
                    <Lottie animationData={signInAnimationData} className="w-80 h-80" />
                </div>

                {/* Right Side Form */}
                <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset space-y-3">
                            <label className="label text-cyan-600 font-semibold">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full" placeholder="Enter Your Email" required />

                            <label className="label text-cyan-600 font-semibold">Password</label>
                            <div className="relative w-full">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Your Password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <FiEyeOff className="text-xl" /> : <FiEye className="text-xl" />}
                                </button>
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {success && <p className="text-green-500 text-sm">{success}</p>}

                            <button className="btn btn-primary w-full mt-4">Sign In</button>
                        </fieldset>

                        <p className="text-center mt-5">
                            Don’t have an account?{" "}
                            <NavLink to="/sign-up" className="text-cyan-500 font-bold">Sign Up</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
