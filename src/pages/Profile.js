import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";
import { getAllPosts, ownerPosts } from "../services/postServices";
import { getSignedUserData } from "../services/userServices";
import {
    CommentsCounter,
    EditProfileBtn,
    H2,
    PostImg,
    PostInfo,
    PostsContainer,
    PostsCount,
    PostTitle,
    ProfileAge,
    ProfileContainer,
    ProfileCreatedAt,
    ProfileEmail,
    ProfileImg,
    ProfileInfo,
    ProfileInfoContainer,
    ProfileName,
    ProfileUsername,
    SinglePostContainer,
} from "../styles/ProfileElements";

function Profile() {
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);
    const userId = user.uid;

    useEffect(() => {
        const dataHandler = async () => {
            await getSignedUserData(userId, setUserData);
            await ownerPosts(userId, setPosts);
            setLoading(false);
        };

        dataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <ProfileContainer>
                <H2>{userData.displayName}'s profile</H2>
                <ProfileInfo>
                    <ProfileImg src={userData.img} />
                    <ProfileInfoContainer>
                        <ProfileName>
                            Display name: {userData.displayName}
                        </ProfileName>
                        <ProfileCreatedAt>
                            Created on:{" "}
                            {userData.timeStamp.toDate().toLocaleString()}
                        </ProfileCreatedAt>
                        <ProfileUsername>
                            Username: {userData.username}
                        </ProfileUsername>
                        <ProfileEmail>Email: {user.email}</ProfileEmail>
                        <ProfileAge>Age: {userData.age}</ProfileAge>
                        <PostsCount>You have "0" posts.</PostsCount>
                        <CommentsCounter>
                            Total comments on posts: "0"
                        </CommentsCounter>
                        <EditProfileBtn>Edit profile</EditProfileBtn>
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
            </ProfileContainer>
        </>
    );
}

export default Profile;
