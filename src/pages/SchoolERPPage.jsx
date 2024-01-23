import React from 'react'
import Navbar from '../features/Navbar';
import Card from '../features/Services/CRM/components/CRMcard';
import Info from '../features/Info';

function SchoolERPPage() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-5xl'>Why eSparse School ERP?</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-base md:w-[100%] xl:text-xl'>
                    <p>A school ERP is a collection of computer instructions, specially designed to manage the day-to-day administrative tasks of schools. School management software allow schools to digitally monitor the daily activities along with managing all the resources and information on a single platform.In contemporary, most of schools are using school managements software to increase efficiency, productivity, and hence saving a lot of time involved to carry out various administrative operations.</p>
                </div>
            </div>

            <div className='w-[100%]'>
                <div className='bg-black text-white p-5 space-y-6 mt-16 sm:flex sm:space-x-10 md:h-40 '>
                    <div className='max-w-96'>
                        <h1 className='text-xl font-semibold md:text-xl lg:text-2xl'>Key Benefits of Sparse School/College ERP</h1>
                    </div>

                    <p className='text-sm lg:text-base'>
                    The benefits of sPARSE school/College ERP are unlimited. The ERP's user interface is an adventure in and of itself. To ensure the implementation and maintenance of each module, the ERP's modules are interconnected but separate.
                    </p>
                </div>
            </div>


            <div className='flex flex-col justify-center p-7 items-center space-y-12 md:grid md:grid-cols-3 md:gap-16'>
                <Card title={"CONTACT MANAGEMENT"} info={"Manage your clients, prospects, and vendors, as well as all of your contacts and follow-up activities."}></Card>
                <Card title={"SALES PIPELINE MANAGEMENT"} info={"Keep track of the sales leads and prioritise them in the sales process."}></Card>
                <Card title={"REPORTING"} info={"With a single click, create detailed management information reports."}></Card>
            </div>
        </div>
    )
}

export default SchoolERPPage