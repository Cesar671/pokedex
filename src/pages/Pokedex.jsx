import React,{ useEffect, useState, createContext } from 'react'
import Searcher from '../components/filter/searcher'
import { getAllData } from '../js/getPokemonData';

export const FilterPokemonCtx = createContext();

const Pokedex = ({Section}) => {
  const filter = {search:"", 
                filterType:[], 
                filterGeneratio:[],
                filterMega:false,
                filterLegend:false,
                filterMythic:false,}

  const [currentData, setCurrentData] = useState({search:"", 
                                    filterType:[], 
                                    filterGeneratio:[],
                                    filterMega:false,
                                    filterLegend:false,
                                    filterMythic:false,})

  const [generations, setGenerations] = useState(null)

  useEffect(() => {
    async function fetchData(){
      setGenerations(await getAllData())
    }
    fetchData();
  },[])

  return (<>
    {generations && <main style={{ marginTop: "100px" }}>
        <Searcher filter = { filter } setState= { setCurrentData }/>
        <FilterPokemonCtx.Provider value={ currentData }>
          {
            generations.map((data) => <Section generation = { data }/>)
          }
        </FilterPokemonCtx.Provider>
    </main>}
  </>
    
  )
}

export default Pokedex