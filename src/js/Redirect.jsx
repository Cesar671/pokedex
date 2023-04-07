import React,{ useEffect } from 'react'
import { useNavigate } from "react-router-dom"


const Redirect = (url) => {

    const navigate = useNavigate()
    useEffect(() => {
        navigate(url);
        window.location.reload(true);
    }, [])
    
  return (<></>)
}

export default Redirect