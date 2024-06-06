import React from 'react'

const ProductCard = () => {
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">

            <div className='h-[20rem]'>
                <img className='w-full h-full object-cover object-left-top' src='https://assets.ajio.com/medias/sys_master/root/20230621/6b0N/64925c2842f9e729d76304fb/-473Wx593H-463895347-pink-MODEL.jpg' alt="" />
            </div>

            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>JANASYA</p>
                    <p>Printed Tiered Dress with Waist Tie-Up</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>₹798</p>
                    <p className='line-through opacity-50'>₹1099</p>
                    <p className='text-green-600 font-semibold'>58% OFF</p>

                </div>

            </div>

        </div>
    )
}

export default ProductCard