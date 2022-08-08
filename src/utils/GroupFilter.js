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

    // if (selectedSort === "title") {
        // if (filteredPosts.length > 0) {
        //     setFilteredGroups(
        //         filteredPosts.sort((a, b) => a.title.localeCompare(b.title))
        //     );
        // } else {
        //     setData(data.sort((a, b) => a.title.localeCompare(b.title)));
        // }
    // } else if (selectedSort === "date") {
    //     if (filteredPosts.length > 0) {
    //         setFilteredGroups(
    //             filteredPosts.sort((a, b) => b.timeStamp - a.timeStamp)
    //         );
    //     } else {
    //         setFilteredGroups([])
    //         setData(data.sort((a, b) => b.timeStamp - a.timeStamp));
    //     }
    }
};
