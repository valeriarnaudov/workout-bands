import styled from "styled-components";
import {
    BTN_BACKGROUND,
    BTN_BACKGROUND_HOVER,
    BTN_HOVER_TEXT_COLOR,
    BTN_MAIN_TEXT_COLOR,
    CONTAINER_BACKGROUND_COLOR,
    TEXT_COLOR,
    TITLES_TEXT_COLOR,
} from "../variables/Colors";

export const Container = styled.div`
    min-height: calc(100vh - 155px);
    display: block;
    align-items: center;
    padding: 15px 0;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;
export const Form = styled.form`
    background: ${CONTAINER_BACKGROUND_COLOR};
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 20px;
    box-shadow: 10px 4px 20px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: ${TITLES_TEXT_COLOR};
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    font-weight: bold;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: ${TEXT_COLOR};
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: ${BTN_BACKGROUND};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: ${BTN_MAIN_TEXT_COLOR};
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        transition: 0.3s ease-in-out;
        background: ${BTN_BACKGROUND_HOVER};
        color: ${BTN_HOVER_TEXT_COLOR};
    }

    &:disabled {
        background: #ccc;
        color: #fff;
    }
`;

export const Text = styled.a`
    text-align: center;
    margin-top: 24px;
    color: ${TEXT_COLOR};
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: ${BTN_HOVER_TEXT_COLOR};
    }
`;

export const OptionContainer = styled.select`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const SelectOption = styled.option`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: red;
    margin-top: 2rem;
    max-width: 500px;
`;

export const UploadBtn = styled.label`
    justify-content: center;
    background: ${BTN_BACKGROUND};
    padding: 12px 12px;
    border: none;
    border-radius: 20px;
    color: ${BTN_MAIN_TEXT_COLOR};
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    margin-bottom: 20px;

    &:hover {
        transition: 0.3s ease-in-out;
        background: ${BTN_BACKGROUND_HOVER};
        color: ${BTN_HOVER_TEXT_COLOR};
    }

    &:disabled {
        background: #ccc;
        color: #fff;
    }
`;

export const UploadedImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
`;