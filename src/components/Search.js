import React, { useState } from "react";
import {
    ClearIcon,
    Input,
    SearchForm,
    SearchIcon,
} from "../styles/SearchElements";
import { FiSearch, FiXCircle } from "react-icons/fi";

function Search({
    data,
    displayData,
    setResults,
    setSelectedSort,
    setSelectedGroup,
}) {
    const [wordEntered, setWordEntered] = useState("");

    const handleInput = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        let filtered = "";
        if (searchWord.length === 1) {
            filtered = data
                .filter((item) => {
                    return item.title
                        .toLowerCase()
                        .startsWith(searchWord.toLowerCase());
                })
                .slice(0, 10);
            filtered.sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            );
        } else if (searchWord.length > 1) {
            filtered = data
                .filter((item) => {
                    return item.title
                        .toLowerCase()
                        .includes(searchWord.toLowerCase());
                })
                .slice(0, 10);
            filtered.sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            );
        }

        if (searchWord === "") {
            setResults(data);
        } else {
            setResults(filtered);
        }
    };
    
    if (wordEntered === "" && displayData.length === 0) {
        setResults(data);
    }

    const clearInput = () => {
        setResults(data);
        setWordEntered("");
        setSelectedGroup("");
        setSelectedSort("");
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        setResults(displayData);
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
                <SearchIcon>
                    <FiSearch onClick={submitFormHandler} />
                </SearchIcon>
                <ClearIcon>
                    <FiXCircle onClick={clearInput} />
                </ClearIcon>
            </SearchForm>
        </>
    );
}

export default Search;
