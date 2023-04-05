import React from 'react'
import { SeparateBetweenContainer, ButtonStyled } from '../styles/style-button'
import { SectionContainer, PokeballIcon } from '../styles/style-pokemon-info'
import { useNavigate } from 'react-router-dom'
const BottonsNextPrevius = ({currentIndex}) => {
  const navigate = useNavigate();

  const next = () => {
      reLinkPage(parseInt(currentIndex)+1)
  }

  const reLinkPage = (id) => {
    navigate(`/pokemon/${id}`);
    window.location.reload(true);
  }

  const previus = () => {
    const previusIndex = parseInt(currentIndex)-1;
    if(previusIndex > 0){
      reLinkPage(previusIndex)
    }
  }

  return (
    <SeparateBetweenContainer>
        <div>
          {
            (currentIndex-1 > 0) && <ButtonStyled onClick={previus}>&lt; Previus</ButtonStyled>
          }
          
        </div>
        <SectionContainer style={{padding: "0"}}>
            <PokeballIcon src = "../resources/pokeball.png"/>
                  { "id : #"+currentIndex.toString().padStart(4,"0")}
        </SectionContainer>
        <ButtonStyled onClick={next}>Next &gt;</ButtonStyled>
    </SeparateBetweenContainer>
  )
}

export default BottonsNextPrevius