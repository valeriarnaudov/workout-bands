import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: lightgray;
`;

export const MainSectionTitle = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: red;
    margin-top: 2rem;
    max-width: 100%;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
`;

export const ContentItemsContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 10px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const PostContainer = styled.div`
    margin: 10px 10px;
    background: white;
    padding: 30px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const PostVideo = styled.div``;
export const PostInfo = styled.div`
    background: lightgray;
    padding: 20px;
    border-radius: 15px;
`;

export const PostTitle = styled.h2`
    color: red;
`;

export const Likes = styled.p`
    margin-top: 10px;
`;
export const LikeBtn = styled.button`
    margin-top: 10px;
    color: red;
    background: white;
    border: none;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    align-items: center;
`;