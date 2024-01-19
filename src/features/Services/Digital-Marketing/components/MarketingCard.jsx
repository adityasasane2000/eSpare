import React from 'react'

function MarketingCard({title,info,img1,img2}) {
  return (
    <div className='space-y-8 p-6'>
        <div className='space-y-6'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-sm'>{info}</p>
        </div>

        <div className='flex justify-end mr-10'>
            <img className="absolute h-36 rounded-2xl"src={`./${img1}`} alt="" />
            <img className="relative h-40 rounded-2xl mt-14 mr-20" src={`./${img2}`} alt="" />
        </div>
    </div>
  )
}

export default MarketingCard