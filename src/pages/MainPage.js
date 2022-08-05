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
} from "../styles/MainElements";
import { BiLike } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { getAllPosts, likePostService } from "../services/postServices";

function Main() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [like, setLike] = useState(false);

    let userId = "null";
    if (user) {
        userId = user.uid;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let list = await getAllPosts()
                setData(list);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [like]);

    const redirectToDetailsHandler = (id) => {
        navigate(`/details/${id}`);
    };

    const likePostHandler = async (id) => {
        await likePostService(id, userId);
        setLike(!like)
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
                                    {user && item.likes.includes(userId)
                                        ? undefined
                                        : user && (
                                            <LikeBtn
                                                onClick={() =>
                                                    likePostHandler(item.id)
                                                }
                                            >
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
