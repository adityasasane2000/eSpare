import React from 'react'

function CRMcard({title,info}) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-white space-y-8 p-4 rounded-2xl flex flex-col justify-center items-start w-[90%] md:w-[100%] md:h-[12rem]'>
                <h3 className='text-base font-bold xl:text-xl'>{title}</h3>
                <p className='text-sm md:text-xs xl:text-base'>{info}</p>
            </div>
        </div>
    )
}

export default CRMcard