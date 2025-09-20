import { useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/FirebaseConfig"
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // password authentication
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;