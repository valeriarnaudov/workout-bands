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
import filerAndSortDisplayConditions from "../utils/FilerAndSortDisplayConditions";
import InfiniteScroll from "react-infinite-scroll-component";

function Main() {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(false);
    const [loading, setLoading] = useState(true);

    const [filteredData, setFilteredData] = useState([]); //results after searching
    const [filteredPosts, setFilteredPosts] = useState([]); //results after sorting by title or date
    const [filteredGroups, setFilteredGroups] = useState([]); // results after sorting by title or date

    const [selectedSort, setSelectedSort] = useState(sortingOptions[0].value); //  selected sort option
    const [selectedGroup, setSelectedGroup] = useState(
        filterMuscleGroupOptions[0].value
    ); // selected group option

    const [results, setResults] = useState([]); // results after filtering and sorting and searching
    const [displayData, setDisplayData] = useState([]); // loaded posts

    const [slice, setSlice] = useState(6); // slice of data to display
    const [hasMore, setHasMore] = useState(true); // if there are more posts to display

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
    }, [like]); // fetch the initial data and changes only when like is changed

    useEffect(() => {
        filerAndSortDisplayConditions(
            filteredPosts,
            filteredGroups,
            setResults,
            selectedGroup,
            data
        );
    }, [filteredPosts, filteredGroups, selectedGroup, data]); // filter and sort the data and set the results to display

    useEffect(() => {
        setSlice(6);

        setDisplayData(results.slice(0, slice));
        if (results.length <= slice) {
            setHasMore(false);
        }
        setHasMore(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results]); // infinite scroll

    const redirectToDetailsHandler = (id) => {
        navigate(`/details/${id}`);
    };

    const likePostHandler = async (id) => {
        await likePostService(id, userId);
        setLike(!like);
    };

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
        sortData(e.target.value, filteredPosts, setFilteredData, setData, data);
    };

    const handleGroupChange = (e) => {
        setSelectedGroup(e.target.value);
        filterGroups(
            e.target.value,
            filteredPosts,
            setFilteredData,
            setFilteredGroups,
            data
        );
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
                    filteredData={filteredData}
                    setFilteredData={setFilteredData}
                    setFilteredPosts={setFilteredPosts}
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
                {selectedGroup !== "" && filteredGroups.length === 0 ? (
                    <NoPosts>No results found in this group</NoPosts>
                ) : undefined}
                <ContentContainer>
                    <InfiniteScroll
                        dataLength={displayData.length}
                        next={addSlice}
                        hasMore={hasMore}
                        loader={<Loading />}
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
