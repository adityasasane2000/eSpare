import React from 'react'
import Info from '../features/Info'
import AboutCard from '../features/Services/About/components/AboutCard'
import EventCard from '../features/Services/About/components/EventCard'
import Navbar from '../features/Navbar';
import ContactusCard from '../features/Services/Home/components/ContactusCard';
import Footer from '../features/Footer';

function AboutUsPage() {
  return (

    <div className='space-y-8'>
        <Navbar></Navbar>
        <Info></Info>

        <div className='p-4 space-y-5 mt-5'>
            <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-3xl'>Why Choose Us</h1>
            <div className='grid grid-cols-2 place-items-center gap-5 p-2 md:grid md:grid-cols-4'>
              
                <AboutCard title={"One-stop Solutions"}></AboutCard>
                <AboutCard title={"One-stop Solutions"}></AboutCard>
                <AboutCard title={"One-stop Solutions"}></AboutCard>
                <AboutCard title={"One-stop Solutions"}></AboutCard>

            </div>
        </div>

        <div className='bg-white space-y-9 space-x-5 p-3 flex flex-col items-center sm:flex-row'>
                <img className="w-[80%] sm:w-[50%] xl:w-[35%] place-items-center"src="./group-25@2x.png" alt="" />

                <div className='space-y-4'>
                    <h2 className='text-lg font-semibold lg:text-3xl'>We design digital products , brands and Expriences</h2>
                    <p className='text-sm xl:text-lg'>     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  </p>
                </div>
          </div>

          <div className='w-[100%]'>
                <div className='bg-black text-white p-5 h-56 space-y-6  sm:flex sm:space-x-16 md:h-40 md:w-[100%]'>
                    <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Esparse Matrix Solutions News & Events</h1>

                    <p className='text-sm md:text-base lg:text-xl'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                </div>

                <div className='space-y-8 -mt-12 sm:grid sm:grid-cols-3 sm:gap-2 sm:place-items-baseline '>
                  <EventCard></EventCard>
                  <EventCard></EventCard>
                  <EventCard></EventCard>
                </div>
          </div>

          <div>
              <ContactusCard></ContactusCard>
          </div>

          <Footer></Footer>
      

    </div>
  )
}

export default AboutUsPage