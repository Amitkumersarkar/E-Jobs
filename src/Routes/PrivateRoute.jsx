import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to='/sign-in' state={location?.pathname}></Navigate>
};

export default PrivateRoute;