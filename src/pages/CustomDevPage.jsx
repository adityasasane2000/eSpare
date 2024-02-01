import React from 'react'
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';
import Info from '../features/Info';
import Footer from '../features/Footer';

function CustomDevPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-xl sm:text-4xl font-semibold md:text-2xl lg:text-3xl font-[Montserrat] md:text-nowrap'>About CUSTOM SOFTWARE DEVELOPMENT SERVICES</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-sm md:w-[100%] xl:text-base'>
                    <p>Due to our extensive expertise, team of trained experts, core industry knowledge, and committed operating procedure, we are a leading custom software development firm that provides top-rated custom software development services. We recognise that every business has unique software specifications, and we provide a wide range of software development services to meet those needs.</p>
                </div>
            </div>


            <div className='p-6 space-y-5'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-3xl font-[Montserrat] md:text-nowrap'>Why Choose Us</h1>
                
                <div className='grid grid-cols-2 place-items-center gap-5 space-x-2 text-base font-semibold md:grid md:grid-cols-4'>
                    
                    <div className='space-y-5 bg-white p-3 rounded-2xl max-w-50 h-[100%] flex flex-col justify-center items-center'>
                        <img className="w-[50%]" src='./solution.svg'></img>
                        <p className='text-sm'>One-stop Solutions</p>
                    </div>

                    <div className='space-y-5 bg-white p-3 rounded-2xl max-w-48 flex flex-col justify-center items-center'>
                        <img className="w-[45%]" src='./Ellipse 10.svg'></img>
                        <p className='text-sm'>Continuous Improvement</p>
                    </div>

                    <div className='space-y-5 bg-white p-3 rounded-2xl max-w-50 flex flex-col justify-center items-center'>
                        <img className="w-[45%]" src='./expertice.svg'></img>
                        <p className='text-sm'>Strong Technical Expertise</p>
                    </div>

                    <div className='space-y-5 bg-white p-3 rounded-2xl max-w-48 flex flex-col justify-center items-center'>
                        <img className="w-[45%]" src='./Ellipse 14.svg'></img>
                        <p className='text-sm'>Priority to Client Satisfaction</p>
                    </div>
                </div>
            </div>
            
            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default CustomDevPage