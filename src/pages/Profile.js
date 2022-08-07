import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";
import { getAllPosts, ownerPosts } from "../services/postServices";
import { getSignedUserData } from "../services/userServices";
import {
    CommentsCounter,
    EditProfileBtn,
    H2,
    NoPosts,
    PostImg,
    PostInfo,
    PostsContainer,
    PostsCount,
    PostTitle,
    PostVideo,
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
    const [isLoggedUserProfile, setIsLoggedUserProfile] = useState(false);

    const navigate = useNavigate();

    const { uid } = useParams()
    const { user } = useContext(AuthContext);
    const userId = user.uid;

    useEffect(() => {
        const dataHandler = async () => {
            await getSignedUserData(userId, setUserData);
            await ownerPosts(userId, setPosts);
            setLoading(false);
        };

        if (user.uid === uid) {
            setIsLoggedUserProfile(true);
        }

        dataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const redirectToDetailsHandler = (id) => {
        navigate(`/details/${id}`);
    };

   

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <ProfileContainer>
                <H2>{userData.displayName}'s profile</H2>
                <ProfileInfo>
                    <ProfileImg src={userData.src} />
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
                        {isLoggedUserProfile && (
                            <EditProfileBtn>Edit profile</EditProfileBtn>
                        )}
                    </ProfileInfoContainer>
                </ProfileInfo>

                <H2>Posts</H2>

                {!posts.length && (
                    <NoPosts>You didn't make any post yet.</NoPosts>
                )}

                <PostsContainer>
                    {posts.map((post) => (
                        <SinglePostContainer key={post.id}>
                            {post.src.includes(".mp4") ? (
                                <PostVideo
                                    src={post.src}
                                    autoPlay={true}
                                    muted={true}
                                    onClick={() =>
                                        redirectToDetailsHandler(post.id)
                                    }
                                />
                            ) : (
                                <PostImg
                                    src={post.src}
                                    onClick={() =>
                                        redirectToDetailsHandler(post.id)
                                    }
                                />
                            )}
                            <PostTitle>{post.title}</PostTitle>
                        </SinglePostContainer>
                    ))}
                </PostsContainer>
            </ProfileContainer>
        </>
    );
}

export default Profile;
