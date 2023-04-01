import React,{useEffect, useState} from 'react'
import { CardStyled, 
        DivIdStyled, 
        DivHeaderCard,
        NameCardStyled,
        ImageStyledCard,
        DivNameContainer } from '../styles/style-card'
import { getDataByUrl } from '../js/getPokemonData'
import Tipo from './Tipo'
import { TypeContainer } from '../styles/style-tipo'

const Card = ({data}) => {

  const [dataPokemon, setDataPokemon] = useState(null)
  const [idPokemon, setIdPokemon] = useState(null)

  useEffect(() => {
    const url = data.url
    const urlSplited = url.split("/")
    const id = urlSplited[urlSplited.length-2]
    setIdPokemon(id);
    getDataByUrl(id).then( response => {
      setDataPokemon(response)
    })
  },[])
  
  return (<>{(dataPokemon) && 
  <CardStyled href={(idPokemon) ? `/pokemon/${idPokemon}`: "#" }>
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