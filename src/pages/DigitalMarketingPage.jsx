import React from 'react'
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';
import MarketingCard from '../features/Services/Digital-Marketing/components/MarketingCard';

function DigitalMarketingPage() {
    return (
        <div>
            <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='max-w-full p-7 space-y-8 mt-8 lg:mt-32'>
                <h1 className=' text-2xl sm:text-6xl font-semibold xl:text-8xl '>eSparse Matrix 360 Digital Marketing</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-3xl p-7 rounded-3xl md:text-3xl md:w-[215%] lg:text-4xl lg:h-86 lg:w-[220%] xl:text-5xl xl:w-[200%]'>
                    <p>Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set.</p>
                </div>
            </div>

            <div>
                <MarketingCard title={"Search Engine Optimization (SEO)"} info={"We can assist you in achieving greater organic ranks and more visibility in search results through careful keyword research and white hat SEO techniques. Our digital marketing agency conducts intensive keyword research, executes on-page and off-page optimization, and uses Google Search Console to track your outcomes. As part of your digital marketing solutions, these approaches allow us to acquire high-quality leads and traffic while also increasing conversions."} img1={"image 66.png"} img2={"image 65.png"}></MarketingCard>
                <MarketingCard title={"Search Engine Optimization (SEO)"} info={"We can assist you in achieving greater organic ranks and more visibility in search results through careful keyword research and white hat SEO techniques. Our digital marketing agency conducts intensive keyword research, executes on-page and off-page optimization, and uses Google Search Console to track your outcomes. As part of your digital marketing solutions, these approaches allow us to acquire high-quality leads and traffic while also increasing conversions."} img1={"image 66.png"} img2={"image 65.png"}></MarketingCard>
                <MarketingCard title={"Search Engine Optimization (SEO)"} info={"We can assist you in achieving greater organic ranks and more visibility in search results through careful keyword research and white hat SEO techniques. Our digital marketing agency conducts intensive keyword research, executes on-page and off-page optimization, and uses Google Search Console to track your outcomes. As part of your digital marketing solutions, these approaches allow us to acquire high-quality leads and traffic while also increasing conversions."} img1={"image 66.png"} img2={"image 65.png"}></MarketingCard>
                <MarketingCard title={"Search Engine Optimization (SEO)"} info={"We can assist you in achieving greater organic ranks and more visibility in search results through careful keyword research and white hat SEO techniques. Our digital marketing agency conducts intensive keyword research, executes on-page and off-page optimization, and uses Google Search Console to track your outcomes. As part of your digital marketing solutions, these approaches allow us to acquire high-quality leads and traffic while also increasing conversions."} img1={"image 66.png"} img2={"image 65.png"}></MarketingCard>
                <MarketingCard title={"Search Engine Optimization (SEO)"} info={"We can assist you in achieving greater organic ranks and more visibility in search results through careful keyword research and white hat SEO techniques. Our digital marketing agency conducts intensive keyword research, executes on-page and off-page optimization, and uses Google Search Console to track your outcomes. As part of your digital marketing solutions, these approaches allow us to acquire high-quality leads and traffic while also increasing conversions."} img1={"image 66.png"} img2={"image 65.png"}></MarketingCard>
            </div>
        </div>
    )
}

export default DigitalMarketingPage