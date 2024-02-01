import React from 'react'
import Navbar from '../features/Navbar';
import MarketingCard from '../features/Services/Digital-Marketing/components/MarketingCard';
import Info from '../features/Info';
import Footer from '../features/Footer';

function DigitalMarketingPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-3xl font-[Montserrat] md:text-nowrap'>eSparse Matrix 360 Digital Marketing</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-sm md:w-[100%] xl:text-base'>
                <p>Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set Lorem lpsum dollae set.</p>
                </div>
            </div>

            <div className='space-y-2'>
                <MarketingCard title={"Search Engine Optimization (SEO)"} info={"We can assist you in achieving greater organic ranks and more visibility in search results through careful keyword research and white hat SEO techniques. Our digital marketing agency conducts intensive keyword research, executes on-page and off-page optimization, and uses Google Search Console to track your outcomes. As part of your digital marketing solutions, these approaches allow us to acquire high-quality leads and traffic while also increasing conversions."} img1={"image 66.png"} img2={"image 65.png"}></MarketingCard>
                <MarketingCard title={"Local SEO"} info={"Consumers searching for local companies online are more likely to call or visit a store within 24 hours, according to statistics. With eSparse digital marketing services, you can attract your ideal customers and generate more leads and revenue. Our digital marketing agency maintains consistency in your name, address, and phone number (NAP), improves your location pages, and builds local links. We also use social media sites to keep in front of your target audiences."} img1={"marketing1.png"} img2={"marketing2.png"}></MarketingCard>
                <MarketingCard title={"Technical SEO"} info={"With on-point technical SEO and digital marketing, you can build a strong online foundation. Crawl error reports are generated, HTTPS status codes are checked, site speed is optimised, redirects are audited, and duplicate material is removed by our technical SEO experts. We improve the crawlability and indexability of your website in this way. Depending on your needs and objectives, we may also add structured data markup to your website and assist with site migration."} img1={"marketing3.png"} img2={"marketing4.png"}></MarketingCard>
                <MarketingCard title={"Social Media Marketing"} info={"Are you ready to grow your social media audience and promote to them? We create social media campaigns to help your company expand and engage its audience. Our digital marketing agency determines your objectives, analyzes your competitors, and analyzes your customers' online activity. We create personalized social media brand management and paid advertising plans for your business based on data and analytics."} img1={"marketing5.png"} img2={"marketing6.png"}></MarketingCard>
                <MarketingCard title={"Email Marketing"} info={"How many business emails do you delete on a daily basis? Choose eSparse 360 Digital Marketing, and together, we'll make your email marketing campaigns stand out and work for you. We generate customized email newsletters to keep your emails from ending up in spam folders and to inspire your consumers to take the action you want them to take. Our team develops a curiosity gap in your emails, produces your subscriber list, tests email campaigns before they go out, uses power words in your content, and builds a subscriber list."} img1={"marketing8.png"} img2={"marketing7.png"}></MarketingCard>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default DigitalMarketingPage