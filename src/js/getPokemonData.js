import axios from "axios";

export const getDataByUrl = async (id) => {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const data = await axios.get(url+id)

    return data.data
}

export const getDataByGeneration = async (generation) => {
    const url = " https://pokeapi.co/api/v2/generation/"
    const data = await axios.get(url+generation)
    return data.data
}

export const getTypeByUrl = async (id) => {
    const url = "https://pokeapi.co/api/v2/type/"
    const data = await axios.get(url+id);

    return data.data
}

export const getAbility = async (abilityId) => {
    const url = "https://pokeapi.co/api/v2/ability/"
    const data = await axios.get(url+abilityId)

    return data.data
}

export const getAbilities = async (list = []) => {
    const response = [];
    await list.map((ability) => {
        const urlSliced = ability.ability.url.split("/")
        const id = urlSliced[urlSliced.length-2]
        getAbility(id).then((responseData) => {
            response.push(responseData)
        })

    })

    return response;
}

export const getEvolutionChain = async (id) => {
    const url = "https://pokeapi.co/api/v2/evolution-chain/"
    const data = await axios.get(url+id)
    return data.data
}

export const getSpecies = async (id) => {
    const url = "https://pokeapi.co/api/v2/pokemon-species/"
    const data = await axios.get(url+id)
    return data.data
}