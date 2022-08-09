import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";
import { ownerPosts } from "../services/postServices";
import { getUserData } from "../services/userServices";
import {
    EditProfileBtn,
    H2,
    NoPosts,
    PostDate,
    PostImg,
    PostsContainer,
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

    const { uid } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const dataHandler = async () => {
            await getUserData(uid, setUserData);
            await ownerPosts(uid, setPosts);
            setLoading(false);
        };

        if (user.uid === uid) {
            setIsLoggedUserProfile(true);
        }

        dataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uid]);

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
                        <ProfileEmail>Email: {userData.email}</ProfileEmail>
                        <ProfileAge>Age: {userData.age}</ProfileAge>
                        {isLoggedUserProfile && (
                            <EditProfileBtn to={`/profile/edit/${user.uid}`}>
                                Edit profile
                            </EditProfileBtn>
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
                            <PostDate>
                                {post.timeStamp.toDate().toLocaleString()}
                            </PostDate>
                        </SinglePostContainer>
                    ))}
                </PostsContainer>
            </ProfileContainer>
        </>
    );
}

export default Profile;
