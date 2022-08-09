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

export const PostSection = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${TITLES_TEXT_COLOR};
    margin-top: 2rem;
    max-width: 100%;
    text-align: center;
`;

export const PostContainer = styled.div`
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
`;

export const SrcContainer = styled.div`
    border-radius: 20px;
`;
export const Video = styled.video`
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
`;
export const Image = styled.img`
    width: 50%;
    border-radius: 20px;
`;
export const InfoContainer = styled.div`
    display: block;
`;
export const Title = styled.h2`
    font-size: 30px;
    color: ${TITLES_TEXT_COLOR};
`;

export const CreatedAt = styled.p`
    color: ${TEXT_COLOR};
    font-size: 20px;
`;

export const By = styled.p`
    color: ${TEXT_COLOR};
    font-size: 20px;
`;

export const PostOwner = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    color: ${TEXT_COLOR};
`;

export const MuscleGroup = styled.p`
    font-size: 20px;
    line-height: 2rem;
    color: ${TEXT_COLOR};
`;
export const Description = styled.p`
    font-size: 20px;
    line-height: 2rem;
    color: ${TEXT_COLOR};
`;
export const Likes = styled.p`
    font-size: 20px;
    line-height: 2rem;
    color: ${TEXT_COLOR};
`;
export const LikeBtn = styled.button`
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    background: ${BTN_BACKGROUND};
    border: none;
    padding: 15px;
    border-radius: 20px;
    color: ${BTN_MAIN_TEXT_COLOR};
    transition: 500ms ease-in-out;
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        color: ${BTN_HOVER_TEXT_COLOR};
        background: ${BTN_BACKGROUND_HOVER};
        transition: 500ms ease-in-out;
    }
`;
export const EditBtn = styled.button`
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    background: ${BTN_BACKGROUND};
    border: none;
    padding: 15px;
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
export const DeleteBtn = styled.button`
    margin-left: 20px;
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    background: ${BTN_BACKGROUND};
    border: none;
    padding: 15px;
    border-radius: 20px;
    color: ${BTN_MAIN_TEXT_COLOR};
    transition: 500ms ease-in-out;

    &:hover {
        color: ${BTN_HOVER_TEXT_COLOR};
        background: ${BTN_BACKGROUND_HOVER};
        transition: 500ms ease-in-out;
    }
`;

export const H3 = styled.h3`
    font-size: 20px;
    color: ${TITLES_TEXT_COLOR};
    margin-bottom: 20px;
    text-align: center;
`;

export const SignRedirect = styled.a`
    cursor: pointer;
    color: ${TITLES_TEXT_COLOR};
`;
