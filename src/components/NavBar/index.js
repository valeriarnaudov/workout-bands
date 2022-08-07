import { useContext, useEffect, useState } from "react";
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
} from "../../styles/NavbarElements";
import Guest from "./Guest";
import Auth from "./Auth";
import { AuthContext } from "../../contexts/AuthContext";

function NavBar({ toogle }) {
    const [scrollNav, setScrollNav] = useState(false);
    const { user } = useContext(AuthContext);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        isSignIn();
    }, []);

    const toogleHome = () => {
        scroll.scrollToTop();
    };

    const isSignIn = () => {
        return localStorage.getItem("user") === null;
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    {user ? (
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
                    <NavMenu>{user ? <Auth /> : <Guest />}</NavMenu>
                    {user ? (
                        <NavBtn>
                            <NavBtnLink to={`/profile/${user.uid}`}>Profile</NavBtnLink>
                        </NavBtn>
                    ) : (
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    )}
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default NavBar;
