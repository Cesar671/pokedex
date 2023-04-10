const filterFunction = (filter, filterObject, currentFilter) => {
    const dataFilter =  JSON.parse(JSON.stringify(filterObject))
    const tam = dataFilter.length
    for (let index = 0; index < tam; index++) {
      const generation = dataFilter[index]
      const pokemons = generation.url.pokemon_species;
      const pokemonFiltered = pokemons.filter((pok) => pok.name.includes(filter.search))
      generation.url.pokemon_species = pokemonFiltered
    }
    currentFilter(dataFilter)
  }