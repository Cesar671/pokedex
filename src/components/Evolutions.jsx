import React,{ useEffect, useState } from 'react'
import { getEvolutionChain, getSpecies } from '../js/getPokemonData'
import SpriteEvolution from './SpriteEvolution'
import { EvolutionContainer } from '../styles/style-pokemon-info'
import { PokeSprite } from '../styles/style-pokemon-info'
import { getIdPokemonFromUrl } from '../js/sortPokemon'
import { urlSprites } from '../js/Directions'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { NextIcon } from '../styles/style-pokemon-info'
import { urlNotfound } from '../js/Directions'
import Loader from './Loader/Loader'

const Evolutions = ({id}) => {

    const [evolutionData, setEvolutionData] = useState(null)
    const [varieties, setVarieties] = useState(null)
    const onError = (e) => {
        e.target.onError = null;
        e.target.src = urlNotfound;
    }

    const RenderPokemonVarieties = () => {
        if(varieties && varieties.length > 1) {
            return <div>
                <hr />
                <div style={{display:"flex", 
                            padding:"10px", 
                            flexWrap:"wrap", 
                            justifyContent:"center"}}>
                {varieties.map((data, index) => {
                    if(index > 0){
                        const id = getIdPokemonFromUrl(data.pokemon.url)
                        const name = data.pokemon.name
                        const url = urlSprites+id+".png"
                        return (<div style={{display:"flex", 
                                            flexDirection:"column",
                                            alignItems:"center"}}>
                            <NextIcon icon={ faArrowDown }/>
                            <PokeSprite src={url} onError={ onError } />
                            <div>{ name }</div>
                        </div>)
                }})}
            </div>
            </div>
        } 
    }

    useEffect(() => {
        getSpecies(id).then((responseSpecies) => {
            const idEvo = getIdPokemonFromUrl(responseSpecies.evolution_chain.url)
            setVarieties(responseSpecies.varieties)
        getEvolutionChain(idEvo).then((response) => {
                setEvolutionData(response.chain)
            })
        })
    }, [])
    
  return (<>
        {(evolutionData) ? <>
            <h1>Evolution Chain</h1>
            <EvolutionContainer>
                <SpriteEvolution data = {evolutionData}/>
            </EvolutionContainer>
        </>
        : 
            <Loader />}
        <RenderPokemonVarieties />
    </>
  )
}

export default Evolutions