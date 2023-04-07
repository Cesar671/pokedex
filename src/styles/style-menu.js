import styled from "styled-components";

export const Menucontainer = styled.div`
    left: 0;
    position: fixed;
    background-color: rgba(128,128,128,0.9) ;
    height:100%;
    z-index:100;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    gap: 20px;
    @keyframes shine {
        from {
            filter: brightness(1);
        }
        to {
            filter: brightness(3);
        }
    }
    @keyframes sparkle {
        0% {
            box-shadow: none;
        }
        50% {
            box-shadow: 0 0 2px 2px #ffffff, 0 0 5px 5px #ffffff, 0 0 10px 10px #ffffff;
        }
        100% {
            box-shadow: none;
        }
    }

    @keyframes sparkle2 {
        0% {
            box-shadow: none;
        }
        50% {
            box-shadow: 0 0 0px 0px #87CEEB, 0 0 2px 2px #87CEEB, 0 0 5px 5px #87CEEB;
        }
        100% {
            box-shadow: none;
        }
    }
`;

export const ButtonContainer = styled.button`

`;

export const LogoImg = styled.img`
    width: 140px;
    :hover{
        animation: shine 1s ease-in-out infinite alternate;
    }
`;

export const PokeballCenter = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    animation: sparkle2 2s ease-in-out infinite alternate;
    position: absolute;
    margin-left: 28.42px;
    margin-top: -44.7px;
`;

export const ImgContainerLogo = styled.img`
    width: 70px;
    height: 70px;
    transform: rotate(${ props => (props.rotate*-1)/2 }deg);
    border-radius: 50%;
    animation: sparkle 2s ease-in-out infinite alternate;
`;

export const HeaderMenuDivInvisible = styled.div`
    height:100%;
`

export const MenuContainerResponsive = styled.div`
    @media (max-width: 700px){
        .Menu{
            display: none;
        }
        .responsiveMenu{
            display: flex;
        }
        position: absolute;
    }
`

export const ButtonMenuResponsive = styled.button`
    background-color: transparent;
    border-style: none;
`

export const MenuContainerR = styled.div`
    display: none;
    position:fixed;
    top: 0;
    left: 0;
    margin-left: 30px;
    margin-top: 30px;
    z-index: 101;
    transition: 0.3s ease-in-out;
`

export const MenuContainerRNonDisplayed = styled(Menucontainer)`
    display: ${props => props.display};
    z-index: -1;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    align-items: center;
`