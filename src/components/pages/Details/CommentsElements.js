import styled from "styled-components";

export const NoComments = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color:white;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background: black;
    border-radius: 20px;
    text-decoration: italic;
`

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
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 10px;
`;

export const CommentText = styled.p``;

export const CommentLikeContainer = styled.div``;

export const CommentLikes = styled.p``;

export const LikeComment = styled.button``;

export const InfoCommentContainer = styled.div``;

export const CommentOwner = styled.p``;

export const CommentTime = styled.p``;
