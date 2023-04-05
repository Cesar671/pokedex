import styled from "styled-components";

export const SeparateBetweenContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 20px;
`;


export const ButtonStyled = styled.button`
    font-size: 20px;
    border-style: none;
    background-color: rgba(128,128,128, 0);
    border-style: solid;
    transition: 0.3s ease-in-out;
    border-width: 1px;
    :hover{
        color:white;
        border-color: white;
    }
`;