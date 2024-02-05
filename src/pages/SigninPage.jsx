import React, { useState } from 'react'
import Navbar from '../features/Navbar';
import Footer from '../features/Footer';
import Popup from '../features/Popup';

function SigninPage() {
    const [popup,setPopup] = useState(false);

    function handlePopup(){
        setPopup(!popup);
    }

    return (
        <>
            <Navbar></Navbar>

            <div className='w-[100%] flex flex-col justify-center items-center p-5 space-y-14 md:flex md:flex-row md:gap-5 lg:gap-20 xl:gap-60 font-[Inter]'>
                <div className='bg-white p-5 space-y-6 rounded-2xl md:w-[45%]'>
                    <h2 className='text-xl text-center font-bold'>eSparse Matrix Solutions Private Limited</h2>
                    <h2 className='text-sm text-center font-semibold'>Join Our Talent Community</h2>
                    <p className='text-sm text'> ⁕ Fresher or experienced, we welcome all. We offer excellent training opportunity with timely feedback system to help you do better. We are always looking to add talented people to our work force who have the zeal to succeed and thrive in a dynamic world of technology. Come join us, we would love to have you on board and provide you with opportunities to grow with us.
                        <br></br>
                        <br></br>
                        ⁕ Can’t find what you looking for? Do tell us about the kind of work which interests you. Leave your details and we shall notify you when matching career opportunities open up.
                    </p>
                    <p className='text-xs text-blue-600 flex justify-center'>Join Us & Explore the Possibilities</p>
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

                        <div className='space-y-3'>
                            <p className='text-sm text-center'>Don’t have an account ? Sign up</p>
                            <p className='text-sm text-center text-blue-600'>Powered by eSparse Matrix Solution</p>
                        </div>
                    </form>
                    { popup ? <img onClick={handlePopup} className="ml-[80%] w-10 cursor-pointer" src='./close.svg'/> : <img onClick={handlePopup} className="ml-[80%] w-10 cursor-pointer" src='./Vector.svg'/>}

                </div>

                { popup ? 
                   <div className='absolute'>
                   <div className='relative p-5 mt-96 flex justify-evenly md:flex md:justify-end md:-mt-[20%] md:ml-44 xl:ml-96'>
                       <Popup></Popup>
                   </div>
               </div> : null}
               
            </div>

            <Footer></Footer>
        </>
    )
}

export default SigninPage;