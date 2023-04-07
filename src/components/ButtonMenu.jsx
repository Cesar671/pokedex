import React from 'react'
import { ButtonMenuContainer, ButtonIcon, ButtonPartA, ButtonPartB } from '../styles/style-button'
import { useNavigate } from 'react-router-dom'

const ButtonMenu = ({name, icon, url}) => {

  const navigate = useNavigate();

  const redirect = () => {
    navigate(url);
    window.location.reload(true);
  }

  return (
    <ButtonMenuContainer onClick={redirect}>
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