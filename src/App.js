import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useContext, useState } from "react";

import Home from "./components/pages"; 
import SignInPage from "./components/pages/SignIn/SignInPage";
import SignUp from "./components/pages/SignUp";
import CreatePost from "./components/pages/CreatePost";
import Sidebar from "./components/pages/SideBar";
import NavBar from "./components/pages/NavBar";
import Footer from "./components/pages/Footer";
import { AuthContectProvider, AuthContext } from "./components/AuthContext/AuthContext";
import Main from "./components/pages/Main";
import Details from "./components/pages/Details";
import SignOut from "./components/pages/SignOut";
import EditPost from "./components/pages/EditPost";

function App() {
    const { currentUser } = useContext(AuthContext);

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/signin" />;
    };

    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AuthContectProvider>
            <Router>
                <NavBar toogle={toogle} />
                <Sidebar isOpen={isOpen} toogle={toogle} />
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
                    <Route path="/workouts" element={<Main />}/>
                    <Route path="/details/:id" element={<Details />}/>
                    <Route path="/edit/:id" element={<EditPost />}/>
                    <Route path="/signout" element={<SignOut />}/>
                </Routes>
                <Footer />
            </Router>
        </AuthContectProvider>
    );
}

export default App;
