import styled from "styled-components";

export const PostSection = styled.section`
    padding: 20px 20px 20px 20px;
    border-radius: 20px;
    box-shadow: 0 0 20px 20px (0, 0, 0, 1);
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    background: lightgray;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const SrcContainer = styled.div``;
export const Video = styled.video`
    width: 50%;
    height: 100%;
    object-fit: cover;
`;
export const Image = styled.img`
    width: 50%;
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
