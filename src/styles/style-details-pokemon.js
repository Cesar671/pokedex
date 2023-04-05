import styled from "styled-components";
import { DATA_COLORS } from "../js/TypesColors";

export const DetailsSprites = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content:center;
    align-items: center;
    gap: 20px;
`;

export const SpriteInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`

export const WeakenessContainer = styled.div`
    width:90%;
    padding:10px;
`

export const InternalContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

export const WeaknessType = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    background-color: rgba(128,128,128,0.7);
    padding:3px;
    border-radius: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: ${ props => DATA_COLORS[props.color] };
    height:20px;
`   
export const DamageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    margin-top: 30px;
`;

export const LableContainer = styled.label`
    width: 165px;
`