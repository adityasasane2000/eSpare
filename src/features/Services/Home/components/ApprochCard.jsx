import React from 'react'

function ApprochCard({title,info,img}) {
  return (
    <div className='bg-white p-4 space-y-3 rounded-2xl w-[70%] sm:w-[75%]'>
        <img src={`./${img}`} alt="" />
        <h3 className='text-base font-semibold'>{title}</h3>
        <p className='text-xs'>{info}</p>
    </div>
  )
}

export default ApprochCard