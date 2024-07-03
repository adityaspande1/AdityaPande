
import NpxButton from './NpxButton';
import Skill from './Skill';
import Projects from './Projects';
import { Contacts } from './Contacts';
import { Element } from 'react-scroll';
import { About } from './About';
import {motion} from "framer-motion";
export default function Main() {
  return (
    <>
  <Element name="Home">
    <motion.div className=' place-content-center text-white text-center mt-60 w-full content-center '>
    <motion.h1 className=' hi-heading flex bg text-7xl  subpixel-antialiased font-bold justify '
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}>Hi <span className="wave">👋</span></motion.h1><br></br>
    <motion.h1 className=" name text-7xl font-bold "
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}>I'm <span className='text-sky-400'>Aditya Pande</span></motion.h1>
    <NpxButton/>
   </motion.div>
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
