import React from 'react'

function ServicesCard() {
    return (


        <div class="w-[70%] sm:w-[60%] md:w-[80%] p-4 bg-white border border-gray-200 rounded-t-lg rounded-r-lg shadow dark:bg-black dark:border-gray-700 ">
            <p href="#">
                <h5 class="mb-2 text-xl font-semibold tracking-tight dark:text-white space-x-20 inline-flex justify-center text-center">Software Development</h5>
            </p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-base font-medium text-center text-white">
                Explore
                <svg class="rtl:rotate-180 w-11 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>

    )
}

export default ServicesCard;