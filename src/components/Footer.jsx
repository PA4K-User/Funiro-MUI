import React from 'react'
import { Box, Button, Typography, Divider, TextField} from '@mui/material'

const Footer = () => {
  return (
    <>
        <Box sx={{maxWidth: '100%', mx: 'auto', mt: { xs: -2, md: 4 }}}>
            <Box sx={{display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}, gap: 4}}>
                <Box sx={{display: 'grid', justifyContent: 'start', alignItems: 'start', gap: 4, p: 4}}>
                    <Typography sx={{typography: { xs: "h6", md: "h4" }, fontWeight: { xs: 'bold', md: 'bold' }, color: 'black'}}>Funiro</Typography>
                    <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>
                        400 University Drive Suite 200 Coral <br />
                        Gables,<br />
                        FL 33134 USA
                    </Typography>
                </Box>
                <Box sx={{display: { xs: "grid", md: "flex" }, gridColumn: 'span 2', justifyContent: 'space-between', gap: 2, p: 4}}>
                    <Box sx={{display: 'grid', gap: 2}}>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'gray', textDecoration: 'underline'}}>Links</Typography>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>Home</Typography>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>Shop</Typography>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>About</Typography>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>Contact</Typography>
                    </Box>
                    <Box sx={{display: 'grid', gap: 2}}>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'gray', textDecoration: 'underline'}}>Help</Typography>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>Payment Options</Typography>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>Return</Typography>
                        <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black'}}>Privacy Policies</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        <Typography sx={{typography: { xs: "body", md: "h6" }, color: 'black', textDecoration: 'underline'}}>Newsletter</Typography>
                        <TextField label="Subscribe" placeholder='Enter Your Email Address' variant="outlined" size="small"/>
                    </Box>
                </Box>
            </Box>
            <Divider/>
            <Typography sx={{typography: { xs: "body", md: "body" }, color: 'black', mt: 4, pl: 2}}>2025 Furino All rights reverved</Typography>
        </Box>
    </>
  )
}

export default Footer