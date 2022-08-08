import {
    By,
    ContentContainer,
    ContentItemsContainer,
    LikeBtn,
    Likes,
    MainSection,
    MainSectionTitle,
    PostContainer,
    PostImage,
    PostInfo,
    PostOwner,
    PostTitle,
    PostVideo,
} from "../styles/MainElements";
import { BiLike } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { getAllPosts, likePostService } from "../services/postServices";
import Loading from "../components/Loading";
import Search from "./Search";

function Main() {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    let userId = "null";
    if (user) {
        userId = user.uid;
    }

    useEffect(() => {
        const fetchData = async () => {
                const list = await getAllPosts();
                setData(list);
                setLoading(false);
        };

        fetchData();
    }, [like]);

    const redirectToDetailsHandler = (id) => {
        navigate(`/details/${id}`);
    };

    const likePostHandler = async (id) => {
        await likePostService(id, userId);
        setLike(!like);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <MainSection>
                <Search />
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
                                    <By>By :<PostOwner to={`/profile/${item.owner}`}>{item.ownerName}</PostOwner></By>
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
