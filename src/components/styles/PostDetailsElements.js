import styled from "styled-components";

export const PostSection = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: red;
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
    background: lightgray;
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
    color: red;
`;
export const MuscleGroup = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;
export const Description = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;
export const Likes = styled.p`
    font-size: 20px;
    line-height: 2rem;
`;
export const LikeBtn = styled.button`
    padding: 10px 10px 10px 10px;
    border-radius: 50%;
`;
export const EditBtn = styled.button`
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    background: white;
    border: none;
    padding: 15px;
    border-radius: 20px;
    color: red;
    transition: 500ms ease-in-out;

    &:hover {
        color: white;
        background: red;
        transition: 500ms ease-in-out;
    }
`;
export const DeleteBtn = styled.button`
    margin-left: 20px;
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    background: white;
    border: none;
    padding: 15px;
    border-radius: 20px;
    color: red;
    transition: 500ms ease-in-out;

    &:hover {
        color: white;
        background: red;
        transition: 500ms ease-in-out;
    }
`;
