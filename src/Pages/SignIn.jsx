import Lottie from "lottie-react";
import signUpAnimationData from "../assets/Lottie/Login Leady.json";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthContext from "../Context/AuthContext";

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const [strength, setStrength] = useState({ label: "", color: "" });
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    // password validation
    const validatePassword = (value) => {
        const rules = [];

        if (value.length < 6) rules.push("At least 6 characters");
        if (!/[A-Z]/.test(value)) rules.push("One uppercase letter");
        if (!/[a-z]/.test(value)) rules.push("One lowercase letter");
        if (!/[0-9]/.test(value)) rules.push("One number");
        if (!/[!@#$%^&*]/.test(value)) rules.push("One special character");

        return rules;
    };

    // check password strength or not
    const getPasswordStrength = (value) => {
        let passed = 0;
        if (value.length >= 6) passed++;
        if (/[A-Z]/.test(value)) passed++;
        if (/[a-z]/.test(value)) passed++;
        if (/[0-9]/.test(value)) passed++;
        if (/[!@#$%^&*]/.test(value)) passed++;

        if (passed <= 2) return { label: "Weak", color: "bg-red-500" };
        if (passed === 3 || passed === 4) return { label: "Medium", color: "bg-yellow-500" };
        if (passed === 5) return { label: "Strong", color: "bg-green-500" };

        return { label: "", color: "" };
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setErrors(validatePassword(value));
        setStrength(getPasswordStrength(value));
        setSuccess("");
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const validationErrors = validatePassword(password);

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setSuccess("");
            return;
        }

        console.log("User Info:", name, email, password);
        setSuccess(" Account signIn successfully!");
        setErrors([]);
        setPassword("");
        setStrength({ label: "", color: "" });
        form.reset();

        // show password validation
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error.message);
            })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center gap-10 w-full max-w-5xl">

                {/* Left Side */}
                <div className="flex flex-col items-center text-center w-full lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Sign In Your Account
                    </h1>
                    <Lottie
                        animationData={signUpAnimationData}
                        className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
                    />
                </div>

                {/* Right Side Form */}
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
                            <div className="relative w-full">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
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

                            {/* Password strength meter */}
                            {strength.label && (
                                <div className="mt-2">
                                    <div className="w-full h-2 bg-gray-300 rounded">
                                        <div
                                            className={`h-2 rounded ${strength.color}`}
                                            style={{ width: `${(strength.label === "Weak" ? 33 : strength.label === "Medium" ? 66 : 100)}%` }}
                                        />
                                    </div>
                                    <p className="text-sm mt-1">{strength.label} Password</p>
                                </div>
                            )}

                            {/* Validation errors */}
                            {errors.length > 0 && (
                                <ul className="text-red-500 text-sm list-disc pl-5">
                                    {errors.map((err, i) => (
                                        <li key={i}>{err}</li>
                                    ))}
                                </ul>
                            )}

                            {success && (
                                <p className="text-green-500 text-sm">{success}</p>
                            )}

                            <button className="btn btn-primary w-full mt-4">
                                Sign Up
                            </button>
                        </fieldset>

                        <p className="text-center mt-5">
                            Already have an account.?{" "}
                            <span className="text-cyan-500 font-bold">
                                <NavLink to="/sign-in">Sign In</NavLink>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
