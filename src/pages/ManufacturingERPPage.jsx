import React from 'react'
import Navbar from '../features/Navbar';
import IntroCard from '../features/IntroCard';
import ErpCard from '../features/Services/manufactERP/components/ErpCard';

function ManufacturingERPPage() {
  return (
    <div>
        <Navbar></Navbar>
            <IntroCard></IntroCard>

            {/* Info */}
            <div className='p-6 space-y-10'>
                <h1 className='text-2xl sm:text-6xl font-semibold '>What is Sparse Manufacturing ERP?</h1>

                <div className='sm:w-[220%] bg-white text-xs sm:text-2xl p-6 rounded-3xl'>
                    <p>
                    Sparse Manufacturing ERP is a system that manages a manufacturing company’s processes, such as Sales & Purchase, Production Process, Inventory, HR Activities, Accounting and more. By Using Sparse Manufacturing ERP, All these processes integrate into one single system so to provide real-time Data/ information with multiple departments so businesses can Increase production efficiency, save costs & maximize profits with Sparse Manufacturing ERP software.
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center space-y-8 mt-10'>
                <div>
                    <h1>What are the Benefits of Sparse Manufacturing ERP?</h1>
                </div>

                <div className='space-y-10'>
                    <ErpCard title={"Increased Productivity"} info={"Automate business processes, so businesses can Increase production efficiency, save costs & maximize profits"}></ErpCard>
                    <ErpCard title={"Real-time Reporting"} info={"Act on insights, improve performance and share results with real-time business and financial reporting."}></ErpCard>
                    <ErpCard title={"Data Secured"} info={"All The data are highly secured on cloud"}></ErpCard>
                </div>
            </div>

            <div>
                <div className='bg-black text-white h-44 space-y-6 p-7 mt-10 sm:w-[210%] sm:h-72 sm:flex sm:space-x-20 '>
                    <h1 className='text-xl font-semibold sm:text-6xl sm:text-nowrap sm:mt-9'>Our Clients</h1>

                    <p className='text-sm sm:text-3xl'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since                    </p>
                </div>

                <div className='grid grid-cols-2 place-items-center mt-10 gap-6'>
                <img className="w-36" src="./male@2x.png" alt="" />
                <img className="w-36" src="./male@2x.png" alt="" />
                <img className="w-36" src="./male@2x.png" alt="" />
                <img className="w-36" src="./male@2x.png" alt="" />
                </div>
            </div>

            
    </div>
  )
}

export default ManufacturingERPPage