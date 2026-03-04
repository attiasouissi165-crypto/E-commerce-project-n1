import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
          const {pathname} = useLocation();
          useEffect(() =>{
            window.scrollTo({
                Top : 0,
            behavior:"smoth"})
          }, [pathname])
  return null
}

export default ScrollToTop
