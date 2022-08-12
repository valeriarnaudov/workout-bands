export const filterGroups = (
    selectedGroup,
    data,
    setResults,
    setSelectedSort
) => {
    if (selectedGroup !== "") {
        setSelectedSort("")
            setResults(
                data.filter((item) => item.muscleGroup === selectedGroup)
            );
        }
     else {
        setSelectedSort("")
        setResults(data);
    }
};
