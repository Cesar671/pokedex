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
    width: 150px;
    height: 500px;
    overflow: hidden;
    box-shadow: 5px 5px 5px;
    :hover{
        opacity: 1;
        img{
            transform: scale(1.2);
        }
    }
`;

const DivIdStyled = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DivHeaderCard = styled.div`
    width: 150px;
    display: flex;
    height: 35px;
    justify-content: space-between;
    position: absolute;
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 0.6;
`;


const NameCardStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128,128,128, 0.8);
    font-size: 13px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    height: 30px;
    width: 100%;
    color: white;
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