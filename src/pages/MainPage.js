import {
    ContentContainer,
    ContentItemsContainer,
    FunctionsContainer,
    MainSection,
    MainSectionTitle,
    SortContainer,
    SortOption,
} from "../styles/MainElements";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { getAllPosts, likePostService } from "../services/postServices";
import Loading from "../components/Loading";
import Search from "../components/Search";
import SinglePost from "../components/SinglePost";
import { sortingOptions } from "../sources/SortOptions";
import { sortData } from "../utils/SortItems";

function Main() {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(false);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [filtredPosts, setFiltredPosts] = useState([]);
    const [selectedSort, setSelectedSort] = useState(sortingOptions[0].value);

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

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
        sortData(e.target.value, filtredPosts, setFilteredData, setData, data);
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
                <FunctionsContainer>
                    <SortContainer
                        value={selectedSort}
                        onChange={handleSortChange}
                    >
                        {sortingOptions.map((option) => (
                            <SortOption key={option.value} value={option.value}>
                                {option.text}
                            </SortOption>
                        ))}
                    </SortContainer>
                </FunctionsContainer>
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
