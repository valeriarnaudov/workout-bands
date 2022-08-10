import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function OnlyGuests({ children }) {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Navigate to="/workouts" />;
    }
    return children;
}

export default OnlyGuests;
