import React from 'react'
import { ButtonMenuContainer, ButtonIcon, ButtonPartA, ButtonPartB } from '../styles/style-button'

const ButtonMenu = ({name, icon, func}) => {
  return (
    <ButtonMenuContainer onClick={func}>
        <ButtonPartA className='buttonMenuA'>
            <ButtonIcon src={icon}/>
        </ButtonPartA>
        <ButtonPartB className='buttonMenu'>
            {name}
        </ButtonPartB>
    </ButtonMenuContainer>
  )
}

export default ButtonMenu