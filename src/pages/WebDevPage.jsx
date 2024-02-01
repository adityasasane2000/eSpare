import React from 'react'
import FeaturesCard from '../features/Services/web-development/components/FeaturesCard'
import Info from '../features/Info'
import Navbar from '../features/Navbar';
import Footer from '../features/Footer';

function WebDevPage() {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-3xl lg:text-3xl font-[Montserrat]'>Website Development</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-sm md:w-[100%] xl:text-base'>
                    <p>
                        eSparse Matrix Solutions Pvt Ltd is a leading Web & Software development company in Pune which provides best software development services. We help our clients to convert their business processes into the workflow-based application. Having the right web & software for your business will not only solve the issues, which the businesses are facing but also, will have an edge over your competitors
                        We have a team of Software developers who have in-depth knowledge in available software development tools like C, C++, Client/Server Programming, database concepts, MFC, SQL and windows internals C#, Linux/Unix, Web Services, Web Sockets, SVN, etc. Dedicated Developers for each requirements like Portal, Web Portal, CMS, E-Commerce, CRM, ERP, Database, Document Management System Development, Saas Application and Much more.
                    </p>
                </div>
            </div>

            {/* Our Features */}
            <div className='sm:w-[100%] p-6'>
                <h1 className='text-2xl font-semibold p-7 sm:text-4xl md:text-3xl lg:text-3xl font-[Montserrat]'>Our Features</h1>

                <div className='sm:space-x-10 sm:grid sm:grid-cols-3'>
                    <FeaturesCard title={"Responsive Website Design"} img={"Icon06-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"Static Website Design"} img={"Icon07-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"Dynamic Website Design"} img={"Icon07-3.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"CMS"} img={"Scene02.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"API Integration"} img={"Icon01-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                    <FeaturesCard title={"E-Commerce"} img={"Cart-2.png"} text={"Static website designing services provided by the Nextwebi, it’s a website which does not have database good for small businesses."}></FeaturesCard>
                </div>
            </div>

            <div className='w-[100%]'>
                <div className='bg-black text-white p-5 h-56 space-y-6 sm:flex sm:space-x-16 md:h-[11rem] md:w-[100%]'>
                    <h1 className='text-2xl font-semibold md:text-2xl lg:text-3xl'>The Projects recent we do.</h1>

                    <p className='text-xs md:text-sm lg:text-base'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                </div>
            </div>

            <div className='flex justify-center items-center -mt-24 md:-mt-28 w-[100%] sm:w-[100%] sm:space-x-10 xl:space-x-32 md:p-10'>
                    <div className=' bg-white w-48 mt-6 p-3 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                        <img src="./screenshot-166-1@2x.png" alt="" />
                    </div>

                    <div className=' bg-white w-48 mt-6 p-3 space-y-3 rounded-2xl sm:w-[23rem] sm:ml-[60rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                        <img className='' src="./screenshot-168-1@2x.png" alt="" />
                        <img className='' src="./screenshot-169-1@2x.png" alt="" />
                    </div>

                    <div className=' bg-white w-48 mt-6 p-3 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                        <img src="./screenshot-171-1@2x.png" alt="" />
                    </div>

            </div>

            <Footer></Footer>            
        </div>
    )
}

export default WebDevPage