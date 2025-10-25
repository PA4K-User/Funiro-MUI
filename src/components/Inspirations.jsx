import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ins1 from '../assets/Image/Inspiration1.png'
import ins2 from '../assets/Image/Inspiration2.png'
import ins3 from '../assets/Image/Inspiration3.png'
import rightArrow from '../assets/Image/RightArrow.svg'

import grayCircle from '../assets/Image/GrayCircle.svg'
import activeCircle from '../assets/Image/ActiveCircle.svg'

const Inspirations = () => {
  return (
    <>
        <Box sx={{position: 'relative', maxWidth: '100%', bgcolor: '#FBF7F2', p: 4}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 4}}>
                <Box sx={{display: 'grid', gap: 4}}>
                    <Typography sx={{typography: { xs: "h4", md: "h3" }, fontWeight: { xs: "bold", md: "bold" }, color: 'black'}}>50+  <br/> Beautiful rooms inspiration</Typography>
                    <Typography sx={{typography: { xs: "caption", md: "h6" }, color: 'black'}}>Our designer already made a lot of beautiful  prototipe of rooms that inspire you</Typography>
                    <Button sx={{bgcolor: '#B88E2F', color: 'white', fontWeight: 'bold', justifySelf: 'start'}} variant="contained">Explore More</Button>
                </Box>
                <Box sx={{display: { xs: "grid", md: "flex" }, gap: 2}}>
                    <Box component="img" src={ins1} alt="/" sx={{width: { xs: 140, md: 300 } , height: { xs: 100, md: 500 }}}></Box>
                    <Box component="img" src={ins2} alt="/" sx={{width: { xs: 140, md: 300 } , height: { xs: 100, md: 400 }}}></Box>
                    <Box component="img" src={ins3} alt="/" sx={{width: { xs: 140, md: 300 } , height: { xs: 100, md: 400 }}}></Box>
                </Box>
            </Box>
            <Box sx={{position: 'absolute', bottom: '3%', right: '33%', display: { xs: "none", md: "flex" }}}>
                <Box sx={{bgcolor: '#eeeeee', opacity: 0.7, textAlign: 'start', p: 4}}>
                    <Typography sx={{typography: { xs: "h4", md: "h6" }, color: 'black'}}>01 ---- Bed Room</Typography>
                    <Typography sx={{typography: { xs: "h4", md: "h6" }, fontWeight: { xs: "bold", md: "bold" }, color: 'black'}}>Inner Peace</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'end', alignItems: 'end'}}>
                    <Button sx={{bgcolor: '#B88E2F', color: 'white', fontWeight: 'bold', borderRadius: 0}} variant="contained"><Box component="img" src={rightArrow} alt="/" sx={{width: 20, height: 20}}></Box></Button>
                </Box>
            </Box>
            <Box sx={{position: 'absolute', bottom: '3%', right: '27%', display: { xs: "none", md: "flex" } , gap: 2, alignItems: 'center'}}>
                <Box component="img" src={activeCircle} alt="/" sx={{width: 20, height: 20}}></Box>
                <Box component="img" src={grayCircle} alt="/" sx={{width: 10, height: 10}}></Box>
                <Box component="img" src={grayCircle} alt="/" sx={{width: 10, height: 10}}></Box>
                <Box component="img" src={grayCircle} alt="/" sx={{width: 10, height: 10}}></Box>
            </Box>
        </Box>
    </>
  )
}

export default Inspirations