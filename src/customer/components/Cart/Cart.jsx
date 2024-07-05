import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {
    const navigate = useNavigate();
    const {cart}=useSelector(store=>store)
    const dispatch=useDispatch(); // to get the cart
    const handleCheckOut=()=>{
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(getCart())

    }, [cart.updateCartItem, cart.deleteCartItem])

    return (
        <div>

            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {cart.cart?.cartItems.map((item)=><CartItem item={item}/>)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-8'>
                            <div className='flex justify-between pt-3 mr-2'>
                                <span className='ml-2'>Price</span>
                                <span>₹{cart.cart?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 mr-2'>
                                <span className='ml-2'>Discount</span>
                                <span className='text-green-600'> -₹{cart.cart?.discount}</span>
                            </div>
                            <div className='flex justify-between pt-3 mr-2'>
                                <span className='ml-2'>Delivery Charges</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 mr-2 font-bold'>
                                <span className='ml-2'>Total Amount</span>
                                <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckOut} variant="contained" className='w-full mt-5' sx={{ px:"2.5rem", py:".7rem", bgcolor: '#9155fd' }}>
                            Check Out
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart