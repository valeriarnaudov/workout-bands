import {
    ContentContainer,
    ContentItemsContainer,
    LikeBtn,
    Likes,
    MainSection,
    MainSectionTitle,
    PostContainer,
    PostImage,
    PostInfo,
    PostTitle,
    PostVideo,
} from "./MainElements";
import { BiLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

function Main() {
    const [data, setData] = useState([]);
    const userId = JSON.parse(localStorage.getItem("user")).uid;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const postsSnapshop = await getDocs(collection(db, "posts"));
                postsSnapshop.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (error) {
                return error;
            }
        };

        fetchData();
    }, [data]);

    const redirectToDetailsHandler = (id) => {
        navigate(`/details/${id}`);
    };

    const likePostHandler = async (id) => {
        try {
            const docRef = (doc(db, "posts", id));
            const docSnapshot = await getDoc(docRef);
            const likes = docSnapshot.data().likes;

            if (likes.includes(userId)) {
                throw new Error(`Already liked this post!`);
            }

            await updateDoc(docRef, {
                likes: [...likes, userId],
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <MainSection>
                <MainSectionTitle>Workouts</MainSectionTitle>
                {!data.length && <h1>There are no posts yet.</h1>}
                <ContentContainer>
                    <ContentItemsContainer>
                        {data.map((item) => (
                            <PostContainer key={item.id}>
                                {item.src.includes(".mp4") ? (
                                    <PostVideo
                                        src={item.src}
                                        autoPlay={true}
                                        muted={true}
                                        onClick={() =>
                                            redirectToDetailsHandler(item.id)
                                        }
                                    />
                                ) : (
                                    <PostImage
                                        src={item.src}
                                        onClick={() =>
                                            redirectToDetailsHandler(item.id)
                                        }
                                    />
                                )}
                                <PostInfo>
                                    <PostTitle>{item.title}</PostTitle>
                                    <Likes>Likes: {item.likes.length}</Likes>
                                    {item.likes.includes(userId) ? undefined : (
                                        <LikeBtn onClick={() => likePostHandler(item.id)}>
                                            <BiLike />
                                        </LikeBtn>
                                    )}
                                </PostInfo>
                            </PostContainer>
                        ))}
                    </ContentItemsContainer>
                </ContentContainer>
            </MainSection>
        </>
    );
}

export default Main;
