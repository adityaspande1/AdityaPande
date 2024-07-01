import React from 'react'
import NpxButton from './NpxButton'
import Skill from './Skill'
import Projects from './Projects'

export default function Main() {
  return (
    <>
    <div className=' place-content-center text-white text-center mt-60 w-full content-center '>

        
    <h1 className=' hi-heading flex bg text-7xl  subpixel-antialiased font-bold justify '>Hi <span className="wave">👋</span></h1><br></br>
    <h1 className=" name text-7xl font-bold ">I'm <span className='text-sky-400'>Aditya Pande</span></h1>
    <NpxButton/>
   </div>
   <Skill/>

   <Projects/>
  
</>
    
  )
}
