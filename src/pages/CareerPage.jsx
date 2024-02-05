import React from 'react'
import Info from '../features/Info'
import JobCard from '../features/Services/Career/Components/JobCard'
import Navbar from '../features/Navbar'
import Footer from '../features/Footer'

function CareerPage() {
  return (
    <div>
        <Navbar></Navbar>
        <Info></Info>

        <div className='mt-10 p-4'>
        <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold text-nowrap md:text-3xl lg:text-3xl font-[Montserrat]'>Recommended Job :</h1>
            <div className='grid grid-cols-1 place-items-center space-y-7 mt-5 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3'>
                <JobCard time={"Full Time"} role={"Website Developer"} expr={"1-2 year experience"}></JobCard>
                <JobCard time={"Full Time"} role={"Flutter Developer"} expr={"1-2 year experience"}></JobCard>
                <JobCard time={"Full Time"} role={"UI /UX Internship"} expr={"1-2 year experience"}></JobCard>
                <JobCard time={"Full Time"} role={"Website Developer"} expr={"1-2 year experience"}></JobCard>
                <JobCard time={"Full Time"} role={"Flutter Developer"} expr={"1-2 year experience"}></JobCard>
                <JobCard time={"Full Time"} role={"UI /UX Internship"} expr={"1-2 year experience"}></JobCard>
            </div>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default CareerPage