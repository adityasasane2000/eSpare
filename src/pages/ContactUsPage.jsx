import React from 'react'

function ContactUsPage() {
    return (
        <div>
            <div className='bg-white p-7 space-y-6'>
                <h1 className='text-2xl font-semibold'>Get In Touch!</h1>

                <div className='p-5'>
                    <form action="" className='space-y-8'>
                        <div className='space-y-7'>
                            <div>
                                <label htmlFor="Email">Your Name*</label>
                                <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>
                            
                            <div>
                                <label htmlFor="Email">Mobile*</label>
                                <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>
                        </div>

                        <div className='space-y-7'>
                            <div>
                                <label htmlFor="Password">Your Email*</label>
                                <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>

                            <div>
                                <label htmlFor="Password">Subject*</label>
                                <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                            </div>
                        </div>

                        <div className='space-y-8'>
                            <label htmlFor="Password">Comments*</label>
                            <textarea rows={4} cols={30} className='block w-full border border-black'></textarea>
                        </div>

                        <div className='flex justify-center items-center'>
                            <button className='bg-yellow-300 w-[60%] h-12 p-1 text-base font-bold rounded-2xl'>Send Message</button>
                        </div>

                        <div>
                            <p className='text-sm text-center'>Don’t have an account ? Sign up</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage