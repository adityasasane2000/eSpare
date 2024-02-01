import React from 'react'
import Navbar from '../features/Navbar';
import Card from '../features/Services/HRMS/components/Card';
import Info from '../features/Info';
import Footer from '../features/Footer';

function SchoolERPPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-3xl font-[Montserrat] md:text-nowrap'>About ESPARSE CRM</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-sm md:w-[100%] xl:text-base'>
                    <p>A school ERP is a collection of computer instructions, specially designed to manage the day-to-day administrative tasks of schools. School management software allow schools to digitally monitor the daily activities along with managing all the resources and information on a single platform.In contemporary, most of schools are using school managements software to increase efficiency, productivity, and hence saving a lot of time involved to carry out various administrative operations.</p>
                </div>
            </div>

            {/* <div className='w-[100%]'> */}
            <div className='bg-black text-white p-5 h-[25rem] space-y-6 sm:flex sm:items-baseline md:h-[20rem] md:w-[100%] xl:h-[30rem]'>
                <div className='lg:w-[90%] xl:w-[90%]'>
                    <h1 className='text-xl font-semibold md:text-xl lg:text-2xl xl:text-4xl'>Key Benefits of Sparse School/College ERP</h1>
                </div>

                <p className='text-sm lg:text-sm xl:text-lg'>
                    The benefits of sPARSE school/College ERP are unlimited. The ERP's user interface is an adventure in and of itself. To ensure the implementation and maintenance of each module, the ERP's modules are interconnected but separate.
                </p>
            </div>
            {/* </div> */}


            {/* <div className='flex flex-col justify-center p-7 items-center space-y-12 md:grid md:grid-cols-3 md:gap-16'>
                <Card title={"RECRUITMENT"} info={"Sparse School/College ERP is a cloud-based solution that provides cloud storage that can be accessed anytime, anywhere, and on any device, removing the need for schools to invest in and maintain expensive infrastructure and servers, reducing overall costs."}></Card>
                <Card title={"PEFORM MANAGEMENT"} info={"Parents and school officials will access real-time tracking data on students and school transportation. During pickup and drop, parents receive SMS updates with the time and place."}></Card>
                <Card title={"EMPLOYEE SELF SERVICES"} info={"Our customer service team is always available to answer your questions and assist your organization."}></Card>
            </div> */}

            <div className='p-5'>

                <div className='-mt-[40%] mb-10 md:w-[30%] md:-mt-[23%] lg:w-[30%] lg:-mt-[18%] xl:w-[30%] xl:-mt-[20%]'>
                    <Card title={"RECRUITMENT"} info={"HR may receive input from different agencies on employee preparation, yearly and ad - hoc personnel needs. The HRMS assists management workers with handling resume databases, credentials, and interacts with career portals."}></Card>
                </div>

                <div className='mb-10 md:w-[30%] md:-mt-[30%] md:ml-[35%] lg:w-[30%] lg:-mt-[23%] xl:w-[30%] xl:-mt-[20%]'>
                    <Card title={"PEFORM MANAGEMENT"} info={"Esparse HRMS aids in the development of employee evaluation records on a regular basis. Any employee's efficiency parameters can be identified using HRMS. Promotions, preparation, and right-sizing will all benefit from the data."}></Card>
                </div>

                <div className='mb-10 md:w-[30%] md:-mt-[30%] md:ml-[70%] lg:w-[30%] lg:-mt-[18%] xl:w-[30%] xl:-mt-[16%]'>
                    <Card title={"EMPLOYEE SELF SERVICES"} info={"Employee self-services such as copying pay stubs, arranging for tax savings and investments, scheduling trips, internal communications, and outdoor activities can all be efficiently managed with adjustable schedules."}></Card>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default SchoolERPPage