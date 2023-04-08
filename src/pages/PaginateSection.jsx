import React,{useState, useEffect} from 'react'
import CardSection from './CardSection';
import { getDataByGeneration } from '../js/getPokemonData';
import { sortListPokemon, slicePokemonArray } from '../js/sortPokemon';
import Pagination from '../components/Pagination';

 const PaginateSection = ({generation}) => {
    const [PokemonList, setPokemonList] = useState([])
    const [pokemons, setPokemons] = useState(null)
    const [region, setRegion] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const RenderSection = (props) => {
        if(currentIndex >= 0){
            return <CardSection pokemon = {props.pokemon} region = {props.region}/>
        }
    }

    useEffect(() => {
        setRegion(generation.url.main_region.name)
        const ordered = sortListPokemon(generation.url.pokemon_species)
        const sliced = slicePokemonArray(ordered, 20)
        setPokemonList(sliced)
    }, [])

    useEffect(() => {
        setPokemons(PokemonList[currentIndex])
    }, [currentIndex, PokemonList])
    

    return (<>
        {(pokemons) && <>
            <RenderSection pokemon={pokemons} 
                        region={ region }
                        />
            <Pagination currentIndex = {currentIndex}
                    setCurrentIndex = {setCurrentIndex}
                    lastPage = {PokemonList.length}
        />
        </>}

    </>)
}

export default PaginateSection