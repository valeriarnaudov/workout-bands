export const sortData = (selectedSort, data, setResults, results) => {
    if (selectedSort === "titleasc") {
        if (results.length > 0) {
            setResults(results.sort((a, b) => a.title.localeCompare(b.title)));
        } else {
            setResults(data.sort((a, b) => a.title.localeCompare(b.title)));
        }
    } else if (selectedSort === "datedesc") {
        if (results.length > 0) {
            setResults(results.sort((a, b) => b.timeStamp - a.timeStamp));
        } else {
            setResults(data.sort((a, b) => b.timeStamp - a.timeStamp));
        }
    } else if (selectedSort === "dateasc") {
        if (results.length > 0) {
            setResults(results.sort((a, b) => a.timeStamp - b.timeStamp));
        } else {
            setResults(data.sort((a, b) => a.timeStamp - b.timeStamp));
        }
    } else if (selectedSort === "likesdesc") {
        if (results.length > 0) {
            setResults(
                results.sort(
                    (a, b) => Number(b.likes.length) - Number(a.likes.length)
                )
            );
        } else {
            setResults(
                data.sort(
                    (a, b) => Number(b.likes.length) - Number(a.likes.length)
                )
            );
        }
    } else if (selectedSort === "likesasc") {
        if (results.length > 0) {
            setResults(
                results.sort(
                    (a, b) => Number(a.likes.length) - Number(b.likes.length)
                )
            );
        } else {
            setResults(
                data.sort(
                    (a, b) => Number(a.likes.length) - Number(b.likes.length)
                )
            );
        }
    } else {
        if (results.length > 0) {
            setResults(results.sort((a, b) => b.timeStamp - a.timeStamp));
        } else {
            setResults(data.sort((a, b) => b.timeStamp - a.timeStamp));
        }
    }
};
