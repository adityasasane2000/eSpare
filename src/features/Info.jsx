import React from 'react'

function Info() {
    return (

        <div className='mt-16 p-4 space-y-10'>
            <div className='h-12'>
                <div className='flex'>
                    <img
                        className="sm:my-5 md: lg:top-[160rem] mx-6 my-3 h-[0.1rem] sm:h-0.5 md:h-0.5 lg:h-0.5 w-[3rem] sm:w-[6rem] md:w-[4rem]"
                        alt=""
                        src="/vector-24@2x.png"
                    />
                    <p className="ml-0 sm:ml-0 md:ml-0 lg:ml-0 h-14 md:h-15 lg:h-32 w-32 md:w-32 lg:w-40 text-sm sm:text-2xl md:text-2xl lg:text-4xl font-[Inter] font-semibold whitespace-nowrap ">Trust by 100+ of Companies</p>
                </div>

            </div>

            <div className='flex flex-col space-y-16 justify-center items-center md:flex md:flex-row-reverse '>

                <div className='md:flex md:justify-center'>
                    <img className="rounded-2xl w-[100%] md:w-[80%]" src="./alesiakazantcevaxlm6fpwk5qunsplash-1@2x.png" alt="image" />
                </div>

                <div>
                    <h1 className='text-2xl font-semibold md:text-3xl xl:text-4xl'>Take complex applications simple for users</h1>
                </div>

            </div>

            <div>
                <p className='xl:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>

            <div>
                {<div className='flex justify-center space-x-[20%]'>
                    <button className='bg-yellow-400 text-lg font-semibold w-[30%] h-10 rounded-xl '>Lets's talk</button>
                    <button className='bg-yellow-400 text-lg font-semibold w-[30%] h-10 rounded-xl  '>Projects</button>
                </div>}
            </div>

        </div>
    )
}

export default Info

