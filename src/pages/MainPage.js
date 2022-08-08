import {
    ContentContainer,
    ContentItemsContainer,
    MainSection,
    MainSectionTitle,
} from "../styles/MainElements";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { getAllPosts, likePostService } from "../services/postServices";
import Loading from "../components/Loading";
import Search from "../components/Search";
import SinglePost from "../components/SinglePost";

function Main() {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(false);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [filtredPosts, setFiltredPosts] = useState([]);

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
                <Search
                    data={data}
                    filteredData={filteredData}
                    setFilteredData={setFilteredData}
                    setFiltredPosts={setFiltredPosts}
                />
                <MainSectionTitle>Workouts</MainSectionTitle>
                {!data.length && <h1>There are no posts yet.</h1>}
                <ContentContainer>
                    <ContentItemsContainer>
                        {filtredPosts
                            ? filtredPosts.map((post) => (
                                  <SinglePost
                                      key={post.id}
                                      redirectToDetailsHandler={
                                          redirectToDetailsHandler
                                      }
                                      post={post}
                                      user={user}
                                      userId={userId}
                                      likePostHandler={likePostHandler}
                                  />
                              ))
                            : undefined}
                        {filtredPosts.length === 0 &&
                            data.map((post) => (
                                <SinglePost
                                    key={post.id}
                                    redirectToDetailsHandler={
                                        redirectToDetailsHandler
                                    }
                                    post={post}
                                    user={user}
                                    userId={userId}
                                    likePostHandler={likePostHandler}
                                />
                            ))}
                    </ContentItemsContainer>
                </ContentContainer>
            </MainSection>
        </>
    );
}

export default Main;
