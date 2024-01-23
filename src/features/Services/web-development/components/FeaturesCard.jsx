import React from 'react'

function FeaturesCard({title,img,text}) {
  return (
    <>
        <div className='p-4 flex flex-col justify-center items-center space-y-5 '>
            <h3 className='text-lg font-semibold sm:text-base sm:text-center sm:mt-6 md:text-2xl xl:text-2xl'>{title}</h3>
            <img className="w-[20%] sm:w-[50%] lg:w-[35%]" src={`./${img}`} alt="icon" />
            <p className='text-center bg-white p-2 w-[auto] h-[auto] rounded-3xl text-sm '>{text}</p>
        </div>
    </>
  )
}

export default FeaturesCard