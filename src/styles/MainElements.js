import styled from "styled-components";
import {
    BTN_MAIN_TEXT_COLOR,
    CONTAINER_TEXT_COLOR,
    TITLES_TEXT_COLOR,
} from "../variables/Colors";

export const MainSection = styled.div`
    min-height: calc(100vh - 155px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainSectionTitle = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${TITLES_TEXT_COLOR};
    margin-top: 2rem;
    max-width: 100%;
`;

export const FunctionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SortContainer = styled.select`
    border-radius: 10px;
    border: 4px solid ${CONTAINER_TEXT_COLOR};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${BTN_MAIN_TEXT_COLOR};
    margin-top: 1.5rem;
    width: 195px;
`;

export const FilterContainer = styled.select`
    border-radius: 10px;
    border: 4px solid ${CONTAINER_TEXT_COLOR};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-left: 10px;
    color: ${BTN_MAIN_TEXT_COLOR};
    margin-top: 1.5rem;
    width: 195px;
`;

export const SortOption = styled.option`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: black;
    margin-top: 2rem;
    max-width: 500px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
`;

export const ContentItemsContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 10px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const NoPosts = styled.h2`
    color: ${TITLES_TEXT_COLOR};
    font-size: 2rem;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 20px;
`;
