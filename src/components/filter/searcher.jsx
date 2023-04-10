import React, { useState, useRef } from 'react'
import { SearcherContainer, InputSearcher } from '../../styles/style-fiilter'
import { ButtonStyled } from '../../styles/style-button'
import { IconSearcher } from '../../styles/style-fiilter'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Searcher = ({ filter, filterFunction }) => {
  const [search, setSearch] = useState(false)
    const inputRef = useRef()
    const handlerInput = () => {
        filter.search = inputRef.current.value
    }

    const handlerFilterButton =  () => {
        setSearch(true)
        setTimeout( () =>{
          filterFunction()
          setSearch(false)
        }, 0)
    }

  return (
  <SearcherContainer>
    <InputSearcher ref={ inputRef } 
                    onChange={ handlerInput } 
                    placeholder='Seach Pokemon By Id or Name'/>
    <ButtonStyled onClick={handlerFilterButton}>
        <IconSearcher icon={ faSearch }/> Search 
    </ButtonStyled>
    {(search) && <div>... Searching</div>}
  </SearcherContainer>
  )
}

export default Searcher