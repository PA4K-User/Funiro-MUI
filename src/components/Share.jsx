import React from 'react'
import { Box, Typography } from '@mui/material'
import Masonry from '@mui/lab/Masonry';

import share1 from '../assets/Image/share1.png'
import share2 from '../assets/Image/share2.png'
import share3 from '../assets/Image/share3.png'
import share4 from '../assets/Image/share4.png'
import share5 from '../assets/Image/share5.png'
import share6 from '../assets/Image/share6.png'
import share7 from '../assets/Image/share7.png'
import share8 from '../assets/Image/share8.png'
import share9 from '../assets/Image/share9.png'

const Share = () => {

    const itemData = [
        {
            img: share1,
            title: 'Fern',
        },
        {
            img: share2,
            title: 'Fern',
        },
        {
            img: share3,
            title: 'Fern',
        },
        {
            img: share4,
            title: 'Fern',
        },
        {
            img: share5,
            title: 'Fern',
        },
        {
            img: share6,
            title: 'Fern',
        },
        {
            img: share7,
            title: 'Fern',
        },
        {
            img: share8,
            title: 'Fern',
        },
        {
            img: share9,
            title: 'Fern',
        },
    ];

  return (
    <Box sx={{ width: '100%', minHeight: 829, mt: 4}}>
        <Box sx={{display: 'grid', gap: 2, justifyContent: 'center'}}>
            <Typography sx={{typography: { xs: "body", md: "h4" }, textAlign: 'center', fontWeight: { xs: "bold", md: "bold" }}}>Share your setup with</Typography>
            <Typography sx={{typography: { xs: "h6", md: "h4" }, textAlign: 'center'}}>#FuniroFurniture</Typography>
        </Box>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  )
}

export default Share