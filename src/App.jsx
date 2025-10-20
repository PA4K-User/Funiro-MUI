import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BrowseTheRange from './components/BrowseTheRange.jsx'
import OurProduct from './components/OurProduct.jsx'

import { ThemeProvider, createTheme, CssBaseline, Typography, Button, Container } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Hero/>
        <BrowseTheRange/>
        <OurProduct/>
      </ThemeProvider>
    </>
  )
}

export default App
