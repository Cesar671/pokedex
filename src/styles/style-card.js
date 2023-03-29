import styled from "styled-components";

const CardStyled = styled.div`
    border-radius: 10px;
    opacity: 0.8;
    background-image: url('resources/fondo.png');
    background-size: cover;
    max-width: 150px;
    max-height: 200px;
    padding: 5px;
    display: grid;
    gap: 45px;
    text-align: center;
    height: 500px;
    overflow: hidden;
    box-shadow: 5px 5px 5px;
    :hover{
        opacity: 1;
        img{
            transform: scale(1.1);
        }
    }
`;

const DivIdStyled = styled.div`
    width: 35px;
    height: 35px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;
    justify-self: end;
`;

const DivHeaderCard = styled.div`
    width: 150px;
    display: flex;
    justify-content: end;
    position: absolute;
`;


const NameCardStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128,128,128, 0.7);
    font-size: 13px;
    border-style: solid;
    border-width: 1px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    height: 30px;
    width: 100%;
`;

const DivNameContainer = styled.div`
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: absolute;
`;

const ImageStyledCard = styled.img`
    transition: transform 0.2s ease-in-out;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export {
    CardStyled,
    DivIdStyled,
    DivHeaderCard,
    NameCardStyled,
    ImageStyledCard,
    DivNameContainer,
}