import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { PokeSprite, 
    ContainerInfo, 
    SectionContainer,
    SectionSections,
    GridHeader,
    PokeballIcon } from '../styles/style-pokemon-info';
import { getDataByUrl, getAbilities, getAbility } from '../js/getPokemonData';
import TypeDetail from '../components/TypeDetail';
import Abilities from '../components/Abilities';
import Evolutions from '../components/Evolutions';
import Movements from '../components/Movements';

const Pokemon = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
      getDataByUrl(id).then(result => {
        setPokemonData(result)
        console.log(result)
      })
    }, [])
    
  return (<>
      <ContainerInfo>
        {(pokemonData) ? (<>
            <GridHeader>
              <SectionSections>
                <SectionContainer>
                  <PokeballIcon src = "../resources/pokeball.png"/>
                  { "id : #"+id.toString().padStart(4,"0")}
                </SectionContainer>
                <SectionContainer> 
                  {
                    pokemonData.types.map((data) => <>
                        <TypeDetail name={ data.type.name }/>
                    </>)
                  }
                </SectionContainer>
                <SectionContainer></SectionContainer>
              </SectionSections>
              <SectionContainer style={{flexDirection: "column"}}>
                  {pokemonData.name}
                  <PokeSprite src={ pokemonData.sprites.front_default } />
              </SectionContainer>
            </GridHeader>
            <h1> Evolution Chain </h1>
            <Evolutions id = { id }/>
            <Abilities abilities={pokemonData.abilities}/>
            <Movements movements = { pokemonData.moves } />
            <SectionContainer>
              Debilidades
            </SectionContainer>
            <SectionContainer>
              Sprites
            </SectionContainer>
            </>): <div>Cargando...</div>}
        </ContainerInfo>
    
  </>
    
  )
}

export default Pokemon