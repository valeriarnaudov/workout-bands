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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Main() {
    const [data, setData] = useState([]);

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
    }, []);

    const redirectToDetailsHandler = (id) => {
        navigate(`/details/${id}`);
    }


    return (
        <>
            <MainSection>
                <MainSectionTitle>Workouts</MainSectionTitle>
                {!data.length && <h1>There are no posts yet.</h1>}
                <ContentContainer>
                    <ContentItemsContainer>
                        {data.map((item) => (
                            <PostContainer key={item.id} onClick={() => redirectToDetailsHandler(item.id)}>
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
