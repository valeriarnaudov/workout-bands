import React from "react";
import {
    Btns,
    Comment,
    CommentsContainer,
    CommentsCounter,
    DeleteAccount,
    EditBtn,
    H2,
    PostImg,
    PostInfo,
    PostsContainer,
    PostsCount,
    PostTitle,
    ProfileAge,
    ProfileContainer,
    ProfileEmail,
    ProfileImg,
    ProfileInfo,
    ProfileInfoContainer,
    ProfileName,
    ProfileUsername,
    SingleCommentContainer,
    SinglePostContainer,
} from "./ProfileElements";

function Profile() {
    return (
        <>
            <ProfileContainer>
                <H2>Name's profile</H2>
                <ProfileInfo>
                    <ProfileImg />
                    <ProfileInfoContainer>
                        <ProfileName>Display name: "name"</ProfileName>
                        <ProfileUsername>Username: "username"</ProfileUsername>
                        <ProfileEmail>Email: "email"</ProfileEmail>
                        <ProfileAge>Age: "age"</ProfileAge>
                        <PostsCount>You have "0" posts.</PostsCount>
                        <CommentsCounter>
                            You have "0" comments.
                        </CommentsCounter>

                    </ProfileInfoContainer>
                </ProfileInfo>

                <H2>Posts</H2>
                <PostsContainer>
                    <SinglePostContainer>
                        <PostImg />
                        <PostInfo>
                            <PostTitle>Title: "title"</PostTitle>
                        </PostInfo>
                    </SinglePostContainer>
                </PostsContainer>

                <H2>Your comments: </H2>
                <CommentsContainer>
                    <SingleCommentContainer>
                        <Comment>"Comment"</Comment>
                    </SingleCommentContainer>
                </CommentsContainer>
            </ProfileContainer>
        </>
    );
}

export default Profile;
