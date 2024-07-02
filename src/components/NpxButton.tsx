import { Toaster,toast } from 'sonner';
import { ClipboardCopyIcon } from 'lucide-react';
import {easeOut, motion} from "framer-motion"
// function handleClick() {
//   navigator.clipboard.writeText('npx adityaPande');
//     toast('Text has been copied');
  
// }

export default function NpxButton() {
    const handleClick = () => {
        navigator.clipboard.writeText('npx devaditya');
        toast('Make sure to run in your terminal 😄!');
      };
  return (
    <>
     <Toaster/>
    <motion.button
      onClick={handleClick}
      className=" shim-button inline-flex py-2 px-2 sm:py-4 md:py-6 sm:px-7 md:px-9 animate-shim
       items-center text-2xl justify-center rounded-md
        border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
         bg-[length:200%_100%] font-medium text-slate-400 transition-colors 
         focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
          focus:ring-offset-slate-50 gap-2
          mt-10  -ml-40 mr-12 mb-40
          "
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.7,ease:easeOut}}

    >
      <pre>npx devaditya</pre> <ClipboardCopyIcon />
    </motion.button></>
   
  )
}
