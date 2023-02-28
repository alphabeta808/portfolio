import React from 'react';
import { Link } from 'react-router-dom';
import Computer from '../images/computer.jpg';


const Projects = () => {
  return (
    <div className='bg-[#474745] h-screen w-screen tracking-widest p-20 text-[#ebebdd] font-medium'>
      <div className='flex flex-row'>
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-row border-red-500">
            <Link to='#'>
              <img src={Computer} alt='Computer'></img>
              <h2 className='mt-2 font-medium'>Mini ERP: Casier App</h2>
            </Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
          <div className=" border-red-500">
            <Link to='#'><img src={Computer} alt='Computer'></img></Link>
          </div>
        </div>
        {/* <div className='button flex'>
          <div className="left">Left</div>
          <div className="right">Right</div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects