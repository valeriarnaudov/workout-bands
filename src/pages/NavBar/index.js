import React from "react";
import { FaListAlt } from "react-icons/fa";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./NavbarElements";

function NavBar({ toogle }) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">workout bands</NavLogo>
                    <MobileIcon onClick={toogle}>
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
        </>
    );
}

export default NavBar;
