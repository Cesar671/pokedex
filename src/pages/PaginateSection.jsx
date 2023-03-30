import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import CardSection from './CardSection';

 const PaginateSection = () => {
    const data = useSelector(state => state.pokemon);
    const [pokemons, setPokemons] = useState([])
    const [next, setNext] = useState("")

    useEffect(() => {
        data.then(response => {
            setPokemons(response.data)
            setNext(response.next)
        })
        
    }, [data, pokemons. next])

    return (<>
        {(pokemons.length > 0) && <CardSection pokemon={pokemons}/>}
        <div>
            pagina 1
        </div>
    </>)
}

export default PaginateSection