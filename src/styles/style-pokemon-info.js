import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PokeSprite = styled.img`
    width: 180px;
    height: 180px;
    object-fit:cover;
    transition: transform 0.2s ease-in-out;
    opacity: 0.9;
    :hover{
        opacity: 1;
        transform: scale(1.4);
    }
`;

export const ContainerInfo = styled.div`
    background-color: rgba(128, 128,128, 0.65);
    padding: 20px;
    margin: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 20px;
    color: white;
    max-width:700px;
`;

export const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 100%;
    gap:10px;
`;

export const SectionSections = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const GridHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    @media (max-width: 700px){
        grid-template-columns: 1fr;
    }
`;

export const TypeStyledDetails = styled.img`
    width: 50px;
    height: 50px;
`;

export const TypeStyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    background-color: rgba(128,128,128,0.8);
`;

export const PokeballIcon = styled.img`
    width: 20px;
    height: 20px;
`;

export const AbilityInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    p{
        word-wrap: break-word;
    }
`;

export const SectionContainerData = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr ;
`;

export const EvolutionContainer = styled.div`
    display: flex;
`;

export const NextIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
`;