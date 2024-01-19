import React from 'react'

function ErpCard({title,info}) {
  return (
    <div>
        <div className='bg-white text-black rounded-xl w-64 text-sm p-7 space-y-5 sm:h-24 sm:w-64 sm:p-8 sm:-mt-16 sm:text-4xl sm:font-semibold'>
            <img className="w-12" src="./Ellipse.png" alt="" />
            <h3 className='text-sm font-semibold'>{title}</h3>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default ErpCard