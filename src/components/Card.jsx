import React,{useEffect, useState} from 'react'
import { CardStyled, 
        DivIdStyled, 
        DivHeaderCard,
        NameCardStyled,
        ImageStyledCard,
        DivNameContainer } from '../styles/style-card'
import Tipo from './Tipo'
import { TypeContainer } from '../styles/style-tipo'
import { useNavigate } from 'react-router-dom'
import { urlPokemonData } from '../js/Directions'

const Card = ({data}) => {

  const [dataPokemon, setDataPokemon] = useState(null)
  const [idPokemon, setIdPokemon] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setIdPokemon(data.id)
    setDataPokemon(data)
  },[])
  
  return (<>{(dataPokemon) && 
  <CardStyled onClick={ () => {navigate(`${urlPokemonData+idPokemon}`);window.location.reload(true)} }>
    <DivHeaderCard>
        <DivIdStyled>
            {"#"+dataPokemon.id.toString().padStart(4,'0')}
        </DivIdStyled>
        <TypeContainer>
          {
            dataPokemon.types.map( type => <Tipo name = {type.type.name}/>)
          }
          
        </TypeContainer>
    </DivHeaderCard>
        
    <ImageStyledCard src={dataPokemon.sprites.front_default}/>
    <DivNameContainer>
        <NameCardStyled>
            {dataPokemon.name}
        </NameCardStyled>
    </DivNameContainer>
  </CardStyled>}</>)
}

export default Card