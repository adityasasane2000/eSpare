import React from 'react'

function ApprochCard({title,info}) {
  return (
    <div className='bg-white p-4 space-y-3 rounded-2xl w-[85%] sm:w-[75%]'>
        <img src="./Ellipse.png" alt="" />
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm'>{info}</p>
    </div>
  )
}

export default ApprochCard