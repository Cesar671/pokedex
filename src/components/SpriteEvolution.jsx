import React, { useEffect, useState } from 'react'
import { getDataByUrl } from '../js/getPokemonData'
import { PokeSprite } from '../styles/style-pokemon-info'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NextIcon } from '../styles/style-pokemon-info'
import { useNavigate } from 'react-router-dom'
import { urlSprites } from '../js/Directions'

const SpriteEvolution = ({data}) => {
    const [name, setName] = useState("")
    const [sprite, setSprite] = useState(null)
    const [id, setId] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setName(data.species.name)
        const urlSplited = data.species.url.split("/");
        const idPokemon = urlSplited[urlSplited.length-2]
        setId(idPokemon)
        setSprite(`${urlSprites+idPokemon}.png`)
    }, [])
  return (<>
        <div style={{display: "flex", 
                    alignItems: "center", 
                    flexDirection:"column",
                    justifyContent:"center",
                    padding:"0px"}}>
            <div onClick={ () => {navigate(`/pokemon/${id}`);window.location.reload(true)} }>
                {(sprite) && <PokeSprite src={sprite}/> }
            </div>
            <div>{ name }</div>
        </div>
        {(data.evolves_to.length > 0) && 
        <div style={{ display:"flex" ,
                        alignItems: "center", 
                        flexDirection:"column",
                        justifyContent:"center"}}>
            {data.evolves_to.map((dataRes) => 
        
            <div style={{display: "flex", alignItems: "center"}}>
                <NextIcon icon={faArrowRight}/>
                <SpriteEvolution data={dataRes}/>
            </div>
        )}</div>}
    </>)
}

export default SpriteEvolution