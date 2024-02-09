import React from 'react'
import Navbar from '../features/Navbar'
import Info from '../features/Info'
import Footer from '../features/Footer'

const duties = [
    {
        key: `Revise, edit, proofread & optimize web content`
    },
    {
        key: "Work with cross-functionally to enhance overall user experience of our platforms"
    }, {
        key: "Own various design tasks involved in the web development life cycle from start to finish Qualifications"
    }, {
        key: "Architect, design, develop, and assist in the development of web application to support internal and external clients and stakeholders"
    }, {
        key: "Collaborate with a team of developers to design end-to-end, industry-leading systems and solutions"
    }, {
        key: "Rapidly prototype new ideas, concepts, and designs"
    },
]

const qualification = [
    {
        key: "B.Sc /Diploma /BE / MCA / MCS in IT or Computer Science or related equivalent degree or qualification"
    },
    {
        key: "Must have 1-5 year of experience in developing web application using PHP technologies. Fresher can also apply."
    },
    {
        key: "Hands on experience and extensive knowledge on JavaScript,REST, Websockets, Typescript, CSS2/CSS3 HTML/HTML5 and jQuery."
    }
]



function JobDescription() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            <div className='space-y-8 mt-5 p-4'>
                <h1 className='font-bold text-xl'>WebSite Developer</h1>

                <div className='lg:flex lg:gap-10'>
                    <div className='bg-white w-[70%] md:w-[50%] h-[40%] flex flex-col p-4 space-y-2 rounded-3xl'>
                        <h3 className='text-lg font-semibold'>Job Information</h3>

                        <h4 className='font-[Inter] text-sm'>Employee Type</h4>
                        <p className='font-[Inter] text-xs text-blue-500'>Full-time</p>

                        <h4 className='font-[Inter] text-sm'>Job Type</h4>
                        <p className='font-[Inter] text-xs text-blue-500'>WebSite Developer</p>
                    </div>

                    <div className='p-4 space-y-6'>
                        <h3 className='text-lg font-semibold font-[Inter]'>Job Description :</h3>
                        <p className='text-xs font-[Inter]'>The ideal candidate is a creative problem solver who will work in coordination with cross-functional teams to design, develop, and maintain our next generation websites and web tools. You must be comfortable working as part of a team while taking the initiative to take lead on new innovations and projects.</p>

                        <ul className=''>
                            <h3 className='text-lg font-semibold font-[Inter]'>Responsibilities and Duties:</h3>
                            <ul>
                                {duties.map((ele) =>(
                                  <li className='text-xs font-[Inter]'><span className='text-xl'>•</span>{ele.key}</li>  
                                ))}
                            </ul>
                        </ul>

                        <ul>
                            <h3 className='text-lg font-semibold font-[Inter]'>Required Qualifications:</h3>
                            {qualification.map((ele) =>(
                                  <li className='text-xs font-[Inter]'><span className='text-xl'>•</span>{ele.key}</li>  
                            ))}
                        </ul>
                        
                        <h3 className='text-lg font-semibold font-[Inter]'>Skills :</h3>
                        <p className='text-xs font-[Inter]'>JavaScript, CSS2/CSS3 HTML/HTML5 ,jQuery,Code Ignitor, Zend, laravel ,ASP. Net, My SQL,PHP</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default JobDescription