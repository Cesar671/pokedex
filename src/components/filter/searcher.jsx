import React, { useEffect, useRef } from 'react'
import { SearcherContainer, InputSearcher } from '../../styles/style-fiilter'
import { ButtonStyled } from '../../styles/style-button'
import { IconSearcher } from '../../styles/style-fiilter'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Searcher = ({ filter, setState }) => {
    const inputRef = useRef()
    const handlerInput = () => {
        filter.search = inputRef.current.value
    }

    const handlerFilterButton = () => {
        setState(filter)
    }

  return (
  <SearcherContainer>
    <InputSearcher ref={ inputRef } 
                    onChange={ handlerInput } 
                    placeholder='Seach Pokemon By Id or Name'/>
    <ButtonStyled onClick={handlerFilterButton}>
        <IconSearcher icon={ faSearch }/> Search 
    </ButtonStyled>
  </SearcherContainer>
  )
}

export default Searcher