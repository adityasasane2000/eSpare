import React from 'react'
import IntroCard from '../features/IntroCard'
import Navbar from '../features/Navbar'
import FeaturesCard from '../features/Services/web-development/components/FeaturesCard'

function WebDevPage() {
    return (
        <div className='sm:w-screen'>
            <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='p-7 space-y-10'>
                <h1 className='max-w-96 text-2xl sm:text-6xl font-semibold text-nowrap xl:text-7xl'>Website Development</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-3xl p-7 rounded-3xl md:text-3xl md:w-[215%] lg:text-4xl lg:h-86 lg:w-[220%] xl:text-4xl'>
                    <p>
                        eSparse Matrix Solutions Pvt Ltd is a leading Web & Software development company in Pune which provides best software development services. We help our clients to convert their business processes into the workflow-based application. Having the right web & software for your business will not only solve the issues, which the businesses are facing but also, will have an edge over your competitors
                        We have a team of Software developers who have in-depth knowledge in available software development tools like C, C++, Client/Server Programming, database concepts, MFC, SQL and windows internals C#, Linux/Unix, Web Services, Web Sockets, SVN, etc. Dedicated Developers for each requirements like Portal, Web Portal, CMS, E-Commerce, CRM, ERP, Database, Document Management System Development, Saas Application and Much more.
                    </p>
                </div>
            </div>

            {/* Our Features */}
            <div className='sm:w-[205%] p-6'>
                <h1 className='text-2xl font-semibold p-7 mt-5 sm:text-6xl'>Our Features</h1>

                <div className='sm:space-x-10 sm:grid sm:grid-cols-3'>
                    <FeaturesCard title={"Responsive Website Design"} img={"Icon06-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"Static Website Design"} img={"Icon07-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"Dynamic Website Design"} img={"Icon07-3.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"CMS"} img={"Scene02.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"API Integration"} img={"Icon01-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"E-Commerce"} img={"Cart-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                </div>
            </div>

            <div>
                <div className='bg-black text-white h-44 space-y-6 p-7 mt-16 sm:w-[210%] sm:h-64 sm:flex sm:space-x-16 md:h-72 lg:w-[215%]'>
                    <h1 className='text-xl font-semibold sm:text-5xl md:text-6xl md:mt-9'>The Projects recent we do.</h1>

                    <p className='text-sm sm:text-3xl md:mt-12 md:text-4xl'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                </div>
            </div>

            <div className='sm:flex sm:justify-center sm:items-center sm:w-[200%] sm:ml-9 sm:space-x-20 sm:-mt-20 xl:space-x-56'>
                {/* <div className='flex flex-col justify-center items-center -mt-10 '> */}
                    <div className=' bg-white w-48 mt-6 p-3 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                        <img src="./screenshot-166-1@2x.png" alt="" />
                    </div>
                {/* </div> */}

                {/* <div className='flex flex-col justify-center items-center'> */}
                    <div className=' bg-white w-48 mt-6 p-3 space-y-3 rounded-2xl sm:w-[23rem] sm:ml-[60rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                        <img className='' src="./screenshot-168-1@2x.png" alt="" />
                        <img className='' src="./screenshot-169-1@2x.png" alt="" />
                    </div>
                {/* </div> */}

                {/* <div className='flex flex-col justify-center items-center'> */}
                    <div className=' bg-white w-48 mt-6 p-3 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                        <img src="./screenshot-171-1@2x.png" alt="" />
                    </div>
                {/* </div> */}

            </div>
        </div>
    )
}

export default WebDevPage