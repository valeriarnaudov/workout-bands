import React, { useState } from "react";
import {
    ClearIcon,
    DataItem,
    DataP,
    DataResult,
    Input,
    SearchForm,
    SearchIcon,
} from "../styles/SearchElements";
import { FiSearch, FiXCircle } from "react-icons/fi";

function Search({ data, filteredData, setFilteredData, setFilteredPosts }) {
    const [wordEntered, setWordEntered] = useState("");

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
        setFilteredPosts([])
        setWordEntered("");
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        setFilteredPosts(filteredData);
    };


    return (
        <>
            <SearchForm onSubmit={submitFormHandler}>
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
