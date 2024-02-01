import React from 'react'
import Navbar from '../features/Navbar';
import ErpCard from '../features/Services/manufactERP/components/ErpCard';
import Info from '../features/Info';
import Footer from '../features/Footer';

function ManufacturingERPPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Info></Info>

            {/* Info */}
            <div className='p-6 space-y-10 mt-10'>
                <h1 className='max-w-96 text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-3xl font-[Montserrat] md:text-nowrap'>What is Sparse Manufacturing ERP?</h1>

                <div className='sm:w-[100%] bg-white text-xs sm:text-base p-7 rounded-3xl md:text-sm md:w-[100%] xl:text-base'>
                    <p>
                        Sparse Manufacturing ERP is a system that manages a manufacturing company’s processes, such as Sales & Purchase, Production Process, Inventory, HR Activities, Accounting and more. By Using Sparse Manufacturing ERP, All these processes integrate into one single system so to provide real-time Data/ information with multiple departments so businesses can Increase production efficiency, save costs & maximize profits with Sparse Manufacturing ERP software.
                    </p>
                </div>
            </div>


            <div className='flex flex-col mt-10 p-5'>
                <h1 className=' max-w-[100%] text-2xl sm:text-4xl font-semibold md:text-3xl lg:text-3xl font-[Montserrat]'>What are the Benefits of Sparse Manufacturing ERP?</h1>

                <div className='space-y-10 p-8 md:grid md:grid-cols-2 md:place-items-baseline md:gap-20 lg:grid lg:grid-cols-4'>
                    <ErpCard title={"Increased Productivity"} info={"Automate business processes, so businesses can Increase production efficiency, save costs & maximize profits"} img={"Ellipse 9.svg"}></ErpCard>
                    <ErpCard title={"Real-time Reporting"} info={"Act on insights, improve performance and share results with real-time business and financial reporting."} img={"Ellipse 11.svg"}></ErpCard>
                    <ErpCard title={"Data Secured"} info={"All The data are highly secured on cloud"} img={"Ellipse 13.svg"}></ErpCard>
                    <ErpCard title={"Data Secured"} info={"All The data are highly secured on cloud"} img={"Ellipse 13.svg"}></ErpCard>
                </div>
            </div>

            <div>
                <div className='w-[100%]'>
                <div className='bg-black text-white p-5 h-56 space-y-6 sm:flex sm:space-x-16 sm:items-baseline md:h-[10rem] md:w-[100%]'>
                        <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>Our Clients</h1>

                        <p className='text-xs md:text-sm lg:text-base'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                    </div>
                </div>


                <div className='grid grid-cols-2 place-items-center -mt-10 gap-6 md:grid md:grid-cols-4 md:gap-5'>
                    <img className="w-36 md:w-32 xl:w-52" src="./male@2x.png" alt="" />
                    <img className="w-36 md:w-32 xl:w-52" src="./male@2x.png" alt="" />
                    <img className="w-36 md:w-32 xl:w-52" src="./male@2x.png" alt="" />
                    <img className="w-36 md:w-32 xl:w-52" src="./male@2x.png" alt="" />
                </div>
            </div>

            <div className='mt-10'>
                <Footer></Footer>
            </div>

        </div>
    )
}

export default ManufacturingERPPage