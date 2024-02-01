import React from 'react'
import ServicesCard from './Services/Home/components/ServicesCard'
import ApprochCard from './Services/Home/components/ApprochCard'
import ContactusCard from './Services/Home/components/ContactusCard'
import Footer from './Footer';
import Info from './Info';

function Home() {
    return (

        <div className='w-[100%] space-y-10 mt-9'>
            {/* <div className='h-12'>
                <div className='flex'>
                    <img
                        className="sm:my-5 md: lg:top-[160rem] mx-6 my-3 h-[0.1rem] sm:h-0.5 md:h-0.5 lg:h-0.5 w-[3rem] sm:w-[6rem] md:w-[4rem]"
                        alt=""
                        src="/vector-24@2x.png"
                    />
                    <p className="ml-0 sm:ml-0 md:ml-0 lg:ml-0 h-14 md:h-15 lg:h-32 w-32 md:w-32 lg:w-40 text-sm sm:text-2xl md:text-2xl lg:text-2xl font-[Inter] font-semibold whitespace-nowrap ">Trust by 100+ of Companies</p>
                </div>

            </div> */}

            {/* <div className='flex flex-col p-4 space-y-16 justify-center items-center md:flex md:flex-row-reverse'>

                <div className='flex justify-center'>
                    <img className="rounded-2xl w-[75%] md:w-[85%]" src="./alesiakazantcevaxlm6fpwk5qunsplash-1@2x.png" alt="image" />
                </div>

                <div className='md:w-[70%] space-y-8'>
                    <h1 className='text-2xl font-semibold md:text-3xl xl:text-4xl font-[Montserrat]'>Take complex applications simple for users</h1>
                    <p className='text-sm xl:text-xl font-[Inter]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className='flex justify-start space-x-[10%]'>
                            <button className='bg-yellow-400 text-lg font-semibold w-[15%] h-12 rounded-xl text-nowrap'>Lets's talk</button>
                            <button className='bg-white text-lg font-semibold w-[15%] h-12 rounded-xl  '>Projects</button>
                        </div>
                </div>

            </div> */}
            <Info></Info>

            {/* <div>
                <p className='xl:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div> */}

            {/* <div>
                {<div className='flex justify-center space-x-[20%]'>
                    <button className='bg-yellow-400 text-lg font-semibold w-[30%] h-10 rounded-xl '>Lets's talk</button>
                    <button className='bg-yellow-400 text-lg font-semibold w-[30%] h-10 rounded-xl  '>Projects</button>
                </div>}
            </div> */}

            <div className='space-y-5 p-5'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-5xl'>Our Services</h1>

                <div className='flex flex-col justify-center items-center space-y-4 sm:grid sm:grid-cols-2 sm:gap-2 sm:place-items-baseline md:grid md:grid-cols-3 md:gap-2 md:p-4 md:place-items-center'>
                    <ServicesCard></ServicesCard>
                    <ServicesCard></ServicesCard>
                    <ServicesCard></ServicesCard>
                    <ServicesCard></ServicesCard>
                    <ServicesCard></ServicesCard>
                    <ServicesCard></ServicesCard>
                </div>
            </div>

            <div className='bg-white space-y-9 space-x-5 p-3 flex flex-col items-center sm:flex-row'>
                <img className="w-[80%] sm:w-[50%] xl:w-[35%] place-items-center"src="./group-25@2x.png" alt="" />

                <div className='space-y-4'>
                    <h2 className='text-lg font-semibold lg:text-3xl'>We design digital products , brands and Expriences</h2>
                    <p className='text-sm xl:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <p>See More</p>
                </div>
            </div>


            <div className='space-y-7 p-4'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-5xl'>Our Approch</h1>
                <div className='space-y-7 flex flex-col items-center sm:grid sm:grid-cols-2 sm:place-items-center'>
                    <ApprochCard title={"Discuss and Analysis"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"}></ApprochCard>
                    <ApprochCard title={"Prototyping"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"}></ApprochCard>
                    <ApprochCard title={"Software Specification"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"}></ApprochCard>
                    <ApprochCard title={"Software Development Approach"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"}></ApprochCard>
                    <ApprochCard title={"Rapid Application Development"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"}></ApprochCard>
                    <ApprochCard title={"Launch and Support"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"}></ApprochCard>
                </div>
            </div>

            <div className='w-[100%]'>
                <div className='bg-black text-white p-5 h-56 space-y-6 sm:flex sm:space-x-16 md:w-[100%]'>
                    <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>The Projects recent we do.</h1>

                    <p className='text-sm md:text-base lg:text-xl'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                </div>
            </div>

            <div className='flex justify-center items-center w-[100%] sm:w-[100%] sm:space-x-10 xl:space-x-32 md:p-10'>
                <div className=' bg-white w-48 p-3 -mt-28 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                    <img src="./screenshot-166-1@2x.png" alt="" />
                </div>

                <div className=' bg-white w-48 p-3 -mt-28 space-y-3 rounded-2xl sm:w-[23rem] sm:ml-[60rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                    <img className='' src="./screenshot-168-1@2x.png" alt="" />
                    <img className='' src="./screenshot-169-1@2x.png" alt="" />
                </div>

                <div className=' bg-white w-48 p-3 -mt-28 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                    <img src="./screenshot-171-1@2x.png" alt="" />
                </div>

            </div>


            <div>
                <ContactusCard></ContactusCard>
            </div>

            <Footer></Footer>

        </div>
    )
}

export default Home

