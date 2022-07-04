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
} from "./SidebarElements";

const Sidebar = ({ isOpen, toogle }) => {
    const isSignIn = () => {
        return localStorage.getItem("user") !== null;
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {!isSignIn() ? (<Guest />) : (<Auth />)}
                </SidebarMenu>
                <SideBtnWrap>
                    {!isSignIn() ? (
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    ) : (
                        <SidebarRoute to="/profile">Profile</SidebarRoute>
                    )}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
