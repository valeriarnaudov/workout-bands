import React from "react";
import { FaListAlt } from "react-icons/fa";
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from "./NavbarElements";
// import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
          <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    workout bands
                </NavLogo>
                <MobileIcon>
                    <FaListAlt />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/exercises">Exercises</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signup">Sign Up</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/logout">Logout</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>
                    {/* <Link to="/">Home</Link> */}

            {/* <Link to="/exercises">Exercises</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/contact">Contact</Link> */}
        </>
    );
}

export default NavBar;