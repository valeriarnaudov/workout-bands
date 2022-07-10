import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
    const navigate = useNavigate();

    useEffect(() => {
        const SignOut = () => {
            localStorage.setItem("user", null);
            navigate("/");
            window.location.reload(false);
        };

        SignOut()
    });

    return <></>;
}

export default SignOut;
