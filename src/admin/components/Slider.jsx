import React, { useState } from 'react'
import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import { AiFillEnvironment } from 'react-icons/ai';
import { RiDashboardFill } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Slider() {
  const [open, setOpen] = useState(true);
  const [carrerSubmenuOpen, setCarrerSubmenuOpen] = useState(false);
  const [blogSubmenuOpen, setblogSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  function handelItem(value){
    navigate(`/${value}`);
  }

  const Menus = [
    { title: "DashBoard", icon: <RiDashboardFill /> },
    {
      title: "Career",
      submenu: true,
      icon: <RiDashboardFill />,
      submenuItems: [
        { title: "Add New Job", value:"addnewjob" },
        { title: "View All Jobs", value:"viewalljobs" },
        { title: "View Applications", value:"viewapplications" },
      ]
    },
    {
      title: "Blogs",
      submenu: true,
      icon: <FaBlog />,
      submenuItems: [
        { title: "sub1" },
        { title: "sub2" },
        { title: "sub3" },
      ]
    },
  ];
  return (
      <div className={`bg-purple-950 h-[screen] p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute top-9 -right-3 border-2 border-black cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className='inline-flex'>
          <AiFillEnvironment className='bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2' />
          <h1 className={`text-white origin-left duration-300 font-medium text-2xl ${!open && "scale-0"}`}>eSparse Matrix</h1>
        </div>

        <div className={`flex items-center rounded-md bg-slate-800 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer mr-2 ${!open && "mr-2"}`}></BsSearch>
          <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}></input>
        </div>

        <ul className='pt-2'>
          {Menus.map((menu, idx) => (
            <>
              <li key={idx} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className='text-2xl block float-left'>{menu.icon}</span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenu && (
                  <BsChevronDown className={`${carrerSubmenuOpen && "rotate-180"}`} onClick={() => {menu.title == "Career" ? setCarrerSubmenuOpen(!carrerSubmenuOpen) : setblogSubmenuOpen(!blogSubmenuOpen)}} />
                )}
              </li>
              {menu.title == "Career" && menu.submenu && carrerSubmenuOpen && open && (
                <ul>
                  {
                    menu.submenuItems.map((submenuItems, idx) => (
                      <li key={idx} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-700 rounded-md'>
                        <Link to={`${submenuItems.value}`}>{submenuItems.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              )}

              {menu.title == "Blogs" && menu.submenu && blogSubmenuOpen && open && (
                <ul>
                  {
                    menu.submenuItems.map((submenuItems, idx) => (
                      <li key={idx} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-700 rounded-md'>
                        {submenuItems.title}
                      </li>
                    ))
                  }
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
  
  )
}

export default Slider