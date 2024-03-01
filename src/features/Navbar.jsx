import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// function handleClick({e}){
//   console.log(e.target.value);
// }


function Navbar() {
  let [open, setOpen] = useState(false);
  let [select, setSelect] = useState();
  const navigate = useNavigate();

  function handleChange(event) {
    // console.log(event.target.value);
    setSelect(event.target.value);
    navigate(`/${event.target.value}`);
  }

  function handleConatct() {
    navigate(`/Contactus`);
  }

  function goHome() {
    navigate(`/`);
  }

  return (
    // <div className='top-0 left-0 md:flex w-[100%] justify-around'>
    <div className='md:grid md:grid-cols-1 lg:justify-stretch mt-5'>
      <div className=''>
          <img className="ml-2 w-[14%] md:w-[8%] lg:w-[7%] xl:w-[5%]" src='./eSparselogo2.png' onClick={goHome}></img>
      </div>

      <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center pb-12 md:static left-5 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in lg:gap-2 ${open ? "mt-2 opacity-100 h-[96]" : "-mt-10 opacity-0 h-0 "} md:opacity-100 `}>
        <li key="Home" className='md:ml-32 text-xl md:text-base md:my-0 my-7 xl:text-xl'>
          <Link to={"/"} className='text-black  hover:text-gray-400 duration-500 font-[Inter]'>Home</Link>
        </li>

        <li key="AboutUs" className='md:ml-8 text-xl md:text-nowrap md:text-base md:my-0 my-7 xl:text-xl'>
          <Link to={"/aboutus"} className='text-black hover:text-gray-400 duration-500 font-[Inter]'>About Us</Link>
        </li>

        <li key="Services" className='text-black md:ml-5 text-xl md:text-base md:my-0 my-7 xl:text-xl font-[Inter]'>
          <select onChange={handleChange} className='w-24 xl:w-28 bg-transparent '>
            <option className='text-lg' value="">Services</option>
            <option className='text-lg' value="web-development">WEB DEVELOPMENT</option>
            <option className='text-lg' value="App-development">APP DEVELOPMENT</option>
            <option className='text-lg' value="Manufacturing-ERP">MANUFACTURING ERP SYSTEM</option>
            <option className='text-lg' value="HRMS-Solutions">HRMS & PAYROLL SYSTEM</option>
            <option className='text-lg' value="CRM-System">ESPARSE CRM SYSTEM</option>
            <option className='text-lg' value="School-ERP">SCHOOL & COLLAGE ERP</option>
            <option className='text-lg' value="Custom-development">SOFTWARE DEVELOPMENT</option>
            {/* <option value="Digital-Marketing">DIGITAL MARKETING</option> */}
          </select>
        </li>

        <li key="Career" className='md:ml-7 text-xl md:text-base md:my-0 my-7 xl:text-xl'>
          <Link to={"/Career"} className='text-black hover:text-gray-400 duration-500 font-[Inter]'>Career</Link>
        </li>

        <li key="Blog" className='md:ml-10 text-xl md:text-base md:my-0 my-7 xl:text-xl'>
          <Link to={"/Blogs"} className='text-black hover:text-gray-400 duration-500 font-[Inter]'>Blog</Link>
        </li>

        <p key="Login" className='text-black md:ml-7 text-xl md:text-base md:my-0 my-7 lg:ml-[20%] xl:ml-[35%] xl:text-xl font-[Inter]'>
          <Link to={"/Signin"}>Login</Link>
        </p>

        {/* <div className=''> */}
          <button onClick={handleConatct} className='bg-black text-white text-sm text-nowrap py-2 px-6 rounded md:ml-5 md:w-auto md:h-10 hover:bg-gray-600 duration-500 lg:ml-10 xl:text-xl font-[Inter]'>
            Conatct Us
          </button>
        {/* </div> */}

      </ul>


    </div>
  )
}

export default Navbar