import React from 'react'
import { useNavigate } from 'react-router-dom'

function BlogCard({title,info,img1,img2}) {
  const navigate = useNavigate();

  function handleMore(){
    navigate(`/BlogDescription`)
  }

  return (
    <div className='space-y-10 p-8 lg:p-10 md:flex md:space-x-10 lg:gap-14'>
        <div className='flex justify-center items-center flex-shrink-0 '>
            <img className="absolute h-36 rounded-2xl ml-14 lg:w-72 lg:h-52 xl:w-96 xl:h-56"src={`./${img1}`} alt="" />
            <img className="relative h-40 rounded-2xl mt-9 mr-10 lg:w-80 lg:h-52 xl:w-96 xl:h-56" src={`./${img2}`} alt="" />
        </div>

        <div className='space-y-7'>
            <h3 className='text-xl font-bold lg:text-2xl'>{title}</h3>
            <p className='text-sm lg:text-base xl:text-xl lg:w-[110%]'>{info}<span className='text-blue-600 cursor-pointer' onClick={handleMore}>   ...Read More</span></p>
        </div>

    </div>
  )
}

export default BlogCard