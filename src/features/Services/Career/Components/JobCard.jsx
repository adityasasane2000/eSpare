import React from 'react'

function JobCard({time,role,expr}) {
  return (
    <div className='bg-white w-[60%] rounded-2xl h-50'> 
        <div className='p-4 space-y-2'>
            <h4 className='text-sm'>{time}</h4>
            <h1 className='font-semibold'>{role}</h1>
            <p className='text-sm'>Requirements :</p>
            <p className='text-sm'>{expr}</p>
            <button className='bg-yellow-400 text-base font-semibold w-[100%] h-auto text-nowrap hover:bg-black hover:text-yellow-400'>View Deatils</button>
        </div>
    </div>
  )
}

export default JobCard