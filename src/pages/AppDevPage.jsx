import React from 'react';
import IndustriesCard from '../features/Services/app-development/components/IndustriesCard';
import AppCard from '../features/Services/app-development/components/AppCard';
import Info from '../features/Info'

function AppDevPage() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Info></Info>

            {/* Info */}

            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-5xl'>App Development</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-base md:w-[100%] xl:text-xl'>
                    <p>
                    Mobile Apps are making a major contribution to bringing Digital Transformation in the Business World while creating a rapid Buzz. Mobile Apps are one of the crucial parts of the Digital Transformation Strategy, which is efficiently digitalizing your business while improving the engagement of your Target Audience. Having a Business app is a must for every growing company as it provides Great User Experience while allowing you to reach your Tech-savvy Audience. So that our Team eSparse Matrix Solutions Pvt. Ltd. is offering you to unlock interactive mobile experiences for your customers at a budget-friendly price. We assure you that Using iOS mobile apps developed by one of the most trusted Mobile App Development Company in India will lead your company towards healthy finances with higher revenue and increased ROI. Keep your business ahead of Digital Transformation!
                    </p>
                </div>
            </div>

            <div className='w-[100%]'>
                <div className='bg-black text-white p-5 h-40 space-y-6 mt-16 sm:flex sm:space-x-16 md:h-40 md:w-[100%]'>
                    <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Industries we Serve</h1>

                    <p className='text-sm md:text-base lg:text-xl'>
                    We partner with a variety of mobile application platforms to help you support all customers in the most efficient way possible, including:
                    </p>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-8 place-items-center mt-8'>

                <IndustriesCard></IndustriesCard>
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
                 <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-5xl'>Our Apps</h1>

                <div className='flex flex-col justify-between items-center space-y-20'>
                    <AppCard></AppCard>
                    <AppCard></AppCard>
                    <AppCard></AppCard>
                </div>
            </div>

        </div>
    )
}

export default AppDevPage