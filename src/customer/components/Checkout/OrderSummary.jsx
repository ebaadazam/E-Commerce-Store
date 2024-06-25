import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 rounded-s-md shadow-lg border'>
        <AddressCard />
      </div>

      {/* // Cart Code injected */}
      <div>
        <div className='lg:grid grid-cols-3 relative mt-2'>
          <div className='col-span-2'>
            {[1, 1, 1, 1].map((item) => <CartItem/>)}
          </div>

          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
              <p className='uppercase font-bold opacity-60 pb-4 mt-4'>Price Details</p>
              <hr />
              <div className='space-y-3 font-semibold mb-8'>
                <div className='flex justify-between pt-3 mr-2'>
                  <span className='ml-2'>Price</span>
                  <span>₹1299</span>
                </div>
                <div className='flex justify-between pt-3 mr-2'>
                  <span className='ml-2'>Discount</span>
                  <span className='text-green-600'>₹899</span>
                </div>
                <div className='flex justify-between pt-3 mr-2'>
                  <span className='ml-2'>Delivery Charges</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 mr-2 font-bold'>
                  <span className='ml-2'>Total Amount</span>
                  <span className='text-green-600'>₹1299</span>
                </div>
              </div>
              <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: '#9155fd' }}>
                Check Out
              </Button>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default OrderSummary