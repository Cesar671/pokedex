import React from 'react'
import { DamageSection, InternalContainer, LableContainer } from '../styles/style-details-pokemon'
import TypeInfoDamage from './TypeInfoDamage'
const DamageSectionComponent = ({data, label}) => {
  return (<>
    {(data.length > 0) && <>
        <DamageSection>
            <LableContainer>
               {label} 
            </LableContainer> 
            <InternalContainer>
                {data.map((dat) => <TypeInfoDamage data = {dat}/>)}
            </InternalContainer>
    </DamageSection>
    <hr />
    </>}
    
  </>
    
  )
}

export default DamageSectionComponent