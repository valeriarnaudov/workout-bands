export const sortData = (selectedSort, data, setResults, results) => {
    if (selectedSort === "title") {
        if (results.length > 0) {
            setResults(results.sort((a, b) => a.title.localeCompare(b.title)));
        } else {
            setResults(data.sort((a, b) => a.title.localeCompare(b.title)));
        }
    } else if (selectedSort === "date") {
        if (results.length > 0) {
            setResults(results.sort((a, b) => b.timeStamp - a.timeStamp));
        } else {
            setResults(data.sort((a, b) => b.timeStamp - a.timeStamp));
        }
    } else {
        if (results.length > 0) {
            setResults(results.sort((a, b) => b.timeStamp - a.timeStamp));
        } else {
            setResults(data.sort((a, b) => b.timeStamp - a.timeStamp));
        }
    }
};
