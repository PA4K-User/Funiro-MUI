import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import BrowseTheRange from '../components/BrowseTheRange.jsx'
import OurProduct from '../components/OurProduct.jsx'
import Inspiration from '../components/Inspirations.jsx'
import Share from '../components/Share.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {

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
        <Hero/>
        <BrowseTheRange/>
        <OurProduct/>
        <Inspiration/>
        <Share/>
        <Footer/>
    </>
  )
}

export default Home