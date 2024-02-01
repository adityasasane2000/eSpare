import React from 'react'

function AppCard() {
  return (
    <div className='bg-gray-200 flex flex-col justify-center items-center space-y-7 p-5 w-[100%] sm:w-[100%] lg:w-[100%] md:flex md:flex-row md:space-x-10'>
        <img className="w-[80%] md:w-[30%] lg:w-[20%]" src="./photo.png" alt="" />

        <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-10'>
            <div className='flex flex-col justify-center items-center space-y-5'>
            <h2 className='text-xl font-semibold xl:text-3xl'>App Name</h2>
              <p className='text-xs xl:text-base'>Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se</p>
              <button className='bg-yellow-400 text-base font-medium w-auto h-9 rounded-xl text-nowrap p-2 xl:text-xl xl:h-10'>Download App</button>
            </div>
        </div>
    </div>
  )
}

export default AppCard 