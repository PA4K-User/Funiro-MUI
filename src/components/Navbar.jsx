import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isActive, setIsactive] = useState(false)

  return (
    <>
        <Box sx={{width: 'auto', height: 'auto', mx: 'auto', px: 2}}>
            <Box sx={{display: { xs: "flex", md: "flex" }, justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{typography: 'h4', fontWeight: 'bold', color: 'black', letterSpacing: 2}}>
                    Furniro
                </Box>
                <Button sx={{display: { xs: "inline", md: "none" }}} onClick={() => setIsactive(!isActive)}>
                    <FontAwesomeIcon icon={faHamburger} size="2x" color="black" />
                </Button>
                <Box sx={{display: { xs: "none", md: "flex" }, gap: 4}}>
                    <Button href='/' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>Home</Button>
                    <Button href='/' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>Shop</Button>
                    <Button href='/' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>About</Button>
                    <Button href='/contact' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>Contact</Button>
                </Box>
            </Box>
            <Box sx={{display: isActive ? { xs: "grid", md: "none" } : "none", gap: 2, justifyContent: 'center', borderRadius: 2}}>
                <Button href='/' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}} size='small'>Home</Button>
                <Button href='/' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}} size='small'>Shop</Button>
                <Button href='/' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}} size='small'>About</Button>
                <Button href='/contact' sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}} size='small'>Contact</Button>
            </Box>
        </Box>
    </>
  )
}

export default Navbar