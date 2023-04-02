import React from 'react'
import TipeRow from './TipeRow'
import { AbilityInfo } from '../styles/style-pokemon-info'

const Abilities = ({abilities}) => {

  return (
    <AbilityInfo>
       {(abilities.length>0 ) ? abilities.map((data) => <TipeRow ability = {data}/>):
        <div>cargando...</div>}
    </AbilityInfo>
  )
}

export default Abilities