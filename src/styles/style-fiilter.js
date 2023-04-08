import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearcherContainer = styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;
    background-color: rgba(128,128,128,0.5);
    button{
        background: rgba(128,128,128);
    }
`;

export const InputSearcher = styled.input`
    width: 200px;
    height: 21px;
`;

export const IconSearcher = styled(FontAwesomeIcon)`

`;