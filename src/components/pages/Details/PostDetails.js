import React from "react";
import {
    Description,
    Image,
    InfoContainer,
    LikeBtn,
    Likes,
    MuscleGroup,
    PostSection,
    SrcContainer,
    Title,
    Video,
} from "./PostDetailsElements";

function PostDetails(props) {
    const post = props.postData;

    return (
        <PostSection>
            <SrcContainer>
                {!post.src || post.src.includes(".mp4") ? (
                    <Video src={post.src} autoPlay={true} loop={true} />
                ) : (
                    <Image src={post.src} />
                )}
            </SrcContainer>
            <InfoContainer>
                <Title>{post.title}</Title>
                <MuscleGroup>{post.muscleGroup}</MuscleGroup>
                <Description>{post.description}</Description>
                <Likes>
                    {!post.likes
                        ? "This post currently has no likes"
                        : "Likes: " + post.likes}
                </Likes>
                <LikeBtn>Like</LikeBtn>
            </InfoContainer>
        </PostSection>
    );
}

export default PostDetails;
