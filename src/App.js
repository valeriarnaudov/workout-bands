import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import Posts from "./pages/exercises/posts/Posts";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";

function App() {
    return (
        <Router>
            <Sidebar />
            <NavBar />
            {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes> */}
        </Router>
    );
}

export default App;
