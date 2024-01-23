import React from 'react'

function ErpCard({title,info}) {
  return (
    <div>
        <div className='bg-white text-black rounded-xl w-auto text-sm p-5 space-y-5'>
            <img className="w-12" src="./Ellipse.png" alt="" />
            <h3 className='text-sm font-semibold'>{title}</h3>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default ErpCard