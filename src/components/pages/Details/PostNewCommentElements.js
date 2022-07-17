import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: red;
    margin-top: 2rem;
    max-width: 100%;
    text-align: center;
    width: 100%;
`;

export const CommentContainer = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    background: lightgray;
    padding: 20px;
    border-radius: 20px;
`;

export const CommentInput = styled.textarea`
    width: 400px;
    height: 100px;
    border: 1px solid black;
`;

export const CommentSubmit = styled.button``;
