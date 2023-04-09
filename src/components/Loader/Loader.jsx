import React, { useEffect, useState } from 'react'
import {urlPokeball} from '../../js/Directions'
import { LoaderContainer, ImageLoader } from '../../styles/style-loader'

const Loader = () => {
    const [rotation, setRotation] = useState(0)
    useEffect( () => {
        setInterval(() => {
            setRotation(400)
            setTimeout(() => setRotation(0), 500)
        },1500)
    })

  return (
    <LoaderContainer>
        <ImageLoader src={urlPokeball} rotate = { rotation }/>
        <div>...cargando</div>
    </LoaderContainer>
  )
}

export default Loader