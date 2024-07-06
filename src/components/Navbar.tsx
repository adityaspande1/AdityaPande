
import {Link} from "react-scroll";
import {motion} from "framer-motion"
export default function Navbar() {
  return (
    <motion.div className='flex justify-around text-xl text-white pt-5 sm:w-200  '
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    drag
    dragConstraints={{ left: -5, right: 5, top: -5, bottom: 5 }}>
      <ul className='Navbar flex justify-between text-sm p-4  border-white border w-full sm:w-auto  sm:px-20  sm:text-white sm:text-xl'>
        <motion.li className='pl-6 sm:pl-2'
        whileHover={{scale:1.1}}
       ><Link to="Home" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></motion.li>
        <motion.li className='sm:pl-6 pl-4'
         whileHover={{scale:1.1}}><Link to="About" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">About <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></motion.li>
        <motion.li className='sm:pl-6 pl-4'
         whileHover={{scale:1.1}}><Link to="Skills" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Skills<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></motion.li>
        <motion.li className='sm:pl-6 pl-4'
         whileHover={{scale:1.1}}><Link to="Projects" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></motion.li>
        <motion.li className='sm:pl-6 pl-4'
         whileHover={{scale:1.1}}><Link to="Contactme" smooth={true} duration={700} className="group text-white-600 transition duration-300 cursor-pointer">Contacts<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link></motion.li>
      </ul>
    </motion.div>
  )
}
