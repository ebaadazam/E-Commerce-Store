import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummary = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get("order_id");
  const {order}=useSelector(store=>store);

  useEffect(()=>{
    dispatch(getOrderById("orderId"))

  }, [orderId])
  return (
    <div>
      <div className='p-5 rounded-s-md shadow-lg border'>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>

      {/* // Cart Code injected */}
      <div>
        <div className='lg:grid grid-cols-3 relative mt-2'>
          <div className='col-span-2'>
            {order.order?.orderItems.map((item) => <CartItem item={item}/>)}
          </div>

          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
              <p className='uppercase font-bold opacity-60 pb-4 mt-4'>Price Details</p>
              <hr />
              <div className='space-y-3 font-semibold mb-8'>
                <div className='flex justify-between pt-3 mr-2'>
                  <span className='ml-2'>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className='flex justify-between pt-3 mr-2'>
                  <span className='ml-2'>Discount</span>
                  <span className='text-green-600'>₹{order.order?.discount}</span>
                </div>
                <div className='flex justify-between pt-3 mr-2'>
                  <span className='ml-2'>Delivery Charges</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 mr-2 font-bold'>
                  <span className='ml-2'>Total Amount</span>
                  <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
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