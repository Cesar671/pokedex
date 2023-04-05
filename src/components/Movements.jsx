import React, { useEffect, useState } from 'react'
import MovementRow from './MovementRow'
import { sortListMovements, slicePokemonArray } from '../js/sortPokemon'
import Pagination from './Pagination'

const Movements = ({movements}) => {
  const [currentMovements, setCurrentMovements] = useState(null)
  const [movementsList, setMovements] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)


  const Rows = () => (<>
        {(currentMovements) ? <>
          {(currentMovements.map((move) => <MovementRow  movement={move.move} />))}
          <Pagination currentIndex = {currentIndex}
                setCurrentIndex = {setCurrentIndex}
                lastPage = {movementsList.length} />
        </>
          
          : <div>...cargando</div>}
    </>)
  
//Force Render
  const renderRows = () => {
    if(currentIndex%2 == 0){
      return <Rows /> 
    } else {
      return <Rows />
    }
  }
  useEffect(() => {
    sortListMovements(movements)
    const ListMovements = slicePokemonArray(movements, 10)
    setMovements(ListMovements)
  },[])

  useEffect(() => {
    setCurrentMovements(movementsList[currentIndex]);
  },[movementsList, currentIndex]);

  return (
        renderRows()
  )
}

export default Movements