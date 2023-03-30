import React,{useState, useEffect} from 'react'
import { TypeStyled } from '../styles/style-tipo'

const Tipo = ({name}) => {

    const [tipoUrl, setTipoUrl] = useState(null)

    useEffect(() => {
        setTipoUrl(`resources/tipos/${name}.png`)
    }, [])
    

  return (<>
    {tipoUrl && <TypeStyled src={tipoUrl}/>}
  </>)
}

export default Tipo