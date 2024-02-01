import React from 'react';
import IndustriesCard from '../features/Services/app-development/components/IndustriesCard';
import AppCard from '../features/Services/app-development/components/AppCard';
import Info from '../features/Info'
import Navbar from '../features/Navbar';
import Footer
 from '../features/Footer';
function AppDevPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}

            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-3xl lg:text-3xl font-[Montserrat]'>App Development</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-sm md:w-[100%] xl:text-base'>
                    <p>
                    Mobile Apps are making a major contribution to bringing Digital Transformation in the Business World while creating a rapid Buzz. Mobile Apps are one of the crucial parts of the Digital Transformation Strategy, which is efficiently digitalizing your business while improving the engagement of your Target Audience. Having a Business app is a must for every growing company as it provides Great User Experience while allowing you to reach your Tech-savvy Audience. So that our Team eSparse Matrix Solutions Pvt. Ltd. is offering you to unlock interactive mobile experiences for your customers at a budget-friendly price. We assure you that Using iOS mobile apps developed by one of the most trusted Mobile App Development Company in India will lead your company towards healthy finances with higher revenue and increased ROI. Keep your business ahead of Digital Transformation!
                    </p>
                </div>
            </div>

            <div className='w-[100%] mt-10'>
                <div className='bg-black text-white p-5 h-52 space-y-6 sm:flex sm:space-x-16 md:h-[13rem] md:w-[100%]'>
                    <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Industries we Serve</h1>

                    <p className='text-sm md:text-base lg:text-xl'>
                    We partner with a variety of mobile application platforms to help you support all customers in the most efficient way possible, including:
                    </p>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-7 place-items-center p-5 -mt-20 md:grid md:grid-cols-4 lg:grid lg:grid-cols-6'>

                <IndustriesCard name={"Healthcare"}></IndustriesCard>
                <IndustriesCard name={"Logistics"}></IndustriesCard>
                <IndustriesCard name={"Education"}></IndustriesCard>
                <IndustriesCard name={"Retail"}></IndustriesCard>
                <IndustriesCard name={"Finance"}></IndustriesCard>
                <IndustriesCard name={"Productivity"}></IndustriesCard>
                <IndustriesCard name={"Wellness&Fitness"}></IndustriesCard>
                <IndustriesCard name={"Oil & Gas"}></IndustriesCard>
                <IndustriesCard name={"Transportation"}></IndustriesCard>
                <IndustriesCard name={"Travel"}></IndustriesCard>
                <IndustriesCard name={"Social Network"}></IndustriesCard>
                <IndustriesCard name={"Event"}></IndustriesCard>

            </div>

            {/* Our Apps */}
            <div className='p-7 mt-8 space-y-14'>
                 <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-3xl lg:text-3xl font-[Montserrat]'>Our Apps</h1>

                <div className='flex flex-col justify-between items-center space-y-20 '>
                    <AppCard></AppCard>
                    <AppCard></AppCard>
                    <AppCard></AppCard>
                </div>
            </div>

            <Footer></Footer>

        </div>
    )
}

export default AppDevPage