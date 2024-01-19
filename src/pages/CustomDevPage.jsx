import React from 'react'
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';

function CustomDevPage() {
    return (
        <div>
            <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='max-w-full p-7 space-y-8 mt-8 lg:mt-32'>
                <h1 className=' text-2xl sm:text-6xl font-semibold xl:text-8xl '>About CUSTOM SOFTWARE DEVELOPMENT SERVICES</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-3xl p-7 rounded-3xl md:text-3xl md:w-[215%] lg:text-4xl lg:h-86 lg:w-[220%] xl:text-5xl xl:w-[200%]'>
                    <p>Due to our extensive expertise, team of trained experts, core industry knowledge, and committed operating procedure, we are a leading custom software development firm that provides top-rated custom software development services. We recognise that every business has unique software specifications, and we provide a wide range of software development services to meet those needs.</p>
                </div>
            </div>

            <div className='p-6'>
                <h1 className='text-2xl font-bold'>Why Choose Us</h1>
                
                <div className='grid grid-cols-2 p-3 place-items-center gap-10 space-x-2 text-sm'>
                    
                    <div className='space-y-5 bg-white w-32 h-40 p-8 rounded-2xl'>
                        <img src='./Group 598.png'></img>
                        <p>One-stop Solutions</p>
                    </div>

                    <div className='space-y-5 bg-white w-32 h-40 p-8 rounded-2xl'>
                        <img src='./Group 599.png'></img>
                        <p>Continuous Improvement</p>
                    </div>

                    <div className='space-y-5 bg-white w-32 h-40 p-8 rounded-2xl'>
                        <img src='./Group 599.png'></img>
                        <p>Strong Technical Expertise</p>
                    </div>

                    <div className='space-y-5 bg-white w-32 h-40 p-8 rounded-2xl'>
                        <img src='./Group 599.png'></img>
                        <p>Priority to Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomDevPage