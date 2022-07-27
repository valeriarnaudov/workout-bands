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
    background: white;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PostVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: fill;
`;
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
    font-size: 2rem;
    margin-top: 10px;
    color: red;
    background: white;
    border: none;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    align-items: center;

    &hover {
        cursor: pointer;
        color: white;
        background: red;
    }
`;
