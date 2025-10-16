import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-infinity loading-xl text-cyan-500"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
