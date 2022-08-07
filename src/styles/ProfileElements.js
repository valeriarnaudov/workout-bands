import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: red;
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
    background: lightgray;
    box-shadow: 0 0 20px 20px (0, 0, 0, 1);
`;

export const ProfileImg = styled.img`
    max-width: 250px;
    max-height: 250px;
    border-radius: 20%;
`;

export const ProfileInfoContainer = styled.div`
    display: block;
    text-align: left;
`;

export const ProfileName = styled.p`
    font-size: 30px;
    color: red;
`;

export const ProfileCreatedAt = styled.p`
    font-size: 15px;
    line-height: 2rem;
`

export const ProfileUsername = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;

export const ProfileEmail = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;

export const ProfileAge = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;

export const PostsCount = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;

export const CommentsCounter = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;

export const EditProfileBtn = styled.button`
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    background: white;
    border: none;
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    color: red;
    transition: 500ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: white;
        background: red;
        transition: 500ms ease-in-out;
    }
`

export const PostsContainer = styled.div``;
export const SinglePostContainer = styled.div``;
export const PostImg = styled.img``;
export const PostInfo = styled.div``;
export const PostTitle = styled.p``;
