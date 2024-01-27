import React from 'react'
import Navbar from '../features/Navbar';
import MarketingCard from '../features/Services/Digital-Marketing/components/MarketingCard';
import Info from '../features/Info';

function DigitalMarketingPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-4xl'>eSparse Matrix 360 Digital Marketing</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-base md:w-[100%] xl:text-xl'>
                <p>Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set.</p>
                </div>
            </div>

            <div className='space-y-2'>
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