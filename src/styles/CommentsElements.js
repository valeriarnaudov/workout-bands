import styled from "styled-components";
import {
    BTN_BACKGROUND,
    BTN_BACKGROUND_HOVER,
    BTN_HOVER_TEXT_COLOR,
    BTN_MAIN_TEXT_COLOR,
    COMMENT_BACKGROUND,
    COMMENT_TEXT,
    CONTAINER_BACKGROUND_COLOR,
    TEXT_COLOR,
} from "../variables/Colors";

export const NoComments = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${TEXT_COLOR};
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background: ${CONTAINER_BACKGROUND_COLOR};
    border-radius: 20px;
    text-decoration: italic;
`;

export const SingleCommentContainer = styled.div`
    max-width: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background: ${CONTAINER_BACKGROUND_COLOR};
    border-radius: 20px;
    color: ${TEXT_COLOR};
`;

export const CommentTextContainer = styled.div`
    display: flex;
    background: ${COMMENT_BACKGROUND};
    color: ${COMMENT_TEXT};
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 10px;
`;

export const CommentText = styled.p`
    font-size: 1.2rem;
`;

export const ColumnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const CommentLikeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CommentLikes = styled.p`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const LikeComment = styled.button`
    background: transparent;
    border: none;
    margin: 0;
    font-size: 1.5rem;

    :hover {
        cursor: pointer;
        color: white;
    }
`;

export const InfoCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CommentOwner = styled.p`
    font-size: 0.7rem;
`;

export const CommentTime = styled.p`
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
`;

export const DeleteCommentBtn = styled.button`
    padding: 0.7rem;
    background: ${BTN_BACKGROUND};
    border: none;
    margin: 0;
    font-size: 1rem;
    color: ${BTN_MAIN_TEXT_COLOR};
    font-weight: bold;
    border-radius: 20pc;

    :hover {
        cursor: pointer;
        color: ${BTN_HOVER_TEXT_COLOR};
        background: ${BTN_BACKGROUND_HOVER};
    }
`;
