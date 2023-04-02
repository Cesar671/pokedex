import React, { useEffect, useState } from 'react'
import { SpriteTypeMovement, MovementContainerStyle, NameMovementContainer } from '../styles/style-movents'
import { getMovementData } from '../js/getPokemonData'

const MovementRow = ({movement}) => {
    const [move, setMovement] = useState(null)
    const route = "../resources/tipos/"
    useEffect(() => {
      const urlSplited = movement.url.split("/")
      const idType = urlSplited[urlSplited.length-2]
      getMovementData(idType).then((result) => {
        setMovement(result)
      })
    }, [])
    
  return (
    <>{(move) && <>
      <MovementContainerStyle>
        <NameMovementContainer>
          <SpriteTypeMovement src={ `${route+move.type.name}.png` } />
          <div>{ movement.name }</div>:
        </NameMovementContainer>
        
        <p>{(move.effect_entries.length>0) && move.effect_entries[0].effect}</p>
    </MovementContainerStyle>
    <hr style={{width:"95%"}}/>
    </>}
    
    </>)
}

export default MovementRow