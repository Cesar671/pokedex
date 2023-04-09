import styled from "styled-components";

const Section = styled.div`
background: rgb(117,117,117);
background: linear-gradient(198deg, rgba(117,117,117,0) 0%, rgba(120,120,120,1) 50%, rgba(122,122,122,0) 100%);
max-width: 1000px;
width: 100%;
`;

const HeaderTittle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) 18%, rgba(0,212,255,0) 100%);
    margin-bottom: 20px;
    border-top-left-radius: 30px;

`;

const PokedexImg = styled.img`
    width: 70px;
    height: 70px;
`;

export {Section, HeaderTittle, PokedexImg}