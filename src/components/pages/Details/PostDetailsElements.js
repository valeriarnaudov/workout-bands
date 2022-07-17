import styled from "styled-components";

export const PostSection = styled.div`
    max-width: 1100px;
    padding: 20px 20px 20px 20px;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    background: lightgray;
    box-shadow: 0 0 20px 20px (0, 0, 0, 19);
`;

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    justify-items: center;
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
