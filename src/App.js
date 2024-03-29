import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages";
import SignInPage from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/CreatePost";
import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AuthProvider from "./contexts/AuthContext";
import Main from "./pages/MainPage";
import Details from "./pages/Details";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProfile from "./pages/EditProfile";
import RequireAuth from "./guards/RequireAuth";
import NotFound from "./pages/NotFound";
import OnlyGuests from "./guards/OnlyGuests";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AuthProvider>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Router>
                <NavBar toogle={toogle} />
                <Sidebar isOpen={isOpen} toogle={toogle} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/signin"
                        element={
                            <OnlyGuests>
                                <SignInPage />
                            </OnlyGuests>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <OnlyGuests>
                                <SignUp />
                            </OnlyGuests>
                        }
                    />
                    <Route path="/profile/:uid" element={<Profile />} />
                    <Route
                        path="/profile/edit/:uid"
                        element={
                            <RequireAuth>
                                <EditProfile />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/create-post"
                        element={
                            <RequireAuth>
                                <CreatePost />
                            </RequireAuth>
                        }
                    />
                    <Route path="/workouts" element={<Main />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route
                        path="/edit/:id"
                        element={
                            <RequireAuth>
                                <EditPost />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
