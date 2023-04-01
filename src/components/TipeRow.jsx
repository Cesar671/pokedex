import React, { useState, useEffect } from 'react'
import { getAbility } from '../js/getPokemonData'
import { SectionContainerData } from '../styles/style-pokemon-info'

const TipeRow = ({ability}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const urlSliced = ability.ability.url.split("/")
        const id = urlSliced[urlSliced.length-2]
        getAbility(id).then((response) => {
            setData(response)
        })
    }, [])
    
  return (<>
        {(data) && <SectionContainerData>
            <div style={{display:"flex", alignItems:'center'}}>
                {data.name}
            </div>
            <p>
                {(data.effect_entries.length > 0) ? 
                data.effect_entries[1].effect:
                "---No Description"}
            </p>
        </SectionContainerData>}
    </>
  )
}

export default TipeRow