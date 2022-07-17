import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 692px;
    display: block;
    align-items: center;
    padding: 15px 0 20px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #303030;
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

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: red;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
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
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 20px;
    box-shadow: 10px 4px 20px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: red;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        transition: 0.3s ease-in-out;
        background: white;
        color: red;
    }

    &:disabled {
        background: #ccc;
        color: #fff;
    }
`;

export const Text = styled.a`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;

export const ErrorLable = styled.label`
    text-align: center;
    color: white;
    font-size: 16px;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 4px;
    background: red;
    font-weight: 700;
`;
