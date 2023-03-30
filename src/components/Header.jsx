import React from 'react'
import { HeaderContainerStyle, LogoHeaderStyled } from '../styles/style-header'
import { BackgroundGradient } from '../styles/style-background'
const Header = () => {
  return (
    <HeaderContainerStyle>
        <LogoHeaderStyled src = 'resources/Logo.png'/>
        <BackgroundGradient />
    </HeaderContainerStyle>
  )
}

export default Header