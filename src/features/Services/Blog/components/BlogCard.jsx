import React from 'react'

function BlogCard({title,info,img1,img2}) {
  return (
    <div className='space-y-5 p-10 lg:p-20 md:flex md:space-x-10'>
        <div className='space-y-16'>
            <h3 className='text-xl font-bold lg:text-2xl'>{title}</h3>
            <p className='text-sm lg:text-lg '>{info}</p>
        </div>

        <div className='flex justify-center items-center flex-shrink-0 '>
            <img className="absolute h-36 rounded-2xl ml-14 lg:w-72 lg:h-52 xl:w-96 xl:h-56"src={`./${img1}`} alt="" />
            <img className="relative h-40 rounded-2xl mt-9 mr-10 lg:w-80 lg:h-52 xl:w-96 xl:h-56" src={`./${img2}`} alt="" />
        </div>
    </div>
  )
}

export default BlogCard