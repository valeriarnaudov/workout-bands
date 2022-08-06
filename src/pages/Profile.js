import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";
import {
    CommentsCounter,
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
    SinglePostContainer,
} from "../styles/ProfileElements";

function Profile() {
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);

    const { user } = useContext(AuthContext);
    const userId = user.uid;

    console.log(userData)
    console.log(user)

    useEffect(() => {
        const dataHandler =  async () => {
            try {
                const user = await getDoc(doc(db, "users", userId));
                setUserData(user.data());
                const posts = await getDocs(collection(db, "posts"));
                posts.forEach((post) => {
                    if (post.owner === userId) {
                        setPosts([...posts, post.data()]);
                    }

                })

            } catch (error) {
                console.log(error);
            }
        }

        dataHandler();
    }, []);

    return (
        <>
            <ProfileContainer>
                <H2>Name's profile</H2>
                <ProfileInfo>
                    <ProfileImg />
                    <ProfileInfoContainer>
                        {/* image display */}
                        <ProfileName>Display name: {userData.displayName}</ProfileName>
                        <ProfileUsername>Username: {userData.username}</ProfileUsername>
                        <ProfileEmail>Email: {user.email}</ProfileEmail>
                        <ProfileAge>Age: {userData.age}</ProfileAge>
                        <PostsCount>You have "0" posts.</PostsCount>
                        <CommentsCounter>
                            You have a total of "0" comments on your posts.
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
            </ProfileContainer>
        </>
    );
}

export default Profile;
