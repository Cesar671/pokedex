import React,{ useState } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { DeployIcon, HeaderContainer } from '../styles/style-desplegable'

const Desplegable = ({name, Data}) => {

    const [deploy, setDeploy] = useState(false)
    const [icon, setIcon] = useState(faChevronDown)

    const DeploySection = () => {
      setDeploy(!deploy)
    }

    const RenderContent = () => {
        if(deploy){
            setIcon(faChevronUp)
            return <Data />
        } else {
            setIcon(faChevronDown)
            return <></>
        }
    }

  return (
  <>  
    <HeaderContainer onClick={ DeploySection }>
      <h3>{ name }</h3>
      <DeployIcon icon={ icon } />
    </HeaderContainer>
    <RenderContent />
  </>)
}

export default Desplegable