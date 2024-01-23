import React from 'react'

function CRMcard({title,info}) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-white space-y-8 p-4 rounded-2xl flex flex-col justify-center items-start w-60 h-60 xl:w-80 xl:h-80'>
                <h3 className='text-xl font-bold xl:text-2xl'>{title}</h3>
                <p className='text-sm xl:text-lg'>{info}</p>
            </div>
        </div>
    )
}

export default CRMcard