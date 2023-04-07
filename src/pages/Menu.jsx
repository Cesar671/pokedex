import React,{ useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menucontainer, 
    ImgContainerLogo, 
    LogoImg,
    PokeballCenter } from '../styles/style-menu'
import { urlPokeball, urlLogo, urlPokedex} from '../js/Directions'
import ButtonMenu from '../components/ButtonMenu'
const Menu = () => {
    
    const menu = useRef()
    const [display, setDisplay] = useState(0)
    useEffect(() => {
        
        function handleScroll() {
            const data = document.documentElement.scrollTop
            setDisplay(data)
        }
        setDisplay(menu.current.getBoundingClientRect())
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (<>

    <Menucontainer ref = { menu }>
        <div>
            <ImgContainerLogo src={urlPokeball} rotate = { display }/>
            <PokeballCenter></PokeballCenter>
        </div>
        <a href='/'><LogoImg src={ urlLogo }/></a>
        <div>
            <Link style={{textDecoration:"none"}}>
                <ButtonMenu name = "boton 2" icon = {urlPokedex}/>
                <hr />
            </Link>
            <Link style={{textDecoration:"none"}}>
                <ButtonMenu name = "boton 3" icon = {urlPokedex}/>
                <hr />
            </Link>
            <Link style={{textDecoration:"none"}}>
                <ButtonMenu name = "boton 4" icon = {urlPokeball}/>
                <hr />
            </Link>
        </div>
        
    </Menucontainer>
  </>
    
  )
}

export default Menu