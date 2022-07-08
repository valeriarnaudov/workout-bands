import {
    ContentContainer,
    ContentItemsContainer,
    LikeBtn,
    Likes,
    MainSection,
    MainSectionTitle,
    PostContainer,
    PostImage,
    // PostImage,
    PostInfo,
    PostTitle,
    PostVideo,
    // PostVideo,
} from "./MainElements";
import { BiLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FormH1 } from "../CreatePost/CreateElements";

function Main() {
    const [data, setData] = useState([]);

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
    }, []);

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
                                    />
                                ) : (
                                    <PostImage src={item.src} />
                                )}
                                <PostInfo>
                                    <PostTitle>{item.title}</PostTitle>
                                    <Likes>Likes: {item.likes.length}</Likes>
                                    <LikeBtn>
                                        <BiLike />
                                    </LikeBtn>
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
