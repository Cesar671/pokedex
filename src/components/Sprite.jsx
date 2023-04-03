import React from 'react'
import { PokeSprite } from '../styles/style-pokemon-info'
import { SpriteInfo } from '../styles/style-details-pokemon'
const Sprite = ({sprite, name}) => {
  return (<>
    { (sprite) &&
    <SpriteInfo>
          <PokeSprite src={ sprite }/>
          <div>{ name }</div>
    </SpriteInfo>}
  </>
  )
}

export default Sprite