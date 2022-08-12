import styled from "styled-components";
import { MAIN_CONTAINER_BACKGROUND_COLOR } from "../variables/Colors";

export const SearchForm = styled.form`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const Input = styled.input`
    background-color: ${MAIN_CONTAINER_BACKGROUND_COLOR};
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
    background-color: ${MAIN_CONTAINER_BACKGROUND_COLOR};
    display: grid;
    place-items: center;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
`;

export const ClearIcon = styled.div`
    height: 30px;
    width: 50px;
    background-color: white;
    display: grid;
    place-items: center;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
`;

export const ClearBtn = styled.button`
    cursor: pointer;
`;
