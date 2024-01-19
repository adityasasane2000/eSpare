import React from 'react'

function FeaturesCard({title,img,text}) {
  return (
    <>
        <div className='p-4 flex flex-col justify-center items-center space-y-5 '>
            <h3 className='text-lg font-semibold sm:text-3xl sm:text-center sm:mt-6 md:text-4xl xl:text-5xl'>{title}</h3>
            <img className="w-28 sm:w-28 md:w-32 xl:w-36" src={`./${img}`} alt="icon" />
            <p className='text-center bg-white p-2 rounded-3xl text-sm sm:text-2xl md:text-3xl xl:text-4xl'>{text}</p>
        </div>
    </>
  )
}

export default FeaturesCard