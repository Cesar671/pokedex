import React, { useEffect, useState } from 'react'
import MovementRow from './MovementRow'
import { sortListMovements, slicePokemonArray } from '../js/sortPokemon'
import Pagination from './Pagination'

const Movements = ({movements}) => {
  const [movementsList, setMovements] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    sortListMovements(movements)
    const ListMovements = slicePokemonArray(movements, 10)
    setMovements(ListMovements)
  },[])
  return (
        <>
            {(movementsList) ? <>
              {(movementsList[currentIndex].map((move) => <MovementRow  movement={move.move} />))}
              <Pagination currentIndex = {currentIndex}
                    setCurrentIndex = {setCurrentIndex}
                    lastPage = {movementsList.length} />
            </>
              
              : <div>...cargando</div>}
        </>
  )
}

export default Movements