import React from 'react'
import Navbar from '../features/Navbar'
import IntroCard from '../features/IntroCard'
import Card from '../features/Services/HRMS/components/Card'

function HRMSPage() {
    return (
        <div>
            <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='p-7 space-y-10 xl:p-24'>
                <h1 className='max-w-96 text-2xl sm:text-6xl font-semibold text-nowrap xl:text-7xl'>About eSparse HRMS Solutions</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-3xl p-7 rounded-3xl md:text-3xl md:w-[215%] lg:text-4xl lg:h-86 lg:w-[220%] xl:text-4xl xl:w-[220%]'>
                    <p>
                        A modern organization's most critical and cost-intensive role is human resource management. The HR department is often burdened with cumbersome documentation and monotonous duties due to its various roles, which include recruiting, resource control, and employee grievance redressal. Esparse HRMS Solutions has developed a formidable reputation for delivering customised HRMS solutions. Esparse HRMS is a one-stop shop for all HR needs, including recruiting, employee database management, leave tracking, payroll management, preparation, and success management. Since each client is different in terms of team size, processes, and specifications, each HRMS Module is customised to meet the specific needs of the client customers.
                    </p>
                </div>
            </div>

            <div>
                <div className='bg-black text-white space-y-6 p-7 sm:mt-32 sm:h-96 sm:w-[210%] sm:flex sm:justify-center sm:items-center sm:space-x-20 lg:w-[215%] lg:h-[30rem] lg:space-x-44 xl:mt-10'>
                    <h1 className='text-xl font-semibold sm:text-4xl md:text-6xl md:mt-9 lg:w-[80]'>Esparse HRMS's Solutions Key Features</h1>

                    <p className='text-sm sm:text-3xl md:mt-12 md:text-4xl'>
                    Human resources are unique and provide a significant competitive edge to every business. In today's demanding climate, attracting and keeping the best workforce has been the most difficult task. The Esparse HRMS allows smooth incorporation between departmental, intra-departmental, and entity levels.                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center space-y-16 mt-20 sm:mt-20 sm:w-[210%] sm:h-[150%] md:flex md:flex-row md:mx-auto'>
                <Card title={"RECRUITMENT"} info={"HR may receive input from different agencies on employee preparation, yearly and ad - hoc personnel needs. The HRMS assists management workers with handling resume databases, credentials, and interacts with career portals."}></Card>
                <Card title={"PEFORM MANAGEMENT"} info={"Esparse HRMS aids in the development of employee evaluation records on a regular basis. Any employee's efficiency parameters can be identified using HRMS. Promotions, preparation, and right-sizing will all benefit from the data."}></Card>
                <Card title={"EMPLOYEE SELF SERVICES"} info={"Employee self-services such as copying pay stubs, arranging for tax savings and investments, scheduling trips, internal communications, and outdoor activities can all be efficiently managed with adjustable schedules."}></Card>
            </div>
        </div>
    )
}

export default HRMSPage