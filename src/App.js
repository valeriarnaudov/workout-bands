import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "./pages";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/CreatePost";
import { AuthContectProvider, AuthContext } from "./AuthContext/AuthContext";
import { useContext } from "react";
// import NavBar from "./pages/NavBar";

function App() {
    const { currentUser } = useContext(AuthContext);

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/signin" />;
    };

    return (
        <AuthContectProvider>
            <Router>
                {/* <NavBar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/create-post"
                        element={
                            <RequireAuth>
                                {" "}
                                <CreatePost />{" "}
                            </RequireAuth>
                        }
                    />
                </Routes>
            </Router>
        </AuthContectProvider>
    );
}

export default App;
