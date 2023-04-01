import React from 'react'
import { HeaderContainerStyle, LogoHeaderStyled } from '../styles/style-header'
const Header = () => {
  return (
    <HeaderContainerStyle>
        <LogoHeaderStyled src = '../resources/Logo.png'/>
    </HeaderContainerStyle>
  )
}

export default Header