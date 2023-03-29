import React from 'react'
import { CardStyled, 
        DivIdStyled, 
        DivHeaderCard,
        NameCardStyled,
        ImageStyledCard,
        DivNameContainer } from '../styles/style-card'

const Card = () => {
  return (<CardStyled>
    <DivHeaderCard>
        <DivIdStyled>
            1000
        </DivIdStyled>
    </DivHeaderCard>
        
    <ImageStyledCard src='resources/alakazam.png'/>
    <DivNameContainer>
        <NameCardStyled>
            Alakazam
        </NameCardStyled>
    </DivNameContainer>
  </CardStyled>)
}

export default Card