import React, { useEffect, useState } from 'react'
import { SpriteTypeMovement } from '../styles/style-movents'
import { WeaknessType } from '../styles/style-details-pokemon'
import { urlResourcesTyps } from '../js/Directions'
import { DATA_DMG } from '../js/TypesColors'

const TypeInfoDamage = ({data}) => {
    const [dataType, setData] = useState(null)

    useEffect(() => {
        const aux = DATA_DMG(data[1]);
        setData(aux)
    }, [])
  return (<>{(dataType) && 
  <WeaknessType color={ data[0] }>
        <SpriteTypeMovement src={ `${urlResourcesTyps}${data[0]}.png` } />
        <label> { `${data[0]}  X${data[1]}` }</label>
  </WeaknessType>}</>
  )
}

export default TypeInfoDamage