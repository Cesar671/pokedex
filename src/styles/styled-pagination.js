import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
`;

const Container = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    padding: 10px;  
    background-color: rgba(138,138,138,0.8);
    margin-bottom: 100px;
`;

const IconStyledPagination = styled(FontAwesomeIcon)`
    transition: 0.1s ease-in-out;
    :hover{
        color:white;
    }
`;

export {
    PaginationContainer,
    Container,
    IconStyledPagination
}