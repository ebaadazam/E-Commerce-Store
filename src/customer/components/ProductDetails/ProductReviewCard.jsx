import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>

            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>S</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Sehrish</p>
                        <p className='opacity-70'>March 12, 2024</p>
                    </div>
                </div>

                <Rating value={4} name='half-rating' readOnly precision={.5}/>
                <p>Fantastic shopping experience! The website is user-friendly, and the customer service
                   is top-notch. Could not ask for better quality products</p>
            </Grid>

        </Grid>
    </div>
  )
}

export default ProductReviewCard