import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import SignIn from "./pages/SignIn";
// import NavBar from "./pages/NavBar";

function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
            </Routes>
        </Router>
    );
}

export default App;
