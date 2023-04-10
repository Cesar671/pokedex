import React, { useEffect, useState } from 'react'
import {urlPokeball} from '../../js/Directions'
import { LoaderContainer, ImageLoader } from '../../styles/style-loader'

const Loader = () => {

  return (
    <LoaderContainer>
        <ImageLoader src={urlPokeball}/>
        <div>...cargando</div>
    </LoaderContainer>
  )
}

export default Loader