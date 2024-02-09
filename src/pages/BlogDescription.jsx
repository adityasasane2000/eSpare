import React from 'react'
import Navbar from '../features/Navbar'
import Info from '../features/Info'
import Footer from '../features/Footer'

function BlogDescription() {
  return (
    <div>
        <Navbar></Navbar>
        {/* <Info></Info> */}
        <div className='flex justify-center'>
            <img className="w-[90%] lg:w-[80%] mt-20 h-52 md:h-auto rounded-3xl" src="./image 44.png" alt="blog1 image" />
        </div>

        <div className='pl-[10%] mt-10 font-[Inter] font-semibold xl:text-xl'>
            <p>Author Name: Aditya Sasane</p>
            <p>Posted on: 01-02-2024</p>
        </div>

        <div className='pl-[10%] pr-[10%] mt-10 font-[Inter] text-sm xl:text-base'>
            <p>
                Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p
                Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p
                Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p
                Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p
                Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p
            </p>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default BlogDescription