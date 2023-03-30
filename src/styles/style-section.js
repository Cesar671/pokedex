import styled from "styled-components";

const Section = styled.div`
    background-color: rgba(128,128,128,0.5);
    padding: 30px;
`

const HeaderTittle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) 18%, rgba(0,212,255,0) 100%);
    margin-bottom: 20px;
    padding-left: 10px;
    border-top-left-radius: 30px;
    padding-right: 30px;
`

const PokedexImg = styled.img`
    width: 70px;
    height: 70px;
`;

export {Section, HeaderTittle, PokedexImg}