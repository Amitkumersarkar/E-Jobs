import Lottie from "lottie-react";
import signUpAnimationData from "../assets/Lottie/Login Leady.json";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthContext from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(user, { displayName: name }).then(() => {
                    setSuccess("Account created successfully!");
                    setError("");
                    form.reset();
                    setTimeout(() => navigate("/sign-in"), 1500);
                });
            })
            .catch((err) => {
                setError(err.message);
                setSuccess("");
            });
    };

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/");
                setSuccess("Signed up with Google!");
                setError("");
            })
            .catch(() => {
                setError("Google sign-up failed!");
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center gap-10 w-full max-w-5xl">
                <div className="flex flex-col items-center text-center w-full lg:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Create Your Account
                    </h1>
                    <Lottie animationData={signUpAnimationData} className="w-80 h-80" />
                </div>

                <div className="card bg-base-100 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <fieldset className="space-y-3">
                            <label className="label font-semibold text-cyan-600">Name</label>
                            <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered w-full" required />

                            <label className="label font-semibold text-cyan-600">Email</label>
                            <input name="email" type="email" placeholder="Enter Your Mail" className="input input-bordered w-full" required />

                            <label className="label font-semibold text-cyan-600">Password</label>
                            <div className="relative w-full">
                                <input
                                    name="password"
                                    placeholder="Enter Your Password"
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {success && <p className="text-green-500 text-sm">{success}</p>}

                            <button className="btn btn-primary w-full mt-4">Sign Up</button>

                            <div className="divider">OR</div>
                            <button
                                type="button"
                                onClick={handleGoogleSignUp}
                                className="btn btn-outline btn-accent w-full flex items-center gap-2"
                            >
                                <FcGoogle className="text-2xl" /> Continue with Google
                            </button>
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
