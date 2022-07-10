import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
    const navigate = useNavigate();

    useEffect(() => {
        const SignOut = () => {
            localStorage.clear();
            navigate("/");
            window.location.reload(true);
        };

        SignOut()
    });

    return <></>;
}

export default SignOut;
