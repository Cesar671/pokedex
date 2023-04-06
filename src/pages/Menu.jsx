import React from 'react'
import { Link } from 'react-router-dom'
import { Menucontainer, ButtonContainer, ImgContainerLogo } from '../styles/style-menu'
import { urlPokeball } from '../js/Directions'
const Menu = () => {
  return (<Menucontainer>
    <div>Pokemon</div>
    <ImgContainerLogo src={urlPokeball}/>
    <ul>
        <li>
            <ButtonContainer>
                Pokedex
            </ButtonContainer>
        </li>
        <li>
            <ButtonContainer>
                Otra funcion
            </ButtonContainer>
        </li>
    </ul>
  </Menucontainer>
    
  )
}

export default Menu