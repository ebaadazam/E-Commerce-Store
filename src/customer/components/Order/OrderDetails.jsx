import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
           <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
           <AddressCard/>
        </div>   
        <div className='py-10'>
            <OrderTracker activeStep={3}></OrderTracker>
        </div>

        <Grid className='space-y-5' container>
            {[1, 1, 1, 1, 1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' 
            sx={{alignItems:"center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/1/e197134WAHALY00004484_1.jpg?rnd=20200526195200&tr=w-512" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Women Floral Printed Kurta with Trouser (Set of 2)</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color:Purple</span> <span>Size:M</span> </p>
                            <p>Seller: Ahalyaa</p>
                            <p>₹1299</p>
                        </div>
                    </div>
                </Grid>

                {/* For ratings n all */}
                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>
 )}    
        </Grid>
    </div>
  )
}

export default OrderDetails