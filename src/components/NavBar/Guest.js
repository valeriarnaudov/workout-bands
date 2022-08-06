import { NavItem, NavLink } from "../../styles/NavbarElements";

function Guest() {
    return (
        <>
            <NavItem>
                <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/workouts">Workouts</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
        </>
    );
}

export default Guest;
