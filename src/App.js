import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Posts from './pages/exercises/posts/Posts';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Nav from './navbar/Nav';

function App() {
  return (
      <Router>
        <Routes>
          <Nav />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exercises" element={<Posts />} />
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
  );
}

export default App;
