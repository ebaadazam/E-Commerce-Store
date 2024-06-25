import { Grid } from '@mui/material'
import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/account/order/${5}")} className='p-5 shadow-sm hover:shadow-xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/d/7d3c352DBLAAJ00002016_1.jpg?rnd=20200526195200&tr=w-512' alt='' />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Embroidered Kurta with Palazzo and Dupatta (Set of 3)</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>₹1299</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AccessTimeIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                            <span>
                                Delivered on March 23
                            </span>
                        </p>
                        <p className='text-xs'>
                            Your Item has been Delivered
                        </p>
                    </div>}

                    {false && <p>
                        <span>
                            Expected Delivery on March 23
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard