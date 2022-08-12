import React from "react";
import { BiLike } from "react-icons/bi";
import {
    By,
    LikeBtn,
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
    user,
    userId,
    likePostHandler,
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
                    {user && post.likes.includes(userId)
                        ? undefined
                        : user && (
                              <LikeBtn onClick={() => likePostHandler(post.id)}>
                                  <BiLike />
                              </LikeBtn>
                          )}
                </PostInfo>
            </PostContainer>
        </>
    );
}

export default SinglePost;
