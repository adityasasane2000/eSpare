import React from 'react'

function AppCard() {
  return (
    <div className='bg-gray-200 flex flex-col justify-center items-center space-y-7 p-4 sm:flex sm:flex-row sm:w-[82rem] sm:space-x-16 sm:h-[35rem]'>
        <img className="w-48 sm:w-96" src="./photo.png" alt="" />

        <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-10'>
            <h2 className='text-xl font-semibold sm:text-5xl'>App Name</h2>
            <p className='text-sm sm:text-3xl'>Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se Lorem Ipsum dollar set Lorem Ipsum dollar se Lorem Ipsum dollar seLorem Ipsum dollar se</p>
        </div>
    </div>
  )
}

export default AppCard