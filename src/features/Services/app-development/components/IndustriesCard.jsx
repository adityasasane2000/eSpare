import React from 'react'

function IndustriesCard({name}) {
  return (
        <div className='bg-white text-black w-[95%] xl:w-[100%] rounded-xl p-2 h-16 flex justify-center items-center text-base xl:text-2xl font-medium text-nowrap'>{name}</div>
  )
}

export default IndustriesCard