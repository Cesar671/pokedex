import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DeployIcon = styled(FontAwesomeIcon)`
    color:white;
    width:30px;
    height:30px;
    transition: 0.2s ease-in-out;
    border-color:white;
    border-style:solid;
    border-radius: 10px;
`;

export const HeaderContainer = styled.div`
    width: 90%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) 18%, rgba(0,212,255,0) 100%);
    margin: 10px;
    height: 65px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 20px;
    padding-right:20px;
    :hover svg{
        color:black;
    }
`;