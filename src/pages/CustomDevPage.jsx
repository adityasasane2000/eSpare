import React from 'react'
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';
import Info from '../features/Info';

function CustomDevPage() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-4xl'>About CUSTOM SOFTWARE DEVELOPMENT SERVICES</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-base md:w-[100%] xl:text-xl'>
                    <p>Due to our extensive expertise, team of trained experts, core industry knowledge, and committed operating procedure, we are a leading custom software development firm that provides top-rated custom software development services. We recognise that every business has unique software specifications, and we provide a wide range of software development services to meet those needs.</p>
                </div>
            </div>


            <div className='p-6'>
                <h1 className='text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-4xl'>Why Choose Us</h1>
                
                <div className='grid grid-cols-2 p-3 place-items-center gap-10 space-x-2 text-base font-semibold'>
                    
                    <div className='space-y-5 bg-white p-8 rounded-2xl'>
                        <img src='./Group 598.png'></img>
                        <p>One-stop Solutions</p>
                    </div>

                    <div className='space-y-5 bg-white p-8 rounded-2xl'>
                        <img src='./Group 599.png'></img>
                        <p>Continuous Improvement</p>
                    </div>

                    <div className='space-y-5 bg-white p-8 rounded-2xl'>
                        <img src='./Group 599.png'></img>
                        <p>Strong Technical Expertise</p>
                    </div>

                    <div className='space-y-5 bg-white p-8 rounded-2xl'>
                        <img src='./Group 599.png'></img>
                        <p>Priority to Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomDevPage