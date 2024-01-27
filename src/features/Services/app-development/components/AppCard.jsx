import React from 'react'

function AppCard() {
  return (
    <div className='bg-gray-200 flex flex-col justify-center items-center space-y-7 p-5 w-[100%] sm:w-[70%] lg:w-[80%]'>
        <img className="w-[50%] md:w-[30%]" src="./photo.png" alt="" />

        <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-10'>
            <h2 className='text-2xl font-semibold'>App Name</h2>
            <p className='text-sm'>Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se</p>
        </div>
    </div>
  )
}

export default AppCard