import Lottie from "lottie-react";
import errorLottieAnimation from "../../assets/Lottie/Lonely 404.json";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
            <div className="w-72 sm:w-96 md:w-[28rem] lg:w-[32rem]">
                <Lottie animationData={errorLottieAnimation} loop={true} />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-red-500 mt-6">
                Oops! Page Not Found 😢
            </h1>
            <p className="text-gray-400 mt-2 text-sm md:text-base max-w-md">
                The page you’re looking for doesn’t exist or was moved.
            </p>

            <NavLink
                to="/"
                className="btn btn-primary mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
                Go Back Home
            </NavLink>
        </div>
    );
};

export default Error;
