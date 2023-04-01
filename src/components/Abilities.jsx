import React, { useEffect, useState } from 'react'
import { SectionContainer } from '../styles/style-pokemon-info'
import { getAbility } from '../js/getPokemonData'
import TipeRow from './TipeRow'
import { AbilityInfo } from '../styles/style-pokemon-info'

const Abilities = ({abilities}) => {

  return (
    <AbilityInfo>
        <h1>Abilities</h1>
       {(abilities.length>0 ) ? abilities.map((data) => <TipeRow ability = {data}/>):
        <div>cargando...</div>}
    </AbilityInfo>
  )
}

export default Abilities