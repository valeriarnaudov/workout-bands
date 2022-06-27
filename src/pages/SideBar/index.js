import React from "react";
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toogle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/exercises" onClick={toogle}>
                        Exercises
                    </SidebarLink>
                    <SidebarLink to="/signup" onClick={toogle}>
                        Sign Up
                    </SidebarLink>
                    <SidebarLink to="/logout" onClick={toogle}>
                        Logout
                    </SidebarLink>
                    <SidebarLink to="/contact" onClick={toogle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
