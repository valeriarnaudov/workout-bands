import {
    ContentContainer,
    ContentItemsContainer,
    FilterContainer,
    FunctionsContainer,
    MainSection,
    MainSectionTitle,
    NoPosts,
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
import { filterMuscleGroupOptions } from "../sources/MuscleGroupsOptions";
import { filterGroups } from "../utils/GroupFilter";
import InfiniteScroll from "react-infinite-scroll-component";

function Main() {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(false);
    const [loading, setLoading] = useState(true);

    const [selectedSort, setSelectedSort] = useState(sortingOptions[0].value);
    const [selectedGroup, setSelectedGroup] = useState(
        filterMuscleGroupOptions[0].value
    );

    const [results, setResults] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    const [slice, setSlice] = useState(6);
    const [hasMore, setHasMore] = useState(true);

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

    useEffect(() => {
        setSlice(6);

        if (results.length > 0) {
            setDisplayData(results.slice(0, slice));
            if (results.length <= slice) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results, data, selectedSort, selectedGroup]);

    const redirectToDetailsHandler = (id) => {
        navigate(`/details/${id}`);
    };

    const likePostHandler = async (id) => {
        await likePostService(id, userId);
        setLike(!like);
    };

    function handleSortChange (e) {
        setSelectedSort(e.target.value);
        sortData(e.target.value, data, setResults, results);
    };

    function handleGroupChange (e) {
        setSelectedGroup(e.target.value);
        filterGroups(e.target.value, data, setResults, setSelectedSort);
    };

    const addSlice = () => {
        setDisplayData([...displayData, ...nextSlice()]);

        setSlice(slice + 3);
        if (slice >= results.length) {
            setHasMore(false);
        }
    };

    const nextSlice = () => {
        return results.slice(slice, slice + 3);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <MainSection>
                <MainSectionTitle>Workouts</MainSectionTitle>
                <Search
                    data={data}
                    displayData={displayData}
                    setResults={setResults}
                    setSelectedSort={setSelectedSort}
                    setSelectedGroup={setSelectedGroup}
                    like={like}
                />
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
                    <FilterContainer
                        value={selectedGroup}
                        onChange={handleGroupChange}
                    >
                        {filterMuscleGroupOptions.map((option) => (
                            <SortOption key={option.value} value={option.value}>
                                {option.text}
                            </SortOption>
                        ))}
                    </FilterContainer>
                </FunctionsContainer>
                {data.length === 0 && (
                    <NoPosts>There are no posts yet.</NoPosts>
                )}
                {selectedGroup !== "" && displayData.length === 0 ? (
                    <NoPosts>No results found in this group</NoPosts>
                ) : undefined}
                <ContentContainer>
                    <InfiniteScroll
                        dataLength={displayData.length}
                        next={addSlice}
                        hasMore={hasMore}
                        loader={<NoPosts>Loadding...</NoPosts>}
                        endMessage={
                            <NoPosts>Yay! You have seen it all</NoPosts>
                        }
                    >
                        <ContentItemsContainer>
                            {displayData.map((post) => (
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
                    </InfiniteScroll>
                </ContentContainer>
            </MainSection>
        </>
    );
}

export default Main;
