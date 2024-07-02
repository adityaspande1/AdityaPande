import React from 'react'
import {Linkedin,TwitterIcon,MailIcon,GithubIcon} from 'lucide-react';
import {SiLeetcode,SiCodechef} from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import {motion} from "framer-motion";
export const Contacts = () => {
  return (
    <div className='text-white mt-10 bg-black px-10 mb-10'>
    <h1 className='text-6xl font-bold text-center justify-center align-center '>Contact Me</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#eee] dark:bg-[#111] rounded w-full md:rounded-xl py-10 m-1 border-2 dark:border-white border-black mt-10">
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center pt-5">
           Linkedin Account
            </h3>
            <a
              target="_blank"
              href={'https://www.linkedin.com/in/aditya-pande-716862213/'}
              className="text-center flex items-center gap-1"
            ><span className="dark:text-white text-2xl">
           linkedin.com/in/aditya-pande-716862213/
          </span>
          <CiLinkedin className="dark:text-white" size={30} />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center pt-5">
          Mail me here
        </h3>
        <a
          target="_blank"
          href="mailto:adityaspande1@gmail.com"
          className="text-center flex items-center gap-1"
        >
          <span className="dark:text-white text-2xl">
            adityaspande1@gmail.com
          </span>
          <MailIcon className="dark:text-white" size={25} />
        </a>
      </div>
      <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center pt-5">
              Github 
            </h3>
            <a
              target="_blank"
              href="https://github.com/adityaspande1"
              className="text-center flex items-center gap-1"
            >
              <span className="dark:text-white text-2xl">
                github.com/adityaspande1
              </span>
              <GithubIcon className="dark:text-white" size={25} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center pt-5">
              Coding Profiles
            </h3>
            <div className='flex gap-4'>
            <a
              target="_blank"
              href="https://leetcode.com/u/adityapande1/"
              className="text-center flex items-center gap-1 cursor-pointer"
            >
             
              <SiLeetcode className="dark:text-white mt-2" size={25} />
            </a>
            <a
              target="_blank"
              href="https://www.codechef.com/users/adityaspande2"
              className="text-center flex items-center gap-1 cursor-pointer"
            >
             
              <SiCodechef className="dark:text-white mt-2" size={25} />
            </a>
            </div>
          </div>
        </div>
</div>

  )
};
