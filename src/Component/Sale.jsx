import React from 'react'

const Sale = () => {
  return (
    <>
        <div className='bg-[#e6d7ce] py-4'>
            <div className='flex justify-center flex-col items-center'>
                <h1 className='text-[1.5rem] font-bold'>EXTRA 10% OFF ON ORDERS ABOUT ₹4499*</h1>
                <div className='flex gap-2 font-semibold'>
                    <h1 className='border-b border-black cursor-pointer'>FOR HIM</h1>
                    <h1 className='border-b border-black cursor-pointer'>FOR HER</h1>
                    <h1 className='border-b border-black cursor-pointer'>FOR KIDS</h1>
                </div>
                <div className='text-[.8rem]'>
                    <h2>Discount auto-applied at checkout | * Exlusions Apply</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sale