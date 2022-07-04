import React from "react";
import { NavItem, NavLinks, NavLink } from "./NavbarElements";

function Guest() {
    return (
        <>
            <NavItem>
                <NavLinks
                    to="about"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    About
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks
                    to="people"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    Info
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks
                    to="services"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    Services
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks
                    to="upload"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    Upload
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
        </>
    );
}

export default Guest;
