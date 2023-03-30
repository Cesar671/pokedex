import React from 'react'
import { PaginationContainer, Container, IconStyledPagination } from '../styles/styled-pagination'
import { faBackwardFast,
        faBackward,
        faForwardFast,
        faForward
             } from '@fortawesome/free-solid-svg-icons'
import { current } from '@reduxjs/toolkit';

const Pagination = ({currentIndex, setCurrentIndex, lastPage}) => {
    const PREVIUS = -1;
    const NEXT = 1;
    const FIRST = 0;

    const changePage = (number) => {
        let newIndex = currentIndex+number
        if(newIndex>=0 && newIndex<lastPage){
            setCurrentIndex(newIndex)
        }
    }

    const goFirst = () => {
        if(currentIndex !== FIRST){
            setCurrentIndex(FIRST)
        } 
    }

    const goLast = () => {
        if(currentIndex != lastPage-1){
            setCurrentIndex(lastPage-1)
            console.log(currentIndex, lastPage)
        } 
    }
  return (
    <Container>
        <PaginationContainer>
            <div onClick={() => goFirst()}><IconStyledPagination  icon={faBackwardFast} /></div>
            <div onClick={() => changePage(PREVIUS)}><IconStyledPagination  icon={faBackward} /></div>
            <div style={{userSelect:"none"}}>{currentIndex+1}</div>
            <div onClick={() => changePage(NEXT)}><IconStyledPagination  icon={faForward} /></div>
            <div onClick={() => goLast()}><IconStyledPagination  icon={faForwardFast} /></div>
        </PaginationContainer>
    </Container>
    
  )
}

export default Pagination