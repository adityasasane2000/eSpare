import React from 'react'

function Explore() {
    return (
        <div className='bg-white w-[116%] sm:w-[206%] h-[62rem] sm:h-[30rem] my-20'>
            <div className='flex-col mx-5 my-40 p-9 space-y-7 h-60 sm:flex sm:flex-row justify-center items-center'>
                <img className='h-96 sm:mt-60' src='./group-25@2x.png'></img>

                <div className='space-y-11 ml-9 sm:pt-52'>
                    <h1 className='text-3xl sm:text-5xl sm:text-center font-bold w-96 sm:w-[40rem]'>We design digital products , brands and Expriences</h1>
                    <p className='text-2xl'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Explore;