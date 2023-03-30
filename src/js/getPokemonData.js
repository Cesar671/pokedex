import axios from "axios";

export const getDataByUrl = async (id) => {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const data = await axios.get(url+id)

    return data
}

export const getDataByGeneration = async (generation) => {
    const url = " https://pokeapi.co/api/v2/generation/"
    const data = await axios.get(url+generation)
    return data
}
