import Auth from "./Auth";
import Guest from "./Guest";
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
} from "../../styles/SidebarElements";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Sidebar = ({ isOpen, toogle }) => {
    const { user } = useContext(AuthContext);

    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>{user ? <Auth /> : <Guest />}</SidebarMenu>
                <SideBtnWrap>
                    {user ? (
                        <SidebarRoute to={`/profile/${user.uid}`}>Profile</SidebarRoute>
                    ) : (
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    )}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
