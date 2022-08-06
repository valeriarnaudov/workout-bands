import { SidebarLink } from "../../styles/SidebarElements";

function Guest({ toogle }) {
    return (
        <>
            <SidebarLink to="/" onClick={toogle}>
                Home
            </SidebarLink>
            <SidebarLink to="/workouts" onClick={toogle}>
                Workouts
            </SidebarLink>
            <SidebarLink to="/signup" onClick={toogle}>
                Sign Up
            </SidebarLink>
        </>
    );
}

export default Guest;
