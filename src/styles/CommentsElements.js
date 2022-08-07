import styled from "styled-components";

export const NoComments = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background: black;
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
    background: black;
    border-radius: 20px;
    color: white;
`;

export const CommentTextContainer = styled.div`
    display: flex;
    background: white;
    color: black;
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
    background: white;
    border: none;
    margin: 0;
    font-size: 1rem;
    color: red;
    font-weight: bold;
    border-radius: 20pc;

    :hover {
        cursor: pointer;
        color: white;
        background: red;
    }
`;
