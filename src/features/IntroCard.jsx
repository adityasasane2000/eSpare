import React from 'react'

function IntroCard() {
    return (
        <>
            <div className='pt-16 sm:pt-24 md:pt-28'>
                <div className='flex -space-x-4'>
                    <img
                        className="sm:my-5 md: lg:top-[160rem] mx-6 my-3 h-[0.1rem] sm:h-0.5 md:h-0.5 lg:h-0.5 w-[3rem] sm:w-[6rem] md:w-[4rem]"
                        alt=""
                        src="/vector-24@2x.png"
                    />
                    <p className="ml-0 sm:ml-0 md:ml-0 lg:ml-0 h-14 md:h-15 lg:h-32 w-32 md:w-32 lg:w-40 text-sm sm:text-2xl md:text-3xl lg:text-6xl font-[Inter] font-semibold whitespace-nowrap ">Trust by 100+ of Companies</p>
                </div>

            </div>


            <div className=''>
                <div className='w-full flex flex-col sm:flex-row md:flex-row sm:my-14 sm:space-x-20 sm:w-screen sm:mr-40'>
                    <div className='left w-50% items-center'>
                        <h1 className='text-center sm:text-left sm:ml-9 text-3xl sm:text-7xl font-medium p-3 font-[Montserrat]'>Take complex applications simple for users</h1>
                    </div>

                    <div className='relative right p-6 sm:w-screen'>

                        <div className='relative my-9 ml-7 justify-center sm:justify-center sm:items-center'>
                            <img className="sm:h-96 sm:w-80% sm:-my-16 rounded-lg" src="./alesiakazantcevaxlm6fpwk5qunsplash-1@2x.png" alt="" />
                        </div>

                        <div className='absolute top-0 right-0 bg-white font-semibold text-sm px-5 max-h-150 max-w-28 mr-8 my-8 sm:-my-8 sm:mr-1 sm:h-32 sm:max-w-48 sm:text-center sm:pt-4 sm:text-2xl rounded-full text-black'>
                            <p>100+ Completed Projects</p>
                        </div>

                        <div className=' absolute bottom-0 right-0 flex flex-col space-y-1 items-center bg-white font-semibold text-sm p-2 mr-8 my-10 sm:-my-20 sm:mr-1 w-48  h-14 sm:h-44 sm:text-3xl sm:w-72 sm:space-y-5 sm:pl-9 rounded-lg text-black'>
                            <p>10+ Years of Experience</p>
                            <p>85+ Trusted Partners</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[100%] sm:inline-block sm:w-96'>
                <p className='p-3 text-xs sm:w-screen sm:pt-16 sm:pl-5 sm:text-3xl sm:font-medium'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>
            </div>

            <div className=' flex justify-center sm:w-[100%] sm:justify-center'>
                <div className=' flex flex-row space-x-20 justify-center my-8 sm:my-24 sm:text-5xl sm:space-x-64'>
                    <button className='bg-yellow-400 w-[7rem] sm:w-[17rem] h-[2rem] sm:h-[5rem] rounded-t-lg rounded-r-lg font-semibold text-black'>Lets talk</button>
                    <button className='bg-yellow-400 w-[7rem] sm:w-[17rem] h-[2rem] sm:h-[5rem] rounded-t-lg rounded-r-lg font-semibold text-black'>Projects</button>
                </div>
            </div>
        </>
    )
}

export default IntroCard