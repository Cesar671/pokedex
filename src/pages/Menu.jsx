import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { Menucontainer, 
    MenuContainerResponsive,
    MenuContainerR,
    ButtonMenuResponsive,
    MenuContainerRNonDisplayed } from '../styles/style-menu'
import { urlPokeball,
        urlPokedex,
        menuPages} from '../js/Directions'
import ButtonMenu from '../components/ButtonMenu'
import Pokeball from '../components/Pokeball'
import LogoButton from '../components/LogoButton'
const Menu = () => {

    const [display, setDisplay] = useState(false)
    const handlerButtonResponsive = () => {
        setDisplay(!display)
        console.log(display)
    }
    
    const RenderButtons = () => {
        return menuPages.map((item) => 
        <Link style={{textDecoration:"none"}}>
            <ButtonMenu name = { item.name } 
                        icon = { item.icon } 
                        url = { item.url }/>
            <hr />
        </Link>)
     }

  return (<MenuContainerResponsive>
    <div style={{width:"180px"}}></div>
    <Menucontainer className='Menu'>
        <Pokeball />
        <LogoButton />
        <div>
            <RenderButtons />
        </div>
    </Menucontainer>    
    <MenuContainerR className='responsiveMenu' >
        <ButtonMenuResponsive onClick= { handlerButtonResponsive }>
             <Pokeball />
        </ButtonMenuResponsive>
        <MenuContainerRNonDisplayed display={ (display) ? "flex":"none" }>
            <LogoButton />
            <RenderButtons />
        </MenuContainerRNonDisplayed>
    </MenuContainerR>
  </MenuContainerResponsive>
    
  )
}

export default Menu