import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import BrowseTheRange from '../components/BrowseTheRange.jsx'
import OurProduct from '../components/OurProduct.jsx'
import Inspiration from '../components/Inspirations.jsx'
import Share from '../components/Share.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>      
        <Navbar/>
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