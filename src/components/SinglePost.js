import React from "react";
import {
    By,
    Likes,
    PostContainer,
    PostImage,
    PostInfo,
    PostOwner,
    PostTitle,
    PostVideo,
} from "../styles/SinglePostElements";

function SinglePost({
    post,
    redirectToDetailsHandler,
}) {
    return (
        <>
            <PostContainer key={post.id}>
                {post.src.includes(".mp4") ? (
                    <PostVideo
                        src={post.src}
                        autoPlay={true}
                        muted={true}
                        onClick={() => redirectToDetailsHandler(post.id)}
                    />
                ) : (
                    <PostImage
                        src={post.src}
                        onClick={() => redirectToDetailsHandler(post.id)}
                    />
                )}
                <PostInfo>
                    <PostTitle onClick={() => redirectToDetailsHandler(post.id)}>{post.title}</PostTitle>
                    <By>
                        By :
                        <PostOwner to={`/profile/${post.owner}`}>
                            {post.ownerName}
                        </PostOwner>
                    </By>
                    <By>{post.timeStamp.toDate().toLocaleString()}</By>
                    <Likes>Likes: {post.likes.length}</Likes>
                </PostInfo>
            </PostContainer>
        </>
    );
}

export default SinglePost;
