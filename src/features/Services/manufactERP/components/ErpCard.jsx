import React from 'react'

function ErpCard({title,info,img}) {
  return (
    <div>
        <div className={`bg-white text-black rounded-xl w-[100%] text-sm p-5 space-y-5 `}>
            <img className="w-10" src={`./${img}`} alt="" />
            <h3 className='text-xs font-semibold'>{title}</h3>
            <p className='text-xs'>{info}</p>
        </div>
    </div>
  )
}

export default ErpCard