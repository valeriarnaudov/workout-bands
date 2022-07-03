import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUp from "./pages/SignUp";
// import NavBar from "./pages/NavBar";

function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignInPage/>} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
