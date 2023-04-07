import React,{useState, useEffect} from 'react'
import { TypeStyled } from '../styles/style-tipo'
import { urlResourcesTyps } from '../js/Directions'

const Tipo = ({name}) => {

    const [tipoUrl, setTipoUrl] = useState(null)

    useEffect(() => {
        setTipoUrl(`${urlResourcesTyps+name}.png`)
    }, [])
    

  return (<>
    {tipoUrl && <TypeStyled src={tipoUrl}/>}
  </>)
}

export default Tipo