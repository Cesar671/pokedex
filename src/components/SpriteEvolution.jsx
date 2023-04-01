import React, { useEffect, useState } from 'react'
import { getDataByUrl } from '../js/getPokemonData'
import { PokeSprite } from '../styles/style-pokemon-info'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NextIcon } from '../styles/style-pokemon-info'

const SpriteEvolution = ({data}) => {
    const [name, setName] = useState("")
    const [sprite, setSprite] = useState("")
    const [id, setId] = useState(null)
    useEffect(() => {
        setName(data.species.name)
        const urlSplited = data.species.url.split("/");
        const idPokemon = urlSplited[urlSplited.length-2]
        setId(idPokemon)
        getDataByUrl(idPokemon).then((response) => {
            setSprite(response.sprites.front_default)
        })
    }, [])
  return (<>
        <div style={{display: "flex", 
                    alignItems: "center", 
                    flexDirection:"column"}}>
            <a href={`/Pokemon/${ id }`}><PokeSprite src={sprite}/> </a>
            <div>{ name }</div>
        </div>
        {(data.evolves_to.length > 0) && 
            <div style={{display: "flex", alignItems: "center"}}>
                <NextIcon icon={faArrowRight}/>
                <SpriteEvolution data={data.evolves_to[0]}/>
            </div>}
    </>)
}

export default SpriteEvolution