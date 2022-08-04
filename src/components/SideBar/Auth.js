import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { SidebarLink } from "../../styles/SidebarElements";

function Auth({ toogle }) {
    // const [user, setUser] = useState("");

    // const userNameGetter = async () => {
    //     try {
    //         const userId = JSON.parse(localStorage.getItem("user")).uid;
    //         const docRef = await doc(db, "users", userId);
    //         const userData = await getDoc(docRef);
    
    //         const displayName = userData.data().displayName;
    
    //         setUser(displayName);
    //         return displayName;
    //     } catch (error) {
    //         console.log(error);
    //     }

    // };

    // userNameGetter();

    return (
        <>
            <SidebarLink to="/profile" onClick={toogle}>
                Welcome: {}
            </SidebarLink>
            <SidebarLink to="/create-post" onClick={toogle}>
                Create Post
            </SidebarLink>
            <SidebarLink to="/my-posts" onClick={toogle}>
                My Posts
            </SidebarLink>
            <SidebarLink to="/signout" onClick={toogle}>
                Sign Out
            </SidebarLink>
        </>
    );
}

export default Auth;
