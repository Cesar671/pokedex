import React, {useEffect, useState, useCallback} from 'react'
import { BackgroundStyled, BackgroundContainer } from '../styles/style-background'

const Background = () => {
  const [isReduced, setIsReduced] = useState(100);
  const scrollThreshold = 30;

  const handleScroll = useCallback(() => {
    if (window.scrollY > scrollThreshold) {
      setIsReduced(100+window.scrollY/30);
    } else {
      setIsReduced(100);
    }
    
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <BackgroundContainer >
        <BackgroundStyled src='../resources/fondo.png' isReduced={isReduced}/>
    </BackgroundContainer>
  )
}

export default Background