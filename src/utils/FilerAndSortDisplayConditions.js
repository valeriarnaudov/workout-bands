function filerAndSortDisplayConditions(
    filteredPosts,
    filteredGroups,
    setResults,
    selectedGroup,
    data
) {
    if (filteredPosts.length > 0 && filteredGroups.lenght > 0) {
        setResults(filteredGroups);
    } else if (filteredGroups.length > 0) {
        setResults(filteredGroups);
    } else if (selectedGroup !== "" && filteredGroups.length === 0) {
        setResults([]);
    } else if (filteredPosts.length > 0) {
        setResults(filteredPosts);
    } else if (data.length > 0) {
        setResults(data);
    } else {
        setResults([]);
    }
}

export default filerAndSortDisplayConditions;
