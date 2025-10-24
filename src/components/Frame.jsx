import React from 'react'
import { Box, Button, Typography, Divider, TextField} from '@mui/material'

import support from '../assets/Image/customer-support.svg'
import guarantee from '../assets/Image/guarantee.svg'
import shipping from '../assets/Image/shipping.svg'
import trophy from '../assets/Image/trophy.svg'

const Frame = () => {
  return (
    <>
        <Box sx={{maxWidth: '100%', height: { xs: 'auto', md: '270px' }, bgcolor: '#FAF3EA', display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 4, md: 0 }}}>
            <Box sx={{maxHeight: { xs: 'auto', md: '70px' }, width: '80%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'space-around', md: 'space-between' }, gap: 4}}>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box component="img" src={trophy} alt="/" sx={{width: 80, height: 80}}></Box>
                    <Box>
                        <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>High Quality</Typography>
                        <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'gray'}}>crafted from top materials</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box component="img" src={guarantee} alt="/" sx={{width: 80, height: 80}}></Box>
                    <Box>
                        <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>High Quality</Typography>
                        <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'gray'}}>crafted from top materials</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box component="img" src={shipping} alt="/" sx={{width: 80, height: 80}}></Box>
                    <Box>
                        <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>High Quality</Typography>
                        <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'gray'}}>crafted from top materials</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box component="img" src={support} alt="/" sx={{width: 80, height: 80}}></Box>
                    <Box>
                        <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>High Quality</Typography>
                        <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'gray'}}>crafted from top materials</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Frame