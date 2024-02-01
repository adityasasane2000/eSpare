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
    console.log(event.target.value);
    setSelect(event.target.value);
    navigate(`/${event.target.value}`);
  }

  function handleConatct() {
    navigate(`/Contactus`);
  }

  return (
    // <div className='top-0 left-0 md:flex w-[100%] justify-around'>
    <div className='md:flex md:justify-center lg:justify-stretch py-4 md:px-10 md-7 '>
      <div className='font-bold text-2xl xl:text-3xl cursor-pointer flex items-center text-gray-800 '>
        <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
          <img className="h-14 inline" src='./Icon01-2.png'></img>
        </span>
        eSparse
      </div>

      <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center pb-12 md:static left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in md:mt-10 md:space-x- ${open ? "mt-2 opacity-100 h-[96]" : "-mt-10 opacity-0 h-0 "} md:opacity-100 `}>
        <li key="Home" className='md:ml-10 text-xl md:text-base md:my-0 my-7 xl:text-xl'>
          <Link to={"/"} className='text-black  hover:text-gray-400 duration-500 font-[Inter]'>Home</Link>
        </li>

        <li key="AboutUs" className='md:ml-8 text-xl md:text-nowrap md:text-base md:my-0 my-7 xl:text-xl'>
          <a href="/aboutus" className='text-black hover:text-gray-400 duration-500 font-[Inter]'>About Us</a>
        </li>

        <li key="Services" className='text-black md:ml-5 text-xl md:text-base md:my-0 my-7 xl:text-xl font-[Inter]'>
          <select onChange={handleChange} className='w-24 xl:w-32 bg-transparent '>
            <option value="">Services</option>
            <option value="web-development">WEB DEVELOPMENT</option>
            <option value="App-development">APP DEVELOPMENT</option>
            <option value="Manufacturing-ERP">MANUFACTURING ERP SYSTEM</option>
            <option value="HRMS-Solutions">HRMS & PAYROLL SYSTEM</option>
            <option value="CRM-System">ESPARSE CRM SYSTEM</option>
            <option value="School-ERP">SCHOOL & COLLAGE ERP</option>
            <option value="Custom-development">SOFTWARE DEVELOPMENT</option>
            <option value="Digital-Marketing">DIGITAL MARKETING</option>
          </select>
        </li>

        <li key="Carrer" className='md:ml-7 text-xl md:text-base md:my-0 my-7 xl:text-xl'>
          <Link to={"/Career"} className='text-black hover:text-gray-400 duration-500 font-[Inter]'>Carrer</Link>
        </li>

        <li key="Blog" className='md:ml-10 text-xl md:text-base md:my-0 my-7 xl:text-xl'>
          <Link to={"/Blogs"} className='text-black hover:text-gray-400 duration-500 font-[Inter]'>Blog</Link>
        </li>

        <p key="Login" className='text-black md:ml-7 text-xl md:text-base md:my-0 my-7 lg:lg:ml-[20%] xl:ml-[50%] xl:text-xl font-[Inter]'>
          <Link to={"/Signin"}>Login</Link>
        </p>

        {/* <div className=''> */}
          <button onClick={handleConatct} className='bg-black text-white text-sm text-nowrap py-2 px-6 rounded md:ml-4 md:w-auto md:h-10 hover:bg-gray-600 duration-500 lg:ml-10 xl:text-xl font-[Inter]'>
            Conatct Us
          </button>
        {/* </div> */}

      </ul>


    </div>
  )
}

export default Navbar