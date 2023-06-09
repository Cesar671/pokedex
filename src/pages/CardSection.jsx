import React, { useState, useEffect } from 'react'
import { Main } from '../styles/style-card-section'
import { Section, HeaderTittle, PokedexImg } from '../styles/style-section'
import Card from '../components/Card'


const CardSection = ({pokemon, region }) => {
  const [pokemones, setPokemon] = useState(null)
  useEffect(() => {
    setPokemon(pokemon)
  }, [ pokemon])
  

  return (<Section>  
  <HeaderTittle>
    <PokedexImg src='../resources/pokedex.png'/>
    <h1>
      {region}
    </h1>
  </HeaderTittle>
  <Main>
      {(pokemones) ? pokemones.map((data) => 
      <Card data = {data} />):<div></div>}
  </Main>

  </Section>)
}

export default CardSection