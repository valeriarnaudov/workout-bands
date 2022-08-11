import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    BTN_BACKGROUND,
    BTN_BACKGROUND_HOVER,
    BTN_HOVER_TEXT_COLOR,
    BTN_MAIN_TEXT_COLOR,
    CONTAINER_BACKGROUND_COLOR,
    CONTAINER_TEXT_COLOR,
    MAIN_CONTAINER_BACKGROUND_COLOR,
    TEXT_COLOR,
    TITLES_TEXT_COLOR,
} from "../variables/Colors";

export const MainSection = styled.div`
    min-height: calc(100vh - 155px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainSectionTitle = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${TITLES_TEXT_COLOR};
    margin-top: 2rem;
    max-width: 100%;
`;

export const FunctionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SortContainer = styled.select`
    border-radius: 10px;
    border: 4px solid ${CONTAINER_TEXT_COLOR};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${BTN_MAIN_TEXT_COLOR};
    margin-top: 1.5rem;
    width: 195px;
`;

export const FilterContainer = styled.select`
    border-radius: 10px;
    border: 4px solid ${CONTAINER_TEXT_COLOR};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-left: 10px;
    color: ${BTN_MAIN_TEXT_COLOR};
    margin-top: 1.5rem;
    width: 195px;
`;

export const SortOption = styled.option`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: black;
    margin-top: 2rem;
    max-width: 500px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
`;

export const ContentItemsContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 10px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const PostContainer = styled.div`
    margin: 10px 10px;
    background: ${MAIN_CONTAINER_BACKGROUND_COLOR};
    padding: 30px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 360px;
    height: 320px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        height: 900px;
        width: 460px;
    }
`;

export const PostImage = styled.img`
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PostVideo = styled.video`
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: fill;
`;
export const PostInfo = styled.div`
    background: ${CONTAINER_BACKGROUND_COLOR};
    padding: 20px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const PostTitle = styled.h2`
    color: ${TITLES_TEXT_COLOR};
`;

export const By = styled.p`
    margin-top: 10px;
    color: ${TEXT_COLOR};
    font-size: 12px;
`;

export const PostOwner = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    color: ${TEXT_COLOR};
`;

export const Likes = styled.p`
    color: ${TEXT_COLOR};
    margin-top: 10px;
`;
export const LikeBtn = styled.button`
    font-size: 2rem;
    margin-top: 10px;
    color: ${BTN_MAIN_TEXT_COLOR};
    background: ${BTN_BACKGROUND};
    border: none;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        color: ${BTN_HOVER_TEXT_COLOR};
        background: ${BTN_BACKGROUND_HOVER};
    }
`;

export const NoPosts = styled.h2`
    color: ${TITLES_TEXT_COLOR};
    font-size: 2rem;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 20px;
`;
