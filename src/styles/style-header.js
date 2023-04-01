import styled from "styled-components";

const HeaderContainerStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const LogoHeaderStyled = styled.img`

    @media(max-width: 1000px){
        width: 100%;
    }
    
`

export {
    HeaderContainerStyle,
    LogoHeaderStyled,
}