import React, { useEffect, useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toogleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toogleHome}>
                        workout bands
                    </NavLogo>
                    <MobileIcon onClick={toogle}>
                        <FaListAlt />
                    </MobileIcon>
                    <NavMenu>
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
                            <NavLinks to="/signup">Sign Up</NavLinks>
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
