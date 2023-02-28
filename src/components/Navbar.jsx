import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";


import { Link } from "react-router-dom";

import { SidebarData } from "./Sliderdata";

import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className='absolute w-[100%]'>
          <div className="bg-[#060b26] h-[50px] flex justify-start items-center">
            <Link to="#" className="ml-[2rem] text-[2rem] bg-none">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active z-10" : "nav-menu"} >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="ml-[2rem] text-[2rem] bg-none">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
