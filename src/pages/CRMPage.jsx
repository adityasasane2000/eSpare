import React from 'react'
import Navbar from '../features/Navbar';
import Card from '../features/Services/CRM/components/CRMcard';
import Info from '../features/Info';
import Footer from '../features/Footer';

function CRMPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-3xl font-[Montserrat] md:text-nowrap'>About ESPARSE CRM</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-sm md:w-[100%] xl:text-base'>
                    <p>
                        Esparse CRM software creates new tasks for your team. Automate everything from appointment reminders to follow-up emails by putting your calendar online. With complete contact views, deal tracks, real-time DATA, and other features, you can achieve a significantly higher ROI. In the Sales CRM, the contact timeline contains all of the relevant details about the customer's progres.                    </p>
                </div>
            </div>

            <div className='bg-black text-white p-5 h-[25rem] space-y-6 sm:flex sm:items-baseline md:h-[20rem] md:w-[100%] xl:h-[30rem]'>
                <div className='md:w-[150%]'>
                    <h1 className='text-xl font-semibold md:text-xl lg:text-3xl xl:text-4xl'>Esparse CRM Key Features</h1>
                </div>

                <p className='text-sm lg:text-sm xl:text-base'>
                    Human resources are unique and provide a significant competitive edge to every business. In today's demanding climate, attracting and keeping the best workforce has been the most difficult task. The Esparse HRMS allows smooth incorporation between departmental, intra-departmental, and entity levels.
                </p>
            </div>

            {/* <div className='flex flex-col justify-center items-center space-y-12 -mt-[40%] p-5 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 md:gap-8'>
                <Card title={"CONTACT MANAGEMENT"} info={"Manage your clients, prospects, and vendors, as well as all of your contacts and follow-up activities."}></Card>
                <Card title={"SALES PIPELINE MANAGEMENT"} info={"Keep track of the sales leads and prioritise them in the sales process."}></Card>
                <Card title={"REPORTING"} info={"With a single click, create detailed management information reports."}></Card>
                <Card title={"SALES QUOTATIONS"} info={"Create quotes based on your business opportunities and deliver them to your clients directly."}></Card>
                <Card title={"IMPORTING LEADS FOR EXCEL"} info={"Can you have a large amount of data to import? You can conveniently import data using our bulk import function by simply importing an excel file."}></Card>
                <Card title={"USER ROLES AND PROFILES"} info={"You will control which users in your company have access to which data and fields. You have full control of what things they can see and what decisions they can take."}></Card>
            </div> */}

            <div className='p-5'>

                <div className='-mt-[40%] mb-10 md:w-[30%] md:-mt-[23%] lg:w-[30%] lg:-mt-[16%] xl:w-[30%] xl:-mt-[23%]'>
                    <Card title={"CONTACT MANAGEMENT"} info={"Manage your clients, prospects, and vendors, as well as all of your contacts and follow-up activities."}></Card>
                </div>

                <div className='mb-10 md:w-[30%] md:-mt-[20%] md:ml-[35%] lg:w-[30%] lg:-mt-[20%] xl:w-[30%] xl:-mt-[10%]'>
                    <Card title={"SALES PIPELINE MANAGEMENT"} info={"Keep track of the sales leads and prioritise them in the sales process."}></Card>
                </div>

                <div className='mb-10 md:w-[30%] md:-mt-[18%] md:ml-[70%] lg:w-[30%] lg:-mt-[20%] xl:w-[30%] xl:-mt-[8%]'>
                    <Card title={"REPORTING"} info={"With a single click, create detailed management information reports."}></Card>
                </div>

                <div className='mb-10 md:w-[30%] md:-mt-[18%] lg:w-[30%] lg:-mt-[5%] xl:w-[30%] xl:-mt-[5%]'>
                    <Card title={"SALES QUOTATIONS"} info={"Create quotes based on your business opportunities and deliver them to your clients directly."}></Card>
                </div>

                <div className='mb-10 md:w-[30%] md:-mt-[20%] md:ml-[35%] lg:w-[30%] lg:-mt-[16%] xl:w-[30%] xl:-mt-[10%]'>
                    <Card title={"IMPORTING LEADS FOR EXCEL"} info={"Can you have a large amount of data to import? You can conveniently import data using our bulk import function by simply importing an excel file."}></Card>
                </div>

                <div className='mb-10 md:w-[30%] md:-mt-[20%] md:ml-[70%] lg:w-[30%] lg:-mt-[15%] xl:w-[30%] xl:-mt-[8%]'>
                    <Card title={"USER ROLES AND PROFILES"} info={"You will control which users in your company have access to which data and fields. You have full control of what things they can see and what decisions they can take."}></Card>
                </div>

            </div>

            <Footer></Footer>

        </div>
    )
}

export default CRMPage