function filerAndSortDisplayConditions(
    filteredPosts,
    filteredGroups,
    setDisplayData,
    selectedGroup,
    data
) {
    if (filteredPosts.length > 0 && filteredGroups.lenght > 0) {
        setDisplayData(filteredGroups);
    } else if (filteredGroups.length > 0) {
        setDisplayData(filteredGroups);
    } else if (selectedGroup !== "" && filteredGroups.length === 0) {
        setDisplayData([]);
    } else if (filteredPosts.length > 0) {
        setDisplayData(filteredPosts);
    } else if (data.length > 0) {
        setDisplayData(data);
    } else {
        setDisplayData([]);
    }
}

export default filerAndSortDisplayConditions;
