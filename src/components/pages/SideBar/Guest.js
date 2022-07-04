import React from "react";
import { SidebarLink } from "./SidebarElements";

function Guest({ toogle }) {
    return (
        <>
            <SidebarLink to="about" onClick={toogle}>
                About
            </SidebarLink>
            <SidebarLink to="info" onClick={toogle}>
                Info
            </SidebarLink>
            <SidebarLink to="services" onClick={toogle}>
                Services
            </SidebarLink>
            <SidebarLink to="uploadt" onClick={toogle}>
                Upload
            </SidebarLink>
            <SidebarLink to="/signup" onClick={toogle}>
                Sign Up
            </SidebarLink>
        </>
    );
}

export default Guest;
