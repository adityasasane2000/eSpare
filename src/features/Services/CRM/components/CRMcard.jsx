import React from 'react'

function CRMcard({title,info}) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-white space-y-8 w-64 h-60 p-7 rounded-2xl flex flex-col justify-center items-start sm:w-[60%] sm:h-[30rem] md:w-96 md:h-80 md:p-4 xl:w-[75%]'>
                <h3 className='text-xl font-bold sm:text-5xl md:text-4xl xl:text-5xl'>{title}</h3>
                <p className='text-sm sm:text-4xl sm:font-normal md:text-xl xl:text-3xl'>{info}</p>
            </div>
        </div>
    )
}

export default CRMcard