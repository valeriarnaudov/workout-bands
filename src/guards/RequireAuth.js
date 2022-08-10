import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function RequireAuth({ children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/signin" />;
    }
    return children;
}

export default RequireAuth;
