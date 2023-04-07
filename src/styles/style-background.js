import styled from "styled-components";

const BackgroundStyled = styled.img`
  position: fixed;
  width: ${props => `${props.isReduced}%`};
  height: ${props => `${props.isReduced}%`};
  object-fit: cover;
`

const BackgroundContainer = styled.div`
    left:0;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: -100;
    transition: height 0.3s ease-out;
`;

const BackgroundGradient = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(0deg,  rgba(128,128,128, 0.5) 40%, rgba(34,193,195,0) 100% );
`

export {
    BackgroundStyled,
    BackgroundContainer,
    BackgroundGradient,
}