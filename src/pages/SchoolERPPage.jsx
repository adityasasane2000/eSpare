import React from 'react'
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';
import Card from '../features/Services/CRM/components/CRMcard';

function SchoolERPPage() {
    return (
        <div>
            <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='p-7 space-y-8 mt-8 lg:mt-32'>
                <h1 className='max-w-96 text-2xl sm:text-6xl font-semibold text-nowrap xl:text-8xl '>Why eSparse School ERP?</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-3xl p-7 rounded-3xl md:text-3xl md:w-[215%] lg:text-4xl lg:h-86 lg:w-[220%] xl:text-5xl xl:w-[200%]'>
                    <p>A school ERP is a collection of computer instructions, specially designed to manage the day-to-day administrative tasks of schools. School management software allow schools to digitally monitor the daily activities along with managing all the resources and information on a single platform.In contemporary, most of schools are using school managements software to increase efficiency, productivity, and hence saving a lot of time involved to carry out various administrative operations.</p>
                </div>
            </div>

            <div className='mt-7 lg:mt-32'>
                <div className='bg-black text-white space-y-6 p-7 sm:mt-32 sm:h-96 sm:w-[210%] sm:flex sm:justify-start sm:items-baseline sm:space-x-20 md:h-[33rem] lg:w-[215%] lg:h-[30rem] lg:space-x-44 xl:mt-10 '>
                    <h1 className='text-xl font-semibold sm:text-4xl md:text-6xl md:mt-9 lg:w-[80] xl:text-7xl'>Key Benefits of Sparse School/College ERP</h1>

                    <p className='text-sm sm:text-3xl md:mt-12 md:text-4xl'>
                    The benefits of sPARSE school/College ERP are unlimited. The ERP's user interface is an adventure in and of itself. To ensure the implementation and maintenance of each module, the ERP's modules are interconnected but separate.</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center space-y-12 mt-10 sm:mt-20 sm:w-[210%] sm:h-[150%] md:grid md:grid-cols-3 md:-mt-20 md:gap-8'>
                <Card title={"CONTACT MANAGEMENT"} info={"Manage your clients, prospects, and vendors, as well as all of your contacts and follow-up activities."}></Card>
                <Card title={"SALES PIPELINE MANAGEMENT"} info={"Keep track of the sales leads and prioritise them in the sales process."}></Card>
                <Card title={"REPORTING"} info={"With a single click, create detailed management information reports."}></Card>
            </div>
        </div>
    )
}

export default SchoolERPPage