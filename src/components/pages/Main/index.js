import {
    ContentContainer,
    ContentItemsContainer,
    LikeBtn,
    Likes,
    MainSection,
    MainSectionTitle,
    PostContainer,
    PostInfo,
    PostTitle,
    PostVideo,
} from "./MainElements";
import { BiLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Main() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshop = await getDocs(collection(db, "users"));
                querySnapshop.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()});
                });
                setData(list);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    console.log(data)

    return (
        <>
            <MainSection>
                <MainSectionTitle>Workouts</MainSectionTitle>
                <ContentContainer>
                    <ContentItemsContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn>
                                    <BiLike />
                                </LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn>
                                    <BiLike />
                                </LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn>
                                    <BiLike />
                                </LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn>
                                    <BiLike />
                                </LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn>
                                    <BiLike />
                                </LikeBtn>
                            </PostInfo>
                        </PostContainer>
                    </ContentItemsContainer>
                </ContentContainer>
            </MainSection>
        </>
    );
}

export default Main;
