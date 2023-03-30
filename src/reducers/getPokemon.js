import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: {}
}


export const pokemonSlice = createSlice({
    name : 'pokemon',
    initialState: initialState,
    reducers: {
       getPokemonByUrl: async (state, action) => {
            const response = await axios.get(action.payload)
            const data = response.data
            state.data = data
       }
    }
})

export const { getPokemonByUrl } = pokemonSlice.actions;

export default pokemonSlice.reducer; 