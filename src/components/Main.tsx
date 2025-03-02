import React from 'react';
import { Element, Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Terminal, Code, Github, Linkedin, Mail, Link2 } from 'lucide-react';
import NpxButton from './NpxButton';
import Skill from './Skill';
import Projects from './Projects';
import { Contacts } from './Contacts';
import MacBookSafari from './About';
import Achievements from './Achievments';

export default function Main() {
  return (
    <div className="bg-[#0f172a] bg-grid min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-sm border-b border-[#334155]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Terminal className="text-[#38bdf8] mr-2" size={24} />
            <a href="Home"><span className="text-white font-bold">aditya@dev:~$</span></a>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="Home">Home</NavLink>
            <NavLink to="About">About</NavLink>
            <NavLink to="Skills">Skills</NavLink>
            <NavLink to="Projects">Projects</NavLink>
            <NavLink to="Achievements">Achievements</NavLink>
            <NavLink to="Contactme">Contact</NavLink>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/adityaspande1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/aditya-s-pande" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:adityaspande1@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      <Element name="Home">
        <div className="pt-24 pb-16 md:pt-32 md:pb-24">
          <motion.div className='container mx-auto px-4 text-white text-center mt-20 sm:mt-40 w-full content-center sm:text-xl'>
            <div className="terminal max-w-3xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="ml-4 text-xs text-gray-300">bash - aditya@dev:~</div>
              </div>
              <div className="terminal-body text-left p-6">
                <div className="mb-4">
                  <span className="prompt">aditya@dev:~$</span> <span className="text-white">whoami</span>
                </div>
                <motion.h1 
                  className='text-4xl md:text-7xl font-bold mb-2'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  Hi <span className="wave">👋</span>
                </motion.h1>
                <motion.h1 
                  className="text-4xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                  I'm <span className='text-[#38bdf8]'>Aditya Pande</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                >
                  <TypedText />
                </motion.div>
                <div className="mt-8">
                  <span className="prompt">aditya@dev:~$</span> <span className="text-white">./connect.sh</span>
                  <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <NpxButton />
                    <NavLink to='Projects'> 
                      <div className="code-button flex items-center">
                      <Code size={16} className="mr-2" /> View Projects
                      </div>
                     
                    </NavLink>
                    <NavLink to="Contactme">
                      <div className="code-button flex items-center">
                      <Link2 size={16} className="mr-2" /> Get in Touch
                      </div>
                
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Element>

      <Element name="About" className='py-16 md:py-24 bg-[#0f172a]/50'>
        <div className="container mx-auto px-4">
          <SectionTitle>About Me</SectionTitle>
          <MacBookSafari />
        </div>
      </Element>

      <Element name="Skills" className='py-16 md:py-24'>
        <div className="container mx-auto px-4">
          <SectionTitle>Skills</SectionTitle>
          <Skill />
        </div>
      </Element>

      <Element name="Projects" className='py-16 md:py-24 bg-[#0f172a]/50'>
        <div className="container mx-auto px-4">
          <SectionTitle>Projects</SectionTitle>
          <Projects />
        </div>
      </Element>

      <Element name="Achievements" className='py-16 md:py-24'>
        <div className="container mx-auto px-4">
          <SectionTitle>Achievements</SectionTitle>
          <Achievements />
        </div>
      </Element>

      <Element name="Contactme" className='py-16 md:py-24 bg-[#0f172a]/50'>
        <div className="container mx-auto px-4">
          <SectionTitle>Contact Me</SectionTitle>
          <Contacts />
        </div>
      </Element>

      <footer className="bg-[#0f172a] border-t border-[#334155] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© {new Date().getFullYear()} Aditya Pande. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            <span className="prompt">aditya@dev:~$</span> echo "Built with React, TypeScript, and ❤️"
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      smooth={true} 
      duration={500} 
      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
    >
      {children}
    </Link>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      {children}
    </h2>
  );
}

function TypedText() {
  const [text, setText] = React.useState('');
  const fullText = 'Software Developer | Full Stack Developer';
  const [index, setIndex] = React.useState(0);
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block">
      <span>{text}</span>
      {showCursor && <span className="cursor">|</span>}
    </div>
  );
}