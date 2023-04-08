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

export const ButtonMenuContainer = styled.div`
    display: flex;
    gap:5px;
    transform: translateX(0);
    transition: 0.3s ease-in-out;
    color:white;
    text-decoration: none;

    @keyframes sparkle3 {
        0% {
            box-shadow: none;
        }
        50% {
            box-shadow: 0 0 0px 0px #0000FF, 0 0 2px 2px #0000FF, 0 0 5px 5px #0000FF;
        }
        100% {
            box-shadow: none;
        }
    }
    
    :hover{
        .buttonMenu{
            transform: translateX(10px);
            animation: sparkle3 2s ease-in-out infinite alternate;
            background-color:  #f8da45;
            color: #0000FF;
            border-color: #0000FF;
        }
        .buttonMenuA{
            animation: sparkle3 2s ease-in-out infinite alternate;
            background-color:  #f8da45;
            border-color: #0000FF;
        }
    }
    
`;

export const ButtonIcon = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

export const ButtonPartA = styled.div`
    padding: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(128,128,128,0);
    transition: 0.3s ease-in-out;
`;

export const ButtonPartB = styled.div`
    padding: 2px;
    width: 80px;
    display: flex;
    justify-content: center;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(128,128,128,0);
    transition: 0.3s ease-in-out;
`;