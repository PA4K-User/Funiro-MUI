import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ImagePage from '../components/ImagePage.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Frame from '../components/Frame.jsx'
import Footer from '../components/Footer.jsx'

const Contact = () => {
  return (
    <>
        <Navbar/>
        <ImagePage name ={"Contact"}/>
        <GetInTouch/>
        <Frame/>
        <Footer/>
    </>
  )
}

export default Contact