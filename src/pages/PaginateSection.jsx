import React,{useState, useEffect} from 'react'
import CardSection from './CardSection';
import { getDataByGeneration } from '../js/getPokemonData';
import { sortListPokemon, slicePokemonArray } from '../js/sortPokemon';
import Pagination from '../components/Pagination';
import { BackgroundGradient } from '../styles/style-background';

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
        getDataByGeneration(parseInt(generation)).then( result => {
            const ordered = sortListPokemon(result.data.pokemon_species)
            const sliced = slicePokemonArray(ordered)
            setRegion(result.data.main_region.name)
            setPokemonList(sliced)
        })
    }, [])

    useEffect(() => {
        setPokemons(PokemonList[currentIndex])
    }, [currentIndex, PokemonList])
    

    return (<>
        {(pokemons) && <>
            <BackgroundGradient />
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