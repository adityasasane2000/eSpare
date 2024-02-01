import React from 'react'

function Card({title,info,no}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='bg-white space-y-6 w-[70%] md:w-[100%] lg:w-[80%] h-auto p-7 rounded-2xl flex flex-col justify-center items-start'>
            <h3 className='text-sm font-bold xl:text-xl'>{title}</h3>
            <p className='text-xs xl:text-lg'>{info}</p>
        </div>
    </div>
  )
}

export default Card