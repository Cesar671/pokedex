import styled from "styled-components";

export const ImageLoader = styled.img`
    width: 80px;
    height: 80px;
    transition: 0.5s ease-in-out;
    //transform: rotate(${ props => (props.rotate)}deg);
    animation: rotation 2s ease-out infinite;
`;

export const LoaderContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    transition: 0.5s ease-in-out;

    @keyframes rotation {
        0%{
            transform: rotate(360deg);
        }
    }
`;