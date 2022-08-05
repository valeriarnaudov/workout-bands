import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Ring = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: ring 2s linear infinite;

    @keyframes ring {
        0% {
            transform: rotate(0deg);
            box-shadow: 1px 5px 2px #e65c00;
        }
        50% {
            transform: rotate(180deg);
            box-shadow: 1px 5px 2px #18b201;
        }
        100% {
            transform: rotate(360deg);
            box-shadow: 1px 5px 2px #0456c8;
        }
    }

    :before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(225, 225, 225, 0.3);
    }
`;

export const Text = styled.span`
    color: #737373;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 200px;
    animation: text 3s ease-in-out infinite;

    @keyframes text {
        0% {
            color:black;
        }
    }
`;
