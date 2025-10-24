import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import dining from '../assets/Image/Dining.png'
import living from '../assets/Image/Living.png'
import bedroom from '../assets/Image/Bedroom.png'

const BrowseTheRange = () => {

  const arr = [
    {
        image: dining,
        name: 'Dinning'
    },
    {
        image: living,
        name: 'Living'
    },
    {
        image: bedroom,
        name: 'Bedroom'
    },
  ]

  return (
    <>
        <Box sx={{maxWidth: '80%', mx: 'auto', py: 6}}>
            <Box sx={{display: 'grid', gap: 2, justifyContent: 'center'}}>
                <Typography sx={{typography: { xs: "h5", md: "h3" }, textAlign: 'center', fontWeight: { xs: "bold", md: "bold" }}}>Browse The Range</Typography>
                <Typography sx={{typography: { xs: "body", md: "h6" }, textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            </Box>
            <Box sx={{display: {xs: 'grid', md: 'flex'}, gap: { xs: 4, md: 8 }, justifyContent: 'center', mt: 4}}>
                {
                    arr.map(({image, name}) => {
                        return (
                            <Box sx={{display: 'grid', gap: 2}}>
                                <Box component="img" src={image} alt="lizard" sx={{width: 300, height: 400, borderRadius: 2, boxShadow: 3, objectFit: 'cover'}}></Box>
                                <Typography sx={{typography: { xs: "h5", md: "h4" }, textAlign: 'center'}}>{name}</Typography>
                            </Box>
                        )
                    })
                }                
            </Box>
        </Box>
    </>
  )
}

export default BrowseTheRange