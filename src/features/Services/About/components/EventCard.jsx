import React from 'react'

function EventCard() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='bg-white w-[60%] h-44 rounded-2xl sm:w-[80%]'>
            <img src="./photo.png" alt="" />
        </div>
        <div className='bg-black text-white w-[60%] sm:w-[80%] h-24 rounded-2xl p-3'>
           <h3 className='text-lg font-semibold'>Event Name</h3>
           <p>Lorem ipsum dollar set...</p>
        </div>
    </div>
  )
}

export default EventCard