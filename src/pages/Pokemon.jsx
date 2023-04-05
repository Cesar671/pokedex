import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { PokeSprite, 
    ContainerInfo, 
    SectionContainer,
    SectionSections,
    GridHeader } from '../styles/style-pokemon-info';
import { getDataByUrl } from '../js/getPokemonData';
import TypeDetail from '../components/TypeDetail';
import Abilities from '../components/Abilities';
import Evolutions from '../components/Evolutions';
import Movements from '../components/Movements';
import Desplegable from '../components/Desplegable';
import Sprites from '../components/Sprites';
import Weakeness from '../components/Weakeness';
import BottonsNextPrevius from '../components/BottonsNextPrevius';

const Pokemon = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
      getDataByUrl(id).then(result => {
        setPokemonData(result)
      })
    }, [])
    
  return (<>
      <ContainerInfo>
        {(pokemonData) ? (<>
            <BottonsNextPrevius currentIndex={ id } />
            <GridHeader>
              <SectionSections>
                <SectionContainer> 
                  {
                    pokemonData.types.map((data) => <>
                        <TypeDetail name={ data.type.name }/>
                    </>)
                  }
                </SectionContainer>
              </SectionSections>
              <SectionContainer style={{flexDirection: "column"}}>
                  {pokemonData.name}
                  <PokeSprite src={ 
                    (pokemonData.sprites.front_default) ?  
                      (pokemonData.sprites.front_default):
                        "../resources/notFound.png"
                    } />
              </SectionContainer>
            </GridHeader>
            <Evolutions id = { id }/>
            <Weakeness types={ pokemonData.types }/>
            { (pokemonData.abilities.length > 0) && 
            <Desplegable name = "Abilities" Data = {() => 
              <Abilities abilities={pokemonData.abilities}/>} />}
            { (pokemonData.moves.length > 0) &&  
            <Desplegable name = "Movements" Data = {() => 
                <Movements movements = { pokemonData.moves }/>} />}
            <Desplegable name = "Images" Data = { () => <Sprites sprites={ pokemonData.sprites } /> }/>
            </>): <div>Cargando...</div>}
        </ContainerInfo>
    
  </>
    
  )
}

export default Pokemon