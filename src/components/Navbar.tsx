import React from 'react'
import {Link} from "react-scroll";
export default function Navbar() {
  return (
    <div className='flex justify-around text-xl text-white pt-5 '>
      <ul className='Navbar flex justify-between p-4 border-white border w-600 px-20'>
        <li className='pl-6'><Link to="Home" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></li>
        <li className='pl-6'><Link to="About" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">About Me<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></li>
        <li className='pl-6'><Link to="Skills" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Skills<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></li>
        <li className='pl-6'><Link to="Projects" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></li>
        <li className='pl-6'><Link to="Contactme" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Contact Me<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></li>
      </ul>
    </div>
  )
}
