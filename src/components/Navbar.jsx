import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faHeart, faShoppingCart, faHamburger } from "@fortawesome/free-solid-svg-icons";

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
                    <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>Home</Button>
                    <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>Shop</Button>
                    <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>About</Button>
                    <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black'}}>Contact</Button>
                </Box>
            </Box>
            <Box sx={{display: isActive ? { xs: "grid", md: "none" } : "none", gap: 2, borderRadius: 2}}>
                <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black', mx: 'auto'}} size='small'>Home</Button>
                <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black', mx: 'auto'}} size='small'>Shop</Button>
                <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black', mx: 'auto'}} size='small'>About</Button>
                <Button sx={{typography: 'h6', fontWeight: 'bold', color: 'black', mx: 'auto'}} size='small'>Contact</Button>
            </Box>
        </Box>
    </>
  )
}

export default Navbar