import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
    BARS_BACKGROUND,
    BTN_BACKGROUND,
    BTN_BACKGROUND_HOVER,
    BTN_HOVER_TEXT_COLOR,
    BTN_MAIN_TEXT_COLOR,
    TEXT_COLOR,
    TITLES_TEXT_COLOR,
} from "../variables/Colors";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${BARS_BACKGROUND};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : 0)};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimesCircle)`
    color: ${TITLES_TEXT_COLOR};
    font-size: 4rem;
    cursor: pointer;

    &:hover {
        color: ${BTN_BACKGROUND_HOVER};
        transition: 0.3s ease-in-out;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: ${TITLES_TEXT_COLOR};
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: ${TEXT_COLOR};
    cursor: pointer;

    &:hover {
        color: ${BTN_HOVER_TEXT_COLOR};
        transition: all 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 0;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarRoute = styled(Link)`
    border-radius: 50px;
    background: ${BTN_BACKGROUND};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${BTN_MAIN_TEXT_COLOR};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${BTN_BACKGROUND_HOVER};
        color: ${BTN_HOVER_TEXT_COLOR};
    }
`;
