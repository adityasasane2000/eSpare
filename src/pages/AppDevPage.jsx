import React from 'react';
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';
import IndustriesCard from '../features/Services/app-development/components/IndustriesCard';
import AppCard from '../features/Services/app-development/components/AppCard';

function AppDevPage() {
    return (
        <div>
            <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='p-7 space-y-10'>
                <h1 className='max-w-96 text-2xl sm:text-6xl font-semibold text-nowrap'>App Development</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-2xl p-6 rounded-3xl'>
                    <p>
                    Mobile Apps are making a major contribution to bringing Digital Transformation in the Business World while creating a rapid Buzz. Mobile Apps are one of the crucial parts of the Digital Transformation Strategy, which is efficiently digitalizing your business while improving the engagement of your Target Audience. Having a Business app is a must for every growing company as it provides Great User Experience while allowing you to reach your Tech-savvy Audience. So that our Team eSparse Matrix Solutions Pvt. Ltd. is offering you to unlock interactive mobile experiences for your customers at a budget-friendly price. We assure you that Using iOS mobile apps developed by one of the most trusted Mobile App Development Company in India will lead your company towards healthy finances with higher revenue and increased ROI. Keep your business ahead of Digital Transformation!
                    </p>
                </div>
            </div>

            <div>
                <div className='bg-black text-white h-44 space-y-6 p-7 mt-10 sm:w-[210%] sm:h-72 sm:flex sm:space-x-20 '>
                    <h1 className='text-xl font-semibold sm:text-6xl sm:text-nowrap sm:mt-9'>Industries we Serve</h1>

                    <p className='text-sm sm:text-3xl'>
                            We partner with a variety of mobile application platforms to help you support all customers in the most efficient way possible, including:
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-8 place-items-center sm:grid sm:grid-cols-4 sm:gap-24 sm:place-items-center sm:w-[84rem] sm:p-9'>

                <IndustriesCard></IndustriesCard>
                <IndustriesCard></IndustriesCard>
                <IndustriesCard></IndustriesCard>
                <IndustriesCard></IndustriesCard>
                <IndustriesCard></IndustriesCard>
                <IndustriesCard></IndustriesCard>
                <IndustriesCard></IndustriesCard>
                <IndustriesCard></IndustriesCard>

            </div>

            {/* Our Apps */}
            <div className='p-7 mt-8 space-y-14'> 
                <h1 className='text-2xl font-bold'>Our Apps</h1>

                <AppCard></AppCard>
                <AppCard></AppCard>
                <AppCard></AppCard>
            </div>
            
        </div>
    )
}

export default AppDevPage