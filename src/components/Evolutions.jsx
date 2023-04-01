import React,{ useEffect, useState } from 'react'
import { getEvolutionChain, getSpecies } from '../js/getPokemonData'
import SpriteEvolution from './SpriteEvolution'
import { EvolutionContainer } from '../styles/style-pokemon-info'

const Evolutions = ({id}) => {

    const [evolutionData, setEvolutionData] = useState(null)

    useEffect(() => {
        getSpecies(id).then((responseSpecies) => {
            const dataSplited = responseSpecies.evolution_chain.url.split("/")
            const idEvo = dataSplited[dataSplited.length-2]
            getEvolutionChain(idEvo).then((response) => {
                setEvolutionData(response.chain)
            })
        })
    }, [])
    
  return (<>
    {(evolutionData) ? 
    <EvolutionContainer>
        <SpriteEvolution data = {evolutionData}/>
    </EvolutionContainer>: 
        <div>...cargando</div>}
    </>
  )
}

export default Evolutions