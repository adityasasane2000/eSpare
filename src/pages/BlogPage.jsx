import React from 'react'
import Navbar from '../features/Navbar'
import BlogCard from '../features/Services/Blog/components/BlogCard'
import Footer from '../features/Footer'

function BlogPage() {
  const blogdata = [
    {
      title : "The Top 5 CRM Software for Small Businesses",
      info : "Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p..",
      img1 : "image 45.png",
      img2 : "image 44.png"
    },
    {
      title : "The Top 5 CRM Software for Small Businesses",
      info : "Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p",
      img1 : "image 45.png",
      img2 : "image 44.png"
    },
    {
      title : "The Top 5 CRM Software for Small Businesses",
      info : "Growth is the main obstacle for small businesses. And by growth, we mean greater visibility, more clients, professionals, and—most importantly—revenue. And as is widely known, a lot needs to happen when working toward this p",
      img1 : "image 45.png",
      img2 : "image 44.png"
    }
  ]
  return (
    <div>
        <Navbar></Navbar>

        <div className='p-4 md:p-8'>
            <h1 className='text-2xl font-semibold md:text-3xl xl:text-4xl'>Blog</h1>

            <div>
                {
                  blogdata.map((ele) => (
                    <BlogCard title={ele.title} info={ele.info} img1={ele.img1} img2={ele.img2}></BlogCard>
                  ))
                }
                {/* <BlogCard title={"The Top 10 Travel Websites in India"} info={"There's no denying that we have been travelling for ages, hasn't there?We can unwind, revive, and renew our minds and body when we visit new areas. The deathly fear of waiting in long lines at airports and for a long...Read More"} img1={"image 46.png"} img2={"image 47.png"}></BlogCard>
                <BlogCard title={"Why digital marketing is important for coaching institutes"} info={"The days when students could only get advice from traditional coaching institutes are long gone. The education sector is developing its digital landscape at a time when every industry is considering and implementi...Read More"} img1={"image 51.png"} img2={"image 52.png"}></BlogCard> */}
            </div>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default BlogPage