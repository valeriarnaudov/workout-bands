import { useEffect, useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { GiWeightLiftingUp } from "react-icons/gi";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavLogo,
    NavMenu,
} from "./NavbarElements";
import Guest from "./Guest";
import Auth from "./Auth";

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
        isSignIn()
    }, []);

    const toogleHome = () => {
        scroll.scrollToTop();
    };

    const isSignIn = () => {
        return localStorage.getItem("user") !== null;
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    {isSignIn() ? (
                        <NavLogo to="/workouts" onClick={toogleHome}>
                            <GiWeightLiftingUp /> workout bands
                        </NavLogo>
                    ) : (
                        <NavLogo to="/" onClick={toogleHome}>
                            <GiWeightLiftingUp /> workout bands
                        </NavLogo>
                    )}
                    <MobileIcon onClick={toogle}>
                        <FaListAlt />
                    </MobileIcon>
                    <NavMenu>{!isSignIn() ? <Guest /> : <Auth />}</NavMenu>
                    {!isSignIn() ? (
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    ) : (
                        <NavBtn>
                            <NavBtnLink to="/profile">Profile</NavBtnLink>
                        </NavBtn>
                    )}
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default NavBar;
