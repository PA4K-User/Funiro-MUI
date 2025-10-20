import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import redCircle from '../assets/image/RedCircle.svg'
import greenCircle from '../assets/image/GreenCircle.svg'
import syltherine from '../assets/image/Syltherine.png'
import leviosa from '../assets/image/Leviosa.png'
import lolito from '../assets/image/Lolito.png'
import respira from '../assets/image/Respira.png'
import grifo from '../assets/image/Grifo.png'
import muggo from '../assets/image/Muggo.png'
import pingky from '../assets/image/Pingky.png'
import potty from '../assets/image/Potty.png'
import share from '../assets/image/ShareOverlay.svg'
import compare from '../assets/image/CompareOverlay.svg'
import like from '../assets/image/HeartOverlay.svg'

const OurProduct = () => {

  const arr = [
    {
        bg: syltherine,
        header: 'Syltherine',
        subHeader: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        priceDiscount: 'Rp 3.500.000',
        haveDiscout: true,
        discountPercent: '-30%'
    },
    {
        bg: leviosa,
        header: 'Leviosa',
        subHeader: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        priceDiscount: '',
        haveDiscout: false
    },
    {
        bg: lolito,
        header: 'Lolito',
        subHeader: 'Luxury big sofa',
        price: 'Rp 7.000.000',
        priceDiscount: 'Rp 14.000.000',
        haveDiscout: true,
        discountPercent: '-50%'
    },
    {
        bg: respira,
        header: 'Respira',
        subHeader: 'Outdoor bar table and stool',
        price: 'Rp 500.000',
        priceDiscount: '',
        haveDiscout: true,
        discountPercent: 'New'
    },
    {
        bg: grifo,
        header: 'Grifo',
        subHeader: 'Night lamp',
        price: 'Rp 1.500.000',
        priceDiscount: '',
        haveDiscout: false,
        discountPercent: ''
    },
    {
        bg: muggo,
        header: 'Muggo',
        subHeader: 'Night lamp',
        price: 'Rp 1.500.000',
        priceDiscount: 'Rp 3.500.000',
        haveDiscout: true,
        discountPercent: '-40%'
    },
    {
        bg: pingky,
        header: 'Pingky',
        subHeader: 'Cute bed set',
        price: 'Rp 7.000.000',
        priceDiscount: 'Rp 14.000.000',
        haveDiscout: true,
        discountPercent: '-50%'
    },
    {
        bg: potty,
        header: 'Potty',
        subHeader: 'Minimalist flower pot',
        price: 'Rp 500.000',
        priceDiscount: '',
        haveDiscout: true,
        discountPercent: 'New'
    },
  ]

  return (
    <>
        <Box sx={{display: 'grid', color: '#bdbdbd', justifyContent: 'center'}}>
            <Typography sx={{typography: { xs: "h4", md: "h3" }, textAlign: 'center', fontWeight: { xs: "bold", md: "bold" }, color: 'black', mb: 4}}>Our Product</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' } , gap: 4, mb: 4}}>
                 {
                    arr.map(({bg, header, subHeader, price, priceDiscount, haveDiscout, discountPercent}, index) => {
                        return (
                            <Box sx={{position: "relative", display: 'grid', gap: 0}}>
                                <Box component="img" src={bg} alt="/" sx={{width: 400, height: 400, objectFit: 'cover'}}></Box>
                                <Box sx={{width: 370, bgcolor: '#eeeeee', p: 1.9}}>
                                    <Typography sx={{typography: { xs: "h4", md: "h5" }, fontWeight: { xs: "bold", md: "bold" }, color: 'black'}}>{header}</Typography>
                                    <Typography sx={{typography: { xs: "body", md: "h6" }}}>{subHeader}</Typography>
                                    <Box sx={{display: 'flex', gap: 2}}>
                                        <Typography sx={{typography: { xs: "body", md: "h6" }, fontWeight: { xs: "bold", md: "bold" }, color: 'black'}}>{price}</Typography>
                                        {haveDiscout && <Typography sx={{typography: { xs: "body", md: "h6" }, color: '#bdbdbd', textDecoration: "line-through"}}>{priceDiscount}</Typography>}
                                    </Box>
                                    {haveDiscout && <Box component="img" src={discountPercent === 'New' ? greenCircle : redCircle} alt="/" sx={{position: 'absolute', top: 8, right: 8}}></Box>}
                                    {haveDiscout && <Typography sx={{typography: { xs: "body", md: "body" }, fontWeight: { xs: "bold", md: "bold" }, color: 'white', position: 'absolute', top: 20, right: 12}}>{discountPercent}</Typography>}
                                    <Box sx={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, top: 0, right: 0, width: '100%', height: '100%', opacity: 0, bgcolor: 'rgba(0, 0, 0, 0)', "&:hover": {opacity: 1, bgcolor: 'rgba(0, 0, 0, 0.3)', color: 'white', transition: '0.3s'}}}>
                                        <Box sx={{display: 'grid', gap: 4, mx: 'auto'}}>
                                            <Button sx={{bgcolor: 'white', color: '#B88E2F', fontWeight: 'bold', m: 'auto'}} variant="contained">Add to Cart</Button>
                                            <Box sx={{display: 'flex', gap: 4}}>
                                                <Box sx={{display: 'flex', fontWeight: 'bold', gap: 2}}>
                                                    <Box component="img" src={share} alt="/" sx={{width: 20, height: 20}}></Box>
                                                    <Typography sx={{fontWeight: 'bold'}}>Share</Typography>
                                                </Box>
                                                <Box sx={{display: 'flex', fontWeight: 'bold', gap: 2}}>
                                                    <Box component="img" src={compare} alt="/" sx={{width: 20, height: 20}}></Box>
                                                    <Typography>Compare</Typography>
                                                </Box>
                                                <Box sx={{display: 'flex', fontWeight: 'bold', gap: 2}}>
                                                    <Box component="img" src={like} alt="/" sx={{width: 20, height: 20}}></Box>
                                                    <Typography sx={{fontWeight: 'bold'}}>Like</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                 }
            </Box>
        </Box>
        <Box sx={{display: 'grid', justifyContent: 'center'}}>
            <Button sx={{typography: { xs: "body", md: "h6" }, bgcolor: 'white', color: '#B88E2F', fontWeight: { xs: "bold", md: "bold" }, border: 1, borderColor: '#B88E2F', mb: 8}} variant="contained">Show More</Button>
        </Box>
        
    </>
  )
}

export default OurProduct