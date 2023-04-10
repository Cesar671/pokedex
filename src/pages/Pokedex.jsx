import React,{ useEffect, useState } from 'react'
import Searcher from '../components/filter/searcher'
import { getAllData } from '../js/getPokemonData';
import Loader from '../components/Loader/Loader';

const filterFunction = (filter, filterObject, currentFilter) => {
  const _ = require('lodash')
  const dataFilter = _.cloneDeep(filterObject)
  
  const FilteredData = dataFilter.map((generation) => ({
    ...generation,
    url: {
      ...generation.url,
      pokemon_species: generation.url.pokemon_species.reduce((acc, pok) => {
        if(pok.name.includes(filter.search) || pok.id == parseInt(filter.search, 10).toString()){
          return [...acc, pok]
        }
        return acc
      },[])
    }
  }))
  
  //
  /*const tam = dataFilter.length
  for (let index = 0; index < tam; index++) {
    const generation = dataFilter[index]
    const pokemons = generation.url.pokemon_species;
    const pokemonFiltered = pokemons.filter((pok) => pok.name.includes(filter.search))
    generation.url.pokemon_species = pokemonFiltered
  }*/
  currentFilter(FilteredData)
}


const Pokedex = ({Section}) => {
  const filter = {search:"", 
                filterType:[], 
                filterGeneratio:[],
                filterMega:false,
                filterLegend:false,
                filterMythic:false,}

  const [generations, setGenerations] = useState(null)

  const [currentGeneration, setCurrentGeneration] = useState(null)

  const ForceRender = () => {
    if(currentGeneration%2 == 0){
      return currentGeneration.map((data) => <Section generation = { data }/>)
    } else {
      return currentGeneration.map((data) => <Section generation = { data }/>)
    }
  }

  useEffect(() => {
    async function fetchData(){
      setGenerations(await getAllData())
    }
    fetchData();
  },[])

  useEffect(() =>{
    const deepCopyGenerations = JSON.parse(JSON.stringify(generations));
    setCurrentGeneration(deepCopyGenerations)
  },[generations])

  return (<>
    {currentGeneration ? <main style={{ marginTop: "100px" }}>
        <Searcher filter = { filter } 
                filterFunction = { () => filterFunction(filter, generations, setCurrentGeneration) } />
        <ForceRender />
    </main>:<div style={{height:"100%"}}><Loader /></div>}
  </>
    
  )
}

export default Pokedex