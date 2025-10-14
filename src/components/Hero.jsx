import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Interior from '../assets/Image/interiorBg.png'

const Hero = () => {
  return (
    <Box sx={{position: 'relative',width: 'auto', height: "100vh", mx: 'auto'}}>
        <Box
            component="img"
            src={Interior}
            alt="Interior"
            sx={{
                width: "100%",
                height: { xs: "60vh", md: "100vh" },
                objectFit: "cover",
                display: "block",
                mx: "auto"
            }}
        />
        <Box sx={{position: 'absolute', top: { xs: "10%", md: "20%" }, left: { xs: "5%", md: "20%" }, right: { xs: "5%", md: "30%" }}}>
            <Box sx={{display: 'grid', gap: 2, bgcolor: '#fff3e0', borderRadius: 2, px: { xs: 4, md: 6 }, py: { xs: 2, md: 4 }}}>
                <Typography sx={{typography: { xs: "h5", md: "h4" }, fontWeight: { xs: "bold", md: "bold" }}}>New Arrival</Typography>
                <Typography sx={{typography: { xs: "h4", md: "h2" }, fontWeight: { xs: "bold", md: "bold" }, color: '#B88E2F'}}>Discover Our <br/> New Collection</Typography>
                <Typography sx={{typography: { xs: "body", md: "h5" }}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Aliquid, numquam.</Typography>
                <Button sx={{bgcolor: '#B88E2F', color: 'white', justifySelf: 'start'}} variant="contained">BUY NOW !</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Hero