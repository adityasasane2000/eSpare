import React from 'react'

function Info() {
    return (

        <div className='w-[100%] lg:p-5'>
            <div className='h-12'>
                <div className='inline-flex'>
                    <img
                        className="sm:my-5 md: lg:top-[160rem] mx-6 my-3 h-[0.1rem] sm:h-0.5 md:h-0.5 lg:h-0.5 w-[3rem] sm:w-[6rem] md:w-[4rem]"
                        alt=""
                        src="/vector-24@2x.png"
                    />
                    <p className="ml-0 sm:ml-0 md:ml-0 lg:ml-0 h-14 lg:h-32 w-32 md:w-32 lg:w-40 text-sm sm:text-xl md:text-xl lg:text-2xl font-[Inter] font-semibold whitespace-nowrap ">Trust by 100+ of Companies</p>
                </div>

            </div>

            <div className='flex flex-col p-4 space-y-16 justify-center items-center md:flex md:flex-row-reverse '>

                <div className='relative flex justify-center md:flex md:justify-evenly'>
                    <img className="rounded-2xl w-[85%] md:w-[80%] xl:w-[65%]" src="./alesiakazantcevaxlm6fpwk5qunsplash-1@2x.png" alt="image" />
                    <div className='absolute p-1 -top-5 right-2 md:right-6 xl:right-32 bg-white flex justify-center items-center w-32 md:w-36 xl:w-52 xl:p-2 space-x-4 rounded-2xl'>
                        <img className="w-8 h-auto md:w-10" src="./Ellipse 2.svg" alt="" />
                        <p className='text-xs font-[Inter] font-semibold lg:text-sm'><span className=''>100+</span> Completed Projects</p>
                    </div>

                    <div className='absolute p-2 -bottom-10 right-2 md:right-6 xl:right-32 bg-white w-36 md:w-36 lg:w-44 xl:p-2 space-x-3 rounded-2xl space-y-3 flex flex-col justify-center'>
                        <div className='flex space-x-4'>
                            <img className="w-6 h-auto md:w-10" src="./Rectangle 23.svg" alt="" />
                            <p className='text-xs font-[Inter] font-semibold lg:text-sm'>10+ Years of Experince</p>
                        </div>
                        <div className='flex space-x-4 '>
                            <img className="w-6 h-auto -ml-3 md:w-10" src="./Rectangle 24.svg" alt="" />
                            <p className='text-xs font-[Inter] font-semibold lg:text-sm'>85+ Trusted Partners</p>
                        </div>
                        
                    </div>
                    
                </div>

                <div className='md:w-[70%] space-y-8 xl:w-[40%]'>
                    <h1 className='text-2xl font-semibold md:text-3xl xl:text-4xl'>Take complex applications simple for users</h1>
                    <p className='text-sm xl:text-base font-[Inter]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    {/* <div> */}
                    <div className='flex justify-start space-x-[20%]'>
                        <button className='bg-yellow-400 text-lg font-semibold w-auto h-10 rounded-xl text-nowrap p-2'>Lets's talk</button>
                        <button className='bg-white text-lg font-semibold w-auto h-10 rounded-xl p-2'>Projects</button>
                    </div>
                    {/* </div> */}
                </div>

            </div>

        </div>
    )
}

export default Info

