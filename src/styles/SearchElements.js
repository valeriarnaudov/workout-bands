import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const Input = styled.input`
    background-color: white;
    border: 0;
    border-radius: 20px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 30px;
    width: 300px;

    :focus {
        outline: none;
    }
`;
export const SearchIcon = styled.div`
    height: 30px;
    width: 50px;
    background-color: white;
    display: grid;
    place-items: center;
    font-size: 12px;
    cursor: pointer;
`;

export const ClearIcon = styled.div`
    height: 30px;
    width: 50px;
    background-color: white;
    display: grid;
    place-items: center;
    font-size: 12px;
    cursor: pointer;
`;

export const DataResult = styled.div`
    margin-top: 5px;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const DataItem = styled(Link)`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;

    :hover {
        background-color: white;
    }
`;

export const DataP = styled.p`
    margin-left: 10px;
`;

export const ClearBtn = styled.button`
    cursor: pointer;
`;
