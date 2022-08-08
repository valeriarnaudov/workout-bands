import React, { useEffect, useState } from "react";
import {
    ClearIcon,
    DataItem,
    DataP,
    DataResult,
    Input,
    SearchForm,
    SearchIcon,
    SearchInputs,
} from "../styles/SearchElements";
import { FiSearch, FiXCircle } from "react-icons/fi";
import { getAllPosts } from "../services/postServices";
import Loading from "../components/Loading";

function Search() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const list = await getAllPosts();
            setData(list);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleInput = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const filtered = data
            .filter((item) => {
                return item.title
                    .toLowerCase()
                    .includes(searchWord.toLowerCase());
            })
            .slice(0, 10);
        filtered.sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(filtered);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <SearchForm>
                {/* <SearchInputs> */}
                <Input
                    type="text"
                    placeholder="Search a workout by title..."
                    value={wordEntered}
                    onChange={handleInput}
                />
                {filteredData.length === 0 ? undefined : (
                    <ClearIcon>
                        <FiXCircle onClick={clearInput} />
                    </ClearIcon>
                )}
                <SearchIcon>
                    <FiSearch />
                </SearchIcon>
            </SearchForm>
            {/* </SearchInputs> */}
            {filteredData.length !== 0 && (
                <DataResult>
                    {filteredData.map((item) => (
                        <DataItem
                            key={item.id}
                            to={`/details/${item.id}`}
                            target="_blank"
                        >
                            <DataP>{item.title}</DataP>
                        </DataItem>
                    ))}
                </DataResult>
            )}
        </>
    );
}

export default Search;
