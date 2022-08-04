import { NavItem, NavLinks, NavLink } from "../../styles/NavbarElements";

function Guest() {
    return (
        <>
            <NavItem>
                <NavLinks
                    to="about"
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
