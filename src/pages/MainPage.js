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

function Main() {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(false);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filteredGroups, setFilteredGroups] = useState([]);
    const [selectedSort, setSelectedSort] = useState(sortingOptions[0].value);
    const [selectedGroup, setSelectedGroup] = useState(
        filterMuscleGroupOptions[0].value
    );
    const [displayData, setDisplayData] = useState([]);

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
        filerAndSortDisplayConditions(
            filteredPosts,
            filteredGroups,
            setDisplayData,
            selectedGroup,
            data
        );
    }, [filteredPosts, filteredGroups, selectedGroup, data]);

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
                </ContentContainer>
            </MainSection>
        </>
    );
}

export default Main;
