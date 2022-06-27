import React from 'react'
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Nav