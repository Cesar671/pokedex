import styled from "styled-components";

export const SpriteTypeMovement = styled.img`
    height:20px;
    width:20px;
`;

export const MovementContainerStyle = styled.div`
    display:grid;
    grid-template-columns: 1fr 4fr;
    gap:10px;
    padding:3px;
    justify-content: start;
    width: 100%;
    margin-left: 30px;
    align-items: center;
    p {
        word-wrap: break-word;
    }
`

export const NameMovementContainer = styled.div`
    display:flex;
    justify-content:start;
    align-items:center;
    gap:5px;
`;