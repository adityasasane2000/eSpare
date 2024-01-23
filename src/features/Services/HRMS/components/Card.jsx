import React from 'react'

function Card({title,info}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='bg-white space-y-9 w-[60%] md:w-[90%] lg:w-[80%] h-auto p-10 rounded-2xl flex flex-col justify-center items-start'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-sm'>{info}</p>
        </div>
    </div>
  )
}

export default Card