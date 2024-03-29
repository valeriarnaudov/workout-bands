import { useContext, useState } from "react";
import { NavItem, NavLink } from "../../styles/NavbarElements";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUserName } from "../../services/userServices";
import { toast } from "react-toastify";

function Auth() {
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
        toast.info("You have been signed out");
        navigate("/workouts");
        localStorage.setItem("user", null);
    };

    return (
        <>
            <NavItem>
                <NavLink to={`/profile/${user.uid}`} >Welcome: {userName}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/workouts">Workouts</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/create-post"
                    duration={500}
                    exact="true"
                    offset={-80}
                >
                    Create post
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/" onClick={handleSignout}>
                    Sign out
                </NavLink>
            </NavItem>
        </>
    );
}

export default Auth;
