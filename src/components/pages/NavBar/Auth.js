import React, { useState } from "react";
import { NavItem, NavLink } from "./NavbarElements";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

function Guest() {
    const [user, setUser] = useState("");

    const userNameGetter = async () => {
        const userId = JSON.parse(localStorage.getItem("user")).uid;
        const docRef = await doc(db, "users", userId);
        const userData = await getDoc(docRef);

        const displayName = userData.data().displayName;

        setUser(displayName);
        return displayName;
    };

    userNameGetter();

    return (
        <>
            <NavItem>
                <NavLink to="/profile">Welcome: {user}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/create-post"
                    smooth="true"
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
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={-80}
                >
                    My posts
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signout">Sign out</NavLink>
            </NavItem>
        </>
    );
}

export default Guest;
