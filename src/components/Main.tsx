import React from 'react';
import { Element, Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Terminal, Code, Github, Linkedin, Mail, Link2 } from 'lucide-react';
// import NpxButton from './NpxButton';
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
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#38bdf8]/5 via-transparent to-[#818cf8]/5"></div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#38bdf8] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 text-white"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#064e3b]/30 backdrop-blur-sm border border-[#10b981]/30 mb-8"
                >
                  <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2 animate-pulse"></span>
                  <span className="text-[#10b981] font-mono text-sm">Available for opportunities</span>
                </motion.div>

                <motion.h1
                  className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#38bdf8] animate-gradient">
                    Hi I'm
                  </span>
                  <span className="block mt-2 text-white">Aditya Pande</span>
                </motion.h1>

                <motion.div
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TypedText />
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <NavLink to="Projects">
                    <div className="group relative px-8 py-4 bg-[#1e293b] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#334155]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      <div className="relative flex items-center">
                        <Code size={20} className="mr-2 text-[#38bdf8]" />
                        <span>Explore Projects</span>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="Contactme">
                    <div className="group relative px-8 py-4 bg-[#1e293b] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#334155]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      <div className="relative flex items-center">
                        <Link2 size={20} className="mr-2 text-[#38bdf8]" />
                        <span>Let's Connect</span>
                      </div>
                    </div>
                  </NavLink>
                </motion.div>

                {/* Social Links with Hover Effects */}
                <motion.div
                  className="flex gap-6 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { icon: Github, href: "https://github.com/adityaspande1", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/aditya-s-pande", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:adityaspande1@gmail.com", label: "Email" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative p-3 rounded-full bg-[#1e293b] border border-[#334155] group-hover:border-[#38bdf8] transition-colors">
                        <social.icon size={20} className="text-gray-400 group-hover:text-[#38bdf8] transition-colors" />
                      </div>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - MacBook Style Terminal */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 hidden lg:block"
              >
                <div className="relative perspective-1000">
                  <motion.div
                    className="terminal bg-[#1e293b]/90 backdrop-blur-sm border border-[#334155] rounded-lg  transform-gpu"
                    style={{
                      transform: "rotateY(-10deg) rotateX(5deg)",
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{
                      rotateY: -5,
                      rotateX: 2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="terminal-header mb-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-gray-400 flex items-center">
                        <Terminal size={12} className="mr-1.5 text-[#38bdf8]" />
                        portfolio.sh - ~/projects/portfolio
                      </div>
                    </div>
                    <div className="terminal-body space-y-3">
                      <div className="flex items-center">
                        <span className="text-[#38bdf8]">$</span>
                        <span className="ml-2 text-gray-300">./start.sh</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          "Loading portfolio...",
                          "Initializing components...",
                          "Setting up animations...",
                          "Ready to explore!"
                        ].map((text, index) => (
                          <motion.div
                            key={index}
                            className="text-gray-400 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.2 }}
                          >
                            <span className="text-[#38bdf8]">[✓]</span>{" "}
                            <TypingText text={text} delay={0.5 + index * 0.2} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#38bdf8]/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#818cf8]/10 rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
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

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText('');
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [delay]);

  return <span>{displayText}</span>;
}