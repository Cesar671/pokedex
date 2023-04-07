import React from 'react'
import { LogoImg } from '../styles/style-menu'
import { urlLogo } from '../js/Directions'
const LogoButton = () => {
  return (
    <a href='/'><LogoImg src={ urlLogo }/></a>
  )
}

export default LogoButton