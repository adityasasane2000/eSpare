import React from 'react'

function ContactusCard() {
    return (
        <div>
            <div className='bg-white p-7 space-y-6'>
                <h1 className='text-2xl font-semibold'>Get In Touch!</h1>

                <div className='p-5'>
                    <form action="" className='space-y-8'>
                        <div className='space-y-7 md:flex md:space-x-32 lg:space-x-56 lg:items-center xl:space-x-96'>
                            <div>
                                <label htmlFor="Email">Your Name*</label>
                                <input type="text" className='w-full lg:w-[150%] xl:w-[200%] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>

                            <div>
                                <label htmlFor="Email">Mobile*</label>
                                <input type="text" className='w-full lg:w-[150%] xl:w-[250%] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>
                        </div>

                        <div className='space-y-7 md:flex md:space-x-32 lg:space-x-52 lg:items-center xl:space-x-96'>
                            <div>
                                <label htmlFor="Password">Your Email*</label>
                                <input type="text" className='w-full lg:w-[150%] xl:w-[200%] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>

                            <div>
                                <label htmlFor="Password">Subject*</label>
                                <input type="text" className='w-full  lg:w-[150%] xl:w-[250%] bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>
                        </div>

                        <div className='space-y-8 md:flex md:space-x-32 lg:space-x-52 xl:space-x-96'>
                            <div>

                                <label htmlFor="Password">Comments*</label>
                                <textarea rows={4} cols={30} className='block w-full lg:w-[150%] xl:w-[200%] border border-black'></textarea>
                            </div>

                            <div className='flex justify-center items-center'>
                                <button className='bg-yellow-300 w-[60%] md:w-64 lg:w-72 h-12 p-1 text-base font-bold rounded-2xl hover:bg-black hover:text-yellow-400'>Send Message</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactusCard