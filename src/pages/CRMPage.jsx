import React from 'react'
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';
import Card from '../features/Services/CRM/components/CRMcard';

function CRMPage() {
    return (
        <div>
            <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='p-7 space-y-8 mt-8 lg:mt-32'>
                <h1 className='max-w-96 text-2xl sm:text-6xl font-semibold text-nowrap xl:text-8xl '>About ESPARSE CRM</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-3xl p-7 rounded-3xl md:text-3xl md:w-[215%] lg:text-4xl lg:h-86 lg:w-[220%] xl:text-5xl xl:w-[200%]'>
                    <p>Esparse CRM software creates new tasks for your team. Automate everything from appointment reminders to follow-up emails by putting your calendar online. With complete contact views, deal tracks, real-time DATA, and other features, you can achieve a significantly higher ROI. In the Sales CRM, the contact timeline contains all of the relevant details about the customer's progres.                    </p>
                </div>
            </div>

            <div className='mt-7 lg:mt-32'>
                <div className='bg-black text-white space-y-6 p-7 sm:mt-32 sm:h-96 sm:w-[210%] sm:flex sm:justify-start sm:items-baseline sm:space-x-20 md:h-[33rem] lg:w-[215%] lg:h-[30rem] lg:space-x-44 xl:mt-10 '>
                    <h1 className='text-xl font-semibold sm:text-4xl md:text-6xl md:mt-9 lg:w-[80] xl:text-7xl'>Esparse HRMS's Solutions Key Features</h1>

                    <p className='text-sm sm:text-3xl md:mt-12 md:text-4xl'>
                    Human resources are unique and provide a significant competitive edge to every business. In today's demanding climate, attracting and keeping the best workforce has been the most difficult task. The Esparse HRMS allows smooth incorporation between departmental, intra-departmental, and entity levels.                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center space-y-12 mt-10 sm:mt-20 sm:w-[210%] sm:h-[150%] md:grid md:grid-cols-3 md:-mt-20 md:gap-8'>
                <Card title={"CONTACT MANAGEMENT"} info={"Manage your clients, prospects, and vendors, as well as all of your contacts and follow-up activities."}></Card>
                <Card title={"SALES PIPELINE MANAGEMENT"} info={"Keep track of the sales leads and prioritise them in the sales process."}></Card>
                <Card title={"REPORTING"} info={"With a single click, create detailed management information reports."}></Card>
                <Card title={"SALES QUOTATIONS"} info={"Create quotes based on your business opportunities and deliver them to your clients directly."}></Card>
                <Card title={"IMPORTING LEADS FOR EXCEL"} info={"Can you have a large amount of data to import? You can conveniently import data using our bulk import function by simply importing an excel file."}></Card>
                <Card title={"USER ROLES AND PROFILES"} info={"You will control which users in your company have access to which data and fields. You have full control of what things they can see and what decisions they can take."}></Card>
            </div>

        </div>
    )
}

export default CRMPage