import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON = 'pokemon/'

const getInitialState = async () => {
    const state = {
        data : [],
        next : "",
    }
    const data = await axios.get(API_URL+POKEMON)

    state.data = data.data.results
    state.next = data.data.next

    return state
}

export const pokemonSlice = createSlice({
    name : 'pokemon',
    initialState: getInitialState(),
    reducers: {
        getPokemons: async (state, action) => {
            const response = await axios.get(API_URL+POKEMON)
            state.data = response.data.results
            state.next = response.data.next
            return state;
        }
    }
})

export const { getPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer; 