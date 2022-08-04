// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//     currentUser: JSON.parse(localStorage.getItem("user")) || null,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContectProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(state.currentUser));
//     }, [state.currentUser]);

//     return (
//         <AuthContext.Provider
//             value={{ currentUser: state.currentUser, dispatch }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Loading from "../components/Loading";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
