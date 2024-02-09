import React from 'react'
import ServicesCard from './Services/Home/components/ServicesCard'
import ApprochCard from './Services/Home/components/ApprochCard'
import ContactusCard from './Services/Home/components/ContactusCard'
import Footer from './Footer';
import Info from './Info';
import UserCard from '../features/Services/Home/components/UserCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Home() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };

    // const data = [
    //     {
    //         image:"male@2x.png",
    //         name:"Sourav Joshi",
    //         msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"
    //     },
    //     {
    //         image:"male@2x.png",
    //         name:"Sourav Joshi",
    //         msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"
    //     },
    //     {
    //         image:"male@2x.png",
    //         name:"Sourav Joshi",
    //         msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"
    //     },
    //     {
    //         image:"male@2x.png",
    //         name:"Sourav Joshi",
    //         msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"
    //     },
    //     {
    //         image:"male@2x.png",
    //         name:"Sourav Joshi",
    //         msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"
    //     },
        
    // ]

    return (

        <div className='w-[100%] space-y-10 mt-9'>
            {/* <div className='h-12'>
                <div className='flex'>
                    <img
                        className="sm:my-5 md: lg:top-[160rem] mx-6 my-3 h-[0.1rem] sm:h-0.5 md:h-0.5 lg:h-0.5 w-[3rem] sm:w-[6rem] md:w-[4rem]"
                        alt=""
                        src="/vector-24@2x.png"
                    />
                    <p className="ml-0 sm:ml-0 md:ml-0 lg:ml-0 h-14 md:h-15 lg:h-32 w-32 md:w-32 lg:w-40 text-sm sm:text-2xl md:text-2xl lg:text-2xl font-[Inter] font-semibold whitespace-nowrap ">Trust by 100+ of Companies</p>
                </div>

            </div> */}

            {/* <div className='flex flex-col p-4 space-y-16 justify-center items-center md:flex md:flex-row-reverse'>

                <div className='flex justify-center'>
                    <img className="rounded-2xl w-[75%] md:w-[85%]" src="./alesiakazantcevaxlm6fpwk5qunsplash-1@2x.png" alt="image" />
                </div>

                <div className='md:w-[70%] space-y-8'>
                    <h1 className='text-2xl font-semibold md:text-3xl xl:text-4xl font-[Montserrat]'>Take complex applications simple for users</h1>
                    <p className='text-sm xl:text-xl font-[Inter]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className='flex justify-start space-x-[10%]'>
                            <button className='bg-yellow-400 text-lg font-semibold w-[15%] h-12 rounded-xl text-nowrap'>Lets's talk</button>
                            <button className='bg-white text-lg font-semibold w-[15%] h-12 rounded-xl  '>Projects</button>
                        </div>
                </div>

            </div> */}
            <Info></Info>

            {/* <div>
                <p className='xl:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div> */}

            {/* <div>
                {<div className='flex justify-center space-x-[20%]'>
                    <button className='bg-yellow-400 text-lg font-semibold w-[30%] h-10 rounded-xl '>Lets's talk</button>
                    <button className='bg-yellow-400 text-lg font-semibold w-[30%] h-10 rounded-xl  '>Projects</button>
                </div>}
            </div> */}

            <div className='space-y-5 p-5'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-3xl lg:text-3xl font-[Montserrat]'>Our Services</h1>

                <div className='flex flex-col justify-center items-center space-y-4 sm:grid sm:grid-cols-2 sm:gap-2 sm:place-items-center md:grid md:grid-cols-3 md:gap-2 md:p-4 md:place-items-center'>
                    <ServicesCard title={"Software Development"}></ServicesCard>
                    <ServicesCard title={"App Development"}></ServicesCard>
                    <ServicesCard title={"MANUFACTURING ERP SYSTEM"}></ServicesCard>
                    <ServicesCard title={"HRMS & PAYROLL SYSTEM"}></ServicesCard>
                    <ServicesCard title={"ESPARSE CRM SYSTEM"}></ServicesCard>
                    <ServicesCard title={"SCHOOL & COLLEGES ERP"}></ServicesCard>
                </div>
            </div>

            <div className='bg-white relative space-y-12 space-x-5 p-2 flex flex-col items-center sm:flex-row md:gap-16'>
                <img className="w-[30%] md:w-[18%] lg:w-[16%] absolute right-5 top-5 md:left-60 lg:left-56 xl:left-64" src='./Group 24.svg'/>
                <img className="w-[70%] relative sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[28%] place-items-center" src="./group-25@2x.png" alt="" />

                <div className='space-y-4'>
                    <h2 className='text-xl font-semibold lg:text-3xl font-[Inter]'>We design digital products , brands and Expriences</h2>
                    <p className='text-xs xl:text-lg font-[Inter]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <Link to={"/aboutus"} className='font-[Inter] inline-flex'>See More <spa><img className="inline ml-5" src='./Vector 10.svg'/></spa></Link>
                    {/* <img className="inline ml-[2%]" src='./Vector 10.svg'/> */}
                </div>
            </div>


            <div className='space-y-7 p-4'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-3xl lg:text-3xl font-[Montserrat]'>Our Approch</h1>
                <div className='space-y-7 flex flex-col items-center sm:grid sm:grid-cols-2 sm:place-items-center'>
                    <ApprochCard title={"Discuss and Analysis"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"} img={"Ellipse 3.svg"}></ApprochCard>
                    <ApprochCard title={"Prototyping"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"} img={"Ellipse 4.svg"}></ApprochCard>
                    <ApprochCard title={"Software Specification"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"} img={"Ellipse 5.svg"}></ApprochCard>
                    <ApprochCard title={"Software Development Approach"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"} img={"Ellipse 6.svg"}></ApprochCard>
                    <ApprochCard title={"Rapid Application Development"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"} img={"Ellipse 7.svg"}></ApprochCard>
                    <ApprochCard title={"Launch and Support"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy"} img={"Ellipse 8.svg"}></ApprochCard>
                </div>
            </div>

            <div className='w-[100%]'>
                <div className='bg-black text-white p-5 h-56 space-y-6 sm:flex sm:space-x-16 md:w-[100%]'>
                    <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>The Projects recent we do.</h1>

                    <p className='text-sm md:text-base lg:text-xl'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                </div>
            </div>

            <div className='flex justify-center items-center w-[100%] sm:w-[100%] sm:space-x-10 xl:space-x-32 md:p-10'>
                <div className=' bg-white w-48 p-3 -mt-28 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                    <img src="./screenshot-166-1@2x.png" alt="" />
                </div>

                <div className=' bg-white w-48 p-3 -mt-28 space-y-3 rounded-2xl sm:w-[23rem] sm:ml-[60rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem]'>
                    <img className='' src="./screenshot-168-1@2x.png" alt="" />
                    <img className='' src="./screenshot-169-1@2x.png" alt="" />
                </div>

                <div className=' bg-white w-48 p-3 -mt-28 space-y-3 rounded-2xl sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem] sm'>
                    <img src="./screenshot-171-1@2x.png" alt="" />
                </div>

            </div>


            <div>
                <ContactusCard></ContactusCard>
            </div>

            <div className='w-[100%]'>
                <Slider {...settings} className='ml-10 flex items-center w-[80%] md:w-[90%] lg:w-[95%]'>
                    <UserCard></UserCard>    
                    <UserCard></UserCard>    
                    <UserCard></UserCard>
                    <UserCard></UserCard>  
                    <UserCard></UserCard>   
                    <UserCard></UserCard> 
                </Slider>
            </div>

            <Footer></Footer>

        </div>
    )
}

export default Home

