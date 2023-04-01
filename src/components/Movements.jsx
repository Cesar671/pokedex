import React,{ useEffect } from 'react'
import MovementRow from './MovementRow'

const Movements = ({movements}) => {

    useEffect(() => {
      console.log(movements)
    }, [])
    
  return (
        <>
            <h1>Movements</h1>
            {(movements.map((move) => <MovementRow  movement={move.move} />))}
        </>
  )
}

export default Movements