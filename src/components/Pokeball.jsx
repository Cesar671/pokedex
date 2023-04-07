import React,{ useState, useEffect } from 'react'
import { ImgContainerLogo, PokeballCenter } from '../styles/style-menu'
import { urlPokeball } from '../js/Directions'
const Pokeball = () => {
    const [display, setDisplay] = useState(0)
    useEffect(() => {
        function handleScroll() {
            const data = document.documentElement.scrollTop
            setDisplay(data)
        }
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div>
        <ImgContainerLogo src={urlPokeball} rotate = { display }/>
        <PokeballCenter></PokeballCenter>
    </div>
  )
}

export default Pokeball