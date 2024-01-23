import React from 'react'
import Navbar from '../features/Navbar'
import Card from '../features/Services/HRMS/components/Card'
import Info from '../features/Info'

function HRMSPage() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-5xl'>About eSparse HRMS Solutions</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-base md:w-[100%] xl:text-xl'>
                    <p>
                    A modern organization's most critical and cost-intensive role is human resource management. The HR department is often burdened with cumbersome documentation and monotonous duties due to its various roles, which include recruiting, resource control, and employee grievance redressal. Esparse HRMS Solutions has developed a formidable reputation for delivering customised HRMS solutions. Esparse HRMS is a one-stop shop for all HR needs, including recruiting, employee database management, leave tracking, payroll management, preparation, and success management. Since each client is different in terms of team size, processes, and specifications, each HRMS Module is customised to meet the specific needs of the client customers.
                    </p>
                </div>
            </div>


            <div className='w-[100%]'>
                <div className='bg-black text-white p-5 space-y-6 mt-16 sm:flex sm:space-x-16 md:h-40 md:w-[100%]'>
                    <h1 className='text-xl font-semibold md:text-xl lg:text-3xl'>Esparse HRMS's Solutions Key Features</h1>

                    <p className='text-sm lg:text-lg'>
                        Human resources are unique and provide a significant competitive edge to every business. In today's demanding climate, attracting and keeping the best workforce has been the most difficult task. The Esparse HRMS allows smooth incorporation between departmental, intra-departmental, and entity levels.
                    </p>
                </div>
            </div>


            <div className='flex flex-col justify-center items-center space-y-16 mt-20 md:flex md:flex-row'>
                <Card title={"RECRUITMENT"} info={"HR may receive input from different agencies on employee preparation, yearly and ad - hoc personnel needs. The HRMS assists management workers with handling resume databases, credentials, and interacts with career portals."}></Card>
                <Card title={"PEFORM MANAGEMENT"} info={"Esparse HRMS aids in the development of employee evaluation records on a regular basis. Any employee's efficiency parameters can be identified using HRMS. Promotions, preparation, and right-sizing will all benefit from the data."}></Card>
                <Card title={"EMPLOYEE SELF SERVICES"} info={"Employee self-services such as copying pay stubs, arranging for tax savings and investments, scheduling trips, internal communications, and outdoor activities can all be efficiently managed with adjustable schedules."}></Card>
            </div>
        </div>
    )
}

export default HRMSPage