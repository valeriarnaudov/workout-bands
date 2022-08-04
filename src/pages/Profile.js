import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
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

    const userId = localStorage.getItem("user").uid;

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
            </ProfileContainer>
        </>
    );
}

export default Profile;
