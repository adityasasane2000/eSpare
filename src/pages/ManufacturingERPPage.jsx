import React from 'react'
import Navbar from '../features/Navbar';
import ErpCard from '../features/Services/manufactERP/components/ErpCard';
import Info from '../features/Info';

function ManufacturingERPPage() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Info></Info>

            {/* Info */}
            <div className='p-7 space-y-10 mt-10'>
                <h1 className='max-w-96 text-xl sm:text-4xl font-semibold text-nowrap md:text-4xl lg:text-5xl'>What is Sparse Manufacturing ERP?</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-base md:w-[100%] xl:text-xl'>
                    <p>
                        Sparse Manufacturing ERP is a system that manages a manufacturing company’s processes, such as Sales & Purchase, Production Process, Inventory, HR Activities, Accounting and more. By Using Sparse Manufacturing ERP, All these processes integrate into one single system so to provide real-time Data/ information with multiple departments so businesses can Increase production efficiency, save costs & maximize profits with Sparse Manufacturing ERP software.
                    </p>
                </div>
            </div>


            <div className='flex flex-col justify-center items-center space-y-8 mt-10'>
                <h1 className='text-2xl font-semibold xl:-ml-[10%] mt-5 sm:text-4xl md:text-4xl lg:text-5xl'>What are the Benefits of Sparse Manufacturing ERP?</h1>

                <div className='space-y-10 p-8 md:grid md:grid-cols-2 md:place-items-center md:gap-20 xl:grid xl:grid-cols-4'>
                    <ErpCard title={"Increased Productivity"} info={"Automate business processes, so businesses can Increase production efficiency, save costs & maximize profits"}></ErpCard>
                    <ErpCard title={"Real-time Reporting"} info={"Act on insights, improve performance and share results with real-time business and financial reporting."}></ErpCard>
                    <ErpCard title={"Data Secured"} info={"All The data are highly secured on cloud"}></ErpCard>
                    <ErpCard title={"Data Secured"} info={"All The data are highly secured on cloud"}></ErpCard>
                </div>
            </div>

            <div>
                <div className='w-[100%]'>
                    <div className='bg-black text-white p-5 space-y-6 mt-16 sm:flex sm:space-x-16 md:h-40 md:w-[100%]'>
                        <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Our Clients</h1>

                        <p className='text-sm md:text-base lg:text-xl'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                    </div>
                </div>


                <div className='grid grid-cols-2 place-items-center mt-10 gap-6 xl:grid xl:grid-cols-4 xl:gap-10'>
                    <img className="w-36 md:w-40 xl:w-52" src="./male@2x.png" alt="" />
                    <img className="w-36 md:w-40 xl:w-52" src="./male@2x.png" alt="" />
                    <img className="w-36 md:w-40 xl:w-52" src="./male@2x.png" alt="" />
                    <img className="w-36 md:w-40 xl:w-52" src="./male@2x.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default ManufacturingERPPage