export const filterGroups = (
    selectedGroup,
    filteredPosts,
    setFilteredData,
    setFilteredGroups,
    data
) => {
    if (selectedGroup !== "" ) {
        if (filteredPosts.length > 0) {
            setFilteredData(
                filteredPosts.filter((item) => item.muscleGroup === selectedGroup)
            );
        } else {
            setFilteredGroups(data.filter((item) => item.muscleGroup === selectedGroup));
        }
    }
};
