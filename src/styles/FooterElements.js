import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #1a1a1a;
    box-shadow: 20px 20px 20px 22px rgba(0, 0, 0, 1);
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





export const FooterLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: red;
        transition: 0.3s ease-in-out;
    }
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
    color: white;
    text-decoration: none;
    justify-self: start;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: white;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: white;
    font-size: 24px;
`;
