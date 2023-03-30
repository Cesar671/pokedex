import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

//Reducers
import pokemonsReducer from '../reducers/pokemon'
import pokeReducer from '../reducers/getPokemon'



export default configureStore({
    reducer: {
        pokemon: pokemonsReducer,
        poke: pokeReducer,
        middleware: [thunk]
    }
})