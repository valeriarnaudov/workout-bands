import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    BTN_BACKGROUND,
    BTN_BACKGROUND_HOVER,
    BTN_HOVER_TEXT_COLOR,
    BTN_MAIN_TEXT_COLOR,
    CONTAINER_BACKGROUND_COLOR,
    TEXT_COLOR,
    TITLES_TEXT_COLOR,
} from "../variables/Colors";

export const ProfileContainer = styled.div`
    min-height: calc(100vh - 155px);
    display: grid;
    justify-content: center;
    align-items: center;
    justify-items: center;
`;

export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${TITLES_TEXT_COLOR};
    margin-top: 2rem;
    max-width: 100%;
    text-align: center;
`;

export const ProfileInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    padding: 20px 20px 20px 20px;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: ${CONTAINER_BACKGROUND_COLOR};
    box-shadow: 0 0 20px 20px (0, 0, 0, 1);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ProfileImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
`;

export const ProfileInfoContainer = styled.div`
    display: block;
    text-align: left;
`;

export const ProfileName = styled.p`
    font-size: 30px;
    color: ${TITLES_TEXT_COLOR};
`;

export const ProfileCreatedAt = styled.p`
    color: ${TEXT_COLOR};
    font-size: 15px;
    line-height: 2rem;
`;

export const ProfileUsername = styled.p`
    color: ${TEXT_COLOR};
    font-size: 20px;
    line-height: 2rem;
`;

export const ProfileEmail = styled.p`
    color: ${TEXT_COLOR};
    font-size: 20px;
    line-height: 2rem;
`;

export const ProfileAge = styled.p`
    color: ${TEXT_COLOR};
    font-size: 20px;
    line-height: 2rem;
    margin-bottom: 10px;
`;

export const EditProfileBtn = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    background: ${BTN_BACKGROUND};
    border: none;
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    color: ${BTN_MAIN_TEXT_COLOR};
    transition: 500ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${BTN_HOVER_TEXT_COLOR};
        background: ${BTN_BACKGROUND_HOVER};
        transition: 500ms ease-in-out;
    }
`;

export const NoPosts = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${TITLES_TEXT_COLOR};
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background: ${CONTAINER_BACKGROUND_COLOR};
    border-radius: 20px;
    text-decoration: italic;
`;

export const PostsContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 10px 10px 10px 10px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const SinglePostContainer = styled.div`
    margin: 10px 10px;
    background: ${CONTAINER_BACKGROUND_COLOR};
    padding: 30px;
    border-radius: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 360px;
    height: 320px;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-items: center;

    @media screen and (max-width: 768px) {
        height: 900px;
        width: 460px;
    }
`;
export const PostImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        height: 500px;
    }
`;
export const PostVideo = styled.video`
    max-width: 100%;
    max-height: 200px;
    object-fit: fill;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        max-height: 500px;
        align-items: center;
        justify-content: center;
        text-align: center;
        justify-items: center;
    }
`;

export const PostTitle = styled.p`
    font-size: 20px;
    color: ${TITLES_TEXT_COLOR};
    font-weight: bold;
`;

export const PostDate = styled.p`
    font-size: 10px;
    color: ${TEXT_COLOR};
`;
