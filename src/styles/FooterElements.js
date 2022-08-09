import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    BARS_BACKGROUND,
    TITLES_TEXT_COLOR,
    TEXT_COLOR,
} from "../variables/Colors";

export const FooterContainer = styled.footer`
    background-color: ${BARS_BACKGROUND};
    box-shadow: 20px 20px 20px 22px rgba(0, 0, 0, 1);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const FooterWrap = styled.div`
    padding: 10px 24px;
    display: flex;
    justify-content: column;
    align-items: center;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: ${TEXT_COLOR};
    text-decoration: none;
    justify-self: start;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: ${TITLES_TEXT_COLOR};
        transition: 0.3s ease-in-out;
    }
`;

export const WebsiteRights = styled.small`
    color: ${TEXT_COLOR};
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: ${TEXT_COLOR};
    font-size: 24px;

    &:hover {
        color: ${TITLES_TEXT_COLOR};
        transition: 0.3s ease-in-out;
    }
`;
