import React from 'react'
import NpxButton from './NpxButton'
import Skill from './Skill'
import Projects from './Projects'
import { Contacts } from './Contacts'
import { Element } from 'react-scroll'
import { About } from './About'
export default function Main() {
  return (
    <>
  <Element name="Home">
    <div className=' place-content-center text-white text-center mt-60 w-full content-center '>
    <h1 className=' hi-heading flex bg text-7xl  subpixel-antialiased font-bold justify '>Hi <span className="wave">👋</span></h1><br></br>
    <h1 className=" name text-7xl font-bold ">I'm <span className='text-sky-400'>Aditya Pande</span></h1>
    <NpxButton/>
   </div>
   </Element>
   <Element name="About">
   <About/>
   </Element>
   <Element name="Skills">
   <Skill/>
   </Element>
    <Element name="Projects">
    <Projects/>
    </Element>
   <Element name="Contactme">
   <Contacts/>
   </Element>
  
</>
    
  )
}
