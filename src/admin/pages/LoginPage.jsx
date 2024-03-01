import React from 'react'

function LoginPage() {
    return (
        <div className='flex flex-col justify-center items-center p-5 mt-[20vh] md:flex md:flex-row md:gap-10 md:p-10 md:justify-center md:items-center lg:w-5/5 lg:gap-20 xl:w-10/12 xl:gap-32 xl:ml-[10vw]'>
            <div className='w-[80%]'>
                <img src='./loginimg.png' />
            </div>

            <div className='space-y-6 p-5 xl:w-[70%]'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <h1 className='text-xl text-nowrap font-bold'>ESPARSE MATRIX SOLUTIONS</h1>
                    <p className='text-base font-[Inter]'>Sign in to your account!</p>
                    <p className='text-base font-[Inter] text-blue-800 font-bold'>Admin</p>
                </div>

                <form action="" className='space-y-10'>
                    <div>
                        <label className="font-[Inter]" htmlFor="Email">Your Email*</label>
                        <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                    </div>

                    <div>
                        <label className="font-[Inter]" htmlFor="Password">Password*</label>
                        <input type="text" className='w-full bg-transparent p-2 text-sm border-b-2 border-gray-400 outline-none opacity-none focus:border-black' />
                    </div>

                    <div className='flex justify-center'>
                        <button className='bg-blue-600 w-[80%] h-[6vh] text-lg text-white font-bold rounded-2xl hover:bg-blue-800 font-[Inter]'>Sign In</button>
                    </div>

                    <div className='space-y-3'>
                        <p className='text-sm text-center font-[Inter]'>Don’t have an account ? Sign up</p>
                        <p className='text-sm text-center text-blue-600 font-[Inter]'>Powered by eSparse Matrix Solution</p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LoginPage