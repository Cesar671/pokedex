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
    background-color: transparent;
    @media(max-width: 1000px){
        width: 100%;
    }
`;

export const ImageBackdrop = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  backdrop-filter: blur(10px);
`;


export {
    HeaderContainerStyle,
    LogoHeaderStyled,
}