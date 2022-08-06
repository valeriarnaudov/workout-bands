import { SidebarLink } from "../../styles/SidebarElements";

function Guest({ toogle }) {
    return (
        <>
            <SidebarLink to="/signup" onClick={toogle}>
                Sign Up
            </SidebarLink>
        </>
    );
}

export default Guest;
