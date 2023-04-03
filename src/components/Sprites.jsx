import React,{ useEffect } from 'react'
import Sprite from './Sprite'
import { DetailsSprites } from '../styles/style-details-pokemon'

const Sprites = ({sprites}) => {
    useEffect(() => {
        console.log(sprites)
    }, [])
    
  return (<>
        <DetailsSprites> 
            <Sprite sprite={ sprites.front_default } name = { "front default" }/>
            <Sprite sprite={ sprites.back_default } name = { "back default" }/>
            <Sprite sprite={ sprites.front_female } name = { "front female" }/>
            <Sprite sprite={ sprites.back_female } name = { "back female" }/>
            <Sprite sprite={ sprites.front_shiny } name = { "front shiny" }/>
            <Sprite sprite={ sprites.back_shiny } name = { "back shiny" }/>
            <Sprite sprite={ sprites.front_shiny_female } name = { "front shiny female" }/>
            <Sprite sprite={ sprites.back_shiny_female } name = { "back shiny female" }/>
        </DetailsSprites>
  </>)
}

export default Sprites