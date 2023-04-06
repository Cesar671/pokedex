export const sortListPokemon = (pokeList = []) => {
    const ordered = pokeList.sort((a , b) => {
        const pokeurl1 = a.url.split("/")
        const id1 = parseInt(pokeurl1[pokeurl1.length-2])
        
        const pokeurl2 = b.url.split("/")
        const id2 = parseInt(pokeurl2[pokeurl2.length-2])

        if(id1>id2){
            return 1;
        } 
        if (id1<id2){
            return -1;
        }
        return 0;
    })
    return ordered
}

export const slicePokemonArray = (pokeList = [], quantity) => {
    const slicedList = []
    for (let index = 0; index < pokeList.length; index=index+quantity) {
        if(index+quantity>pokeList.length){
            slicedList.push(pokeList.slice(index, pokeList.length))
        } else {
            slicedList.push(pokeList.slice(index, index+quantity))
        }
    }
    return slicedList
}

export const sortListMovements = (listMovement = []) => {
    const ordered = listMovement.sort((a, b) => {
        const nameA = a.move.name
        const nameB = b.move.name
        if(nameA>nameB){
            return 1
        }
        if(nameA<nameB){
            return -1
        }
        return 0
    })
    return ordered
}

export const getIdPokemonFromUrl = (url) => {
    const dataSplited = url.split("/")
    return dataSplited[dataSplited.length-2]
}