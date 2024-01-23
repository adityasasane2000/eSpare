import React from 'react'
import Navbar from '../features/Navbar';

function SigninPage() {
    return (
        <>
            <Navbar></Navbar>

            <div className='w-[100%] flex flex-col justify-center items-center p-5 space-y-14 lg:flex lg:flex-row lg:space-x-28'>
                <div className='bg-white p-5 space-y-6 rounded-2xl lg:w-[40%]'>
                    <h2 className='text-xl text-center font-bold'>eSparse Matrix Solutions Private Limited</h2>
                    <h2 className='text-sm text-center font-semibold'>Join Our Talent Community</h2>
                    <p className='text-sm text'> ⁕ Fresher or experienced, we welcome all. We offer excellent training opportunity with timely feedback system to help you do better. We are always looking to add talented people to our work force who have the zeal to succeed and thrive in a dynamic world of technology. Come join us, we would love to have you on board and provide you with opportunities to grow with us.
                        <br></br>
                        <br></br>
                        ⁕ Can’t find what you looking for? Do tell us about the kind of work which interests you. Leave your details and we shall notify you when matching career opportunities open up.
                    </p>
                    <p className='text-xs'>Join Us & Explore the Possibilities</p>
                </div>

                <div className='space-y-6 p-5 cl'>
                    <h1 className='text-2xl font-bold'>ESPARSE MATRIX SOLUTIONS</h1>
                    <p className='text-base'>Sign in to your account!</p>
                    <form action="" className='space-y-10'>
                        <div>
                            <label htmlFor="Email">Your Email*</label>
                            <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />

                        </div>

                        <div>
                            <label htmlFor="Password">Password*</label>
                            <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                        </div>

                        <div className=''>
                            <button className='bg-yellow-300 w-full text-lg font-bold rounded-2xl'>Sign In</button>
                        </div>

                        <div>
                            <p className='text-sm text-center'>Don’t have an account ? Sign up</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SigninPage;