import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-around text-xl text-white pt-5 '>
        <ul className='Navbar flex justify-between p-4 border-white border  w-600 px-20'>
            <li className='pl-6  '><a href="#" className="group text-white-600 transition duration-300">Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></a></li>
            <li className='pl-6 '><a href="#" className="group text-white-600 transition duration-300">About Me<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></a></li>
            <li className='pl-6'><a href="#" className="group text-white-600 transition duration-300">Skills<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></a></li>
            <li className='pl-6 '><a href="#" className="group text-white-600 transition duration-300">Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></a></li>
            <li className='pl-6 '><a href="#" className="group text-white-600 transition duration-300">Contact Me<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></a></li>
            
            
        </ul>
    </div>
  )
}
