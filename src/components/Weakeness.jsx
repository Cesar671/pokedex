import React,{useState, useEffect} from 'react'
import { getDataType } from '../js/Types';

const Weakeness = ({ types }) => {

    const [data, setData] = useState(null)
    useEffect(() => {
        const result = getDataType(types.map(res => res.type.name))
        result.from.sort((a, b) => {
            const p1 = a[1]
            const p2 = b[1]
            if (p1>p2){
                return 1
            }
            if(p1<p2){
                return -1
            }
            return 0
        })
        console.log(result)
        setData(result)
    }, [])
    
  return (
   
    <>
        <div>Weakeness</div>
        <div>
            {data && data.from.map((dat) => <div>{`${dat[0]}  X${dat[1]}`}</div>)}
        </div>
    </>
  )
}

export default Weakeness