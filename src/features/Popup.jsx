import React from 'react'

function Popup() {
    return (
        <div className='bg-white rounded-2xl space-y-2 w-[90%] md:w-[60%]'>
            <div className='bg-yellow-300 text-xs p-10 h-20 flex justify-center items-center'>
                Please fill out the form below & we will get back to you as soon as possible.
            </div>
            <div className='p-4'>
                <form action="" className='space-y-8'>
                    <div className='space-y-7 md:flex md:space-x-32 lg:space-x-56 lg:items-center xl:space-x-96'>
                        <div>
                            <label htmlFor="Email">Your Name*</label>
                            <input type="text" className='w-full bg-transparent p-2 text-xs border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                        </div>

                    </div>

                    <div className='space-y-7 md:flex md:space-x-32 lg:space-x-52 lg:items-center xl:space-x-96'>
                        <div>
                            <label htmlFor="Password">Your Email*</label>
                            <input type="text" className='w-full bg-transparent p-2 text-xs border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                        </div>

                    </div>

                    <div className='space-y-8 md:flex md:space-x-32 lg:space-x-52 xl:space-x-96'>
                        <div>
                            <label htmlFor="Password">Message*</label>
                            <textarea rows={2} className='block w-[100%] border border-black'></textarea>
                        </div>
                    </div>
                    
                    <div className='flex justify-center items-center'>
                            <button className='bg-yellow-300 w-[60%] md:w-full  h-12 p-1 text-base font-bold rounded-2xl hover:bg-black hover:text-yellow-400'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    ) 
}

export default Popup