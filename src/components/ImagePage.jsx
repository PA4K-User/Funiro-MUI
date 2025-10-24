import React from 'react'
import { Box, Button, Typography, Divider, TextField} from '@mui/material'

import bg from '../assets/Image/bg.png'
import logo from '../assets/Image/LogoIcon.png'

const ImagePage = ({name}) => {
  return (
    <>
        <Box sx={{position: 'relative', maxWidth: '100%'}}>
            <Box component="img" src={bg} alt="/" sx={{filter: 'blur(4px)', width: '100%', height: 316, objectFit: 'cover'}}></Box>
            <Box sx={{position: 'absolute', top: '20%', right: { xs: '38%', md: '45%' }, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 2}}>
                <Box component="img" src={logo} alt="/" sx={{width: 80, height: 80}}></Box>
                <Typography sx={{typography: { xs: "h6", md: "h4" }, color: 'black', fontWeight: { xs: "bold", md: "bold" }}}>{name}</Typography>
                <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'black'}}><span>Home &gt; </span>{name}</Typography>
            </Box>
        </Box>
    </>
  )
}

export default ImagePage