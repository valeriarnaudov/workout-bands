export const sortData = (selectedSort,filtredPosts ,setFilteredData,setData,data) => {
    if (selectedSort === "title") {
        if (filtredPosts.length > 0) {
            setFilteredData(
                filtredPosts.sort((a, b) => a.title.localeCompare(b.title))
            );
        } else {
            setData(data.sort((a, b) => a.title.localeCompare(b.title)));
        }
    } else if (selectedSort === "date") {
        if (filtredPosts.length > 0) {
            setFilteredData(
                filtredPosts.sort((a, b) => b.timeStamp - a.timeStamp)
            );
        } else {
            setData(data.sort((a, b) => b.timeStamp - a.timeStamp));
        }
    } 
}