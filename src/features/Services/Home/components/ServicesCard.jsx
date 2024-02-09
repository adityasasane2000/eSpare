import React from 'react';
import { Link } from 'react-router-dom';

function ServicesCard({title}) {
    return (


        <div class="w-[70%] sm:w-[60%] md:w-[80%] p-4 bg-white border border-gray-200 rounded-t-lg rounded-r-lg shadow dark:bg-black dark:border-gray-700 hover:bg-yellow-300 hover:text-black text-white">
            <p href="#">
                <h5 class="mb-2 text-lg font-semibold tracking-tight space-x-20 inline-flex justify-center text-center">{title}</h5>
            </p>
            <Link to="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                Explore
                <svg class="rtl:rotate-180 w-11 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>

    )
}

export default ServicesCard;