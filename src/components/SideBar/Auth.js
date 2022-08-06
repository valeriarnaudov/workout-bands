import { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { SidebarLink } from "../../styles/SidebarElements";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { getUserName } from "../../services/userServices";

function Auth({ toogle }) {

    const [userName, setUserName] = useState("");

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const userNameGetter = async () => {
            try {
                const name = await getUserName(user.uid);
                setUserName(name);
            } catch (error) {
                
            }
        }
        userNameGetter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSignout = async () => {
        await signOut(auth);
        navigate("/workouts");
        localStorage.setItem("user", null);
    };
    return (
        <>
            <SidebarLink to="/profile" onClick={toogle}>
                Welcome: <br /> {userName}
            </SidebarLink>
            _____________
            <SidebarLink to="/" onClick={toogle}>
                Home
            </SidebarLink>
            <SidebarLink to="/create-post" onClick={toogle}>
                Create Post
            </SidebarLink>
            <SidebarLink to="/" onClick={handleSignout}>
                Sign Out
            </SidebarLink>
        </>
    );
}

export default Auth;
