import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: red;
    margin-top: 10px;
    max-width: 100%;
    text-align: center;
    width: 100%;
`;

export const CommentContainer = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const CommentForm = styled.form`
    max-width: 440px;
    display: flex;
    flex-direction: column;
    background: lightgray;
    padding: 20px;
    border-radius: 20px;
`;

export const CommentInput = styled.textarea`
    width: 400px;
    height: 100px;
    border: 3px solid red;
    resize: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 1rem;

    &:focus {
        outline: none;
    }
`;

export const CommentSubmit = styled.button`
    background: red;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
        background: white;
        color: red;
    }
`;

