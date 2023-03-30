import React, { useEffect, useState } from 'react'
import { Main } from '../styles/style-card-section'
import { Section, HeaderTittle, PokedexImg } from '../styles/style-section'
import Card from '../components/Card'

const CardSection = ({pokemon}) => {


  return (<Section>  
  <HeaderTittle>
    <PokedexImg src='resources/pokedex.png'/>
    <h1>
      Kanto
    </h1>
  </HeaderTittle>
  <Main>
      {(pokemon) && pokemon.map((data) => 
      <Card data = {data} />)}
  </Main>

  </Section>)
}

export default CardSection