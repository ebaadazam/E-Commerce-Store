import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTracker = () => {
  return (
    <div className='w-full'>
        {/* Here activeSteps should have come */}
        <Stepper  alternativeLabel>  
            {steps.map((label)=><Step>
                <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}> {label} </StepLabel>
            </Step>)}
        </Stepper>
        
    </div>
  )
}

export default OrderTracker