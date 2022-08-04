import { useState } from "react";
import { NavItem, NavLink } from "../../styles/NavbarElements";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import { signOut } from "firebase/auth";

function Auth() {
    const [user, setUser] = useState("");
    
    useEffect (() => {
        const userNameGetter = async () => {
            let userId = JSON.parse(localStorage.getItem("user")).uid;
            const docRef = await doc(db, "users", userId);
            const userData = await getDoc(docRef);
    
            const displayName = userData.data().displayName;
    
            setUser(displayName);
            return displayName;
        };
    
        userNameGetter();
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut();
            localStorage.removeItem("user");
            setUser("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavItem>
                <NavLink to="/profile">Welcome: {user}</NavLink>
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
                <NavLink
                    to="/my-posts"
                    duration={500}
                    exact="true"
                    offset={-80}
                >
                    My posts
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/" onClick={handleSignOut}>Sign out</NavLink>
            </NavItem>
        </>
    );
}

export default Auth;
