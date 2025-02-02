


import React from 'react';
import { LockIcon } from 'lucide-react';
import {motion} from "framer-motion";

const MacBookSafari: React.FC = () => {
  return (
    <motion.div className="macbook-safari max-w-6xl max-7-6xl mx-auto mt-40 my-10 border border-gray-700 rounded-lg overflow-hidden bg-gray-900 "
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}>
      <div className="browser-header flex justify-between items-center bg-[#1E1E21] p-2 rounded-t-lg">
        <div className="buttons flex gap-2">
          <div className="close-button w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="minimize-button w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="maximize-button w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
          <div className="address-bar flex sm:w-1/4 bg-[#353437] p-1 rounded-lg text-center align-center m-auto">
          <div className='flex items-center m-auto'>
          <LockIcon className='h-[15px] w-[15px] text-white mr-2 ml-2'/>
          <span className="text-gray-400 "> https://aditya-pande/about</span>
          </div>
          
          </div>  </div>  
          <div className="browser-content bg-[#0c0c0e] p-4 rounded-b-lg overflow-y-auto max-h-[500px]">
        <div className='text-white'>
          <h1 className='tech-skill text-5xl sm:text-6xl font-bold text-center align-center'>About Me</h1>
          <div className='block sm:flex mt-10 px-20 gap-[40px] sm:content-center'>
            <div className='left-div mb-10 sm:px-20'>
              <img src={"/profile.jpeg"} className='border border-white rounded-3xl sm:h-[400px] sm:w-[400px]' />
            </div>
            <div className='right-div sm:text-xl margin-auto sm:w-[600px]'>
              <p>I am Aditya Pande, pursuing my B.Tech in Computer Science.
                I am a Full Stack Developer based in India and have been coding since 2022.
                Since my childhood, I have had a huge interest in technology.
                Channeling this interest towards computer science has been a good decision for me as I learn something new about technology every day.</p><br />
              <p>
                I am proficient in technologies like React, Node.js, Express, MongoDB, and have experience with various other web development tools. I have worked on several projects, including a full-fledged e-commerce website and a task management application.
              </p>
              <br />
              <p>
                My goal is to contribute to impactful projects and grow as a developer. Feel free to contact me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MacBookSafari;
