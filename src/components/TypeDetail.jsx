import React from 'react'
import { TypeStyledDetails, TypeStyledContainer } from '../styles/style-pokemon-info'

const TypeDetail = ({name}) => {

    const direction = "../resources/tipos/"

  return (
    <TypeStyledContainer>
        <div>
            <TypeStyledDetails src= {`${direction+name}.png`}/>
        </div> 
        <div>
            {name}
        </div>
    </TypeStyledContainer>
  )
}

export default TypeDetail