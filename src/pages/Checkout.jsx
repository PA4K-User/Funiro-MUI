import { useState, useEffect } from 'react'
import { Box} from '@mui/material'

import Navbar from '../components/Navbar.jsx'
import ImagePage from '../components/ImagePage.jsx'
import BillingDetails from '../components/BillingDetails.jsx'
import Frame from '../components/Frame.jsx'
import Footer from '../components/Footer.jsx'

const Checkout = () => {

  const [headerActive, setHeaderActive] = useState(false);
  
    useEffect(() => {
  
      const handleScroll = () => {
  
        setHeaderActive(window.scrollY > 200)
  
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => window.removeEventListener('scroll', handleScroll)
  
  }, [])

  return (
    <>
        <Box sx={{ position: 'relative', zIndex: 10 }}>
          <Navbar/>
        </Box>
        <Box
          sx={{
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 50,
            bgcolor: 'white',
            transform: headerActive ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s ease',
          }}
        >
          <Navbar/>
        </Box>
        <ImagePage name={"Checkout"}/>
        <BillingDetails/>
        <Frame/>
        <Footer/>    
    </>
  )
}

export default Checkout