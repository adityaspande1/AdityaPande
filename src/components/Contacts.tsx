
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { SiCodechef, SiLeetcode } from 'react-icons/si';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Contacts() {
  const codeString = 
  `{
  
  "email": "adityaspande1@gmail.com",
  "location": "Nagpur, Maharashtra, India",
  "availability": "Open to opportunities",
  "social": {
    "github": "github.com/adityaspande1",
    "linkedin": "linkedin.com/in/aditya-s-pande",
    "X": "x.com/adityaspande1"
  }
}`;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="terminal h-full">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="ml-4 text-xs text-gray-300">contact.sh - ~/projects/portfolio</div>
            </div>
            <div className="terminal-body">
              <div className="mb-6">
                <span className="prompt">aditya@dev:~$</span> <span className="text-white">cat contact_info.json</span>
              </div>
              <div className="code-block mb-6">
             
              <SyntaxHighlighter 
                language="typescript" 
                style={atomOneDark}
                showLineNumbers={true}
                customStyle={{ 
                  background: 'transparent',
                  margin: 0,
                  padding: '1.5rem',
                  borderRadius: '0 0 0.5rem 0.5rem',
                  fontSize: '0.7rem',
                  height: '100%'
                }}
              >
                {codeString}
              </SyntaxHighlighter>
              </div>
              <div className="flex flex-col space-y-4">
                <a href="mailto:aditya@example.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Mail size={20} className="mr-3 text-[#38bdf8]" /> adityaspande1@gmail.com
                </a>
                <a href="https://github.com/adityaspande1" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Github size={20} className="mr-3 text-[#38bdf8]" /> github.com/adityaspande1
                </a>
                <a href="https://linkedin.com/in/aditya-s-pande" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={20} className="mr-3 text-[#38bdf8]" /> linkedin.com/in/aditya-s-pande
                </a>
                <a href="https://x.com/adityaspande1" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Twitter size={20} className="mr-3 text-[#38bdf8]" /> x.com/adityaspande1
                </a>
                <a href="https://codechef.com/users/adityaspande2" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <SiCodechef size={20} className="mr-3 text-[#38bdf8]" />codechef.com/users/adityaspande2
                </a>
                <a href="https://leetcode.com/u/adityapande1/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <SiLeetcode size={20} className="mr-3 text-[#38bdf8]" />leetcode.com/u/adityapande1
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="terminal h-full">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="ml-4 text-xs text-gray-300">message.sh - ~/projects/portfolio</div>
            </div>
            <div className="terminal-body">
              <div className="mb-6">
                <span className="prompt">aditya@dev:~$</span> <span className="text-white">./send_message.sh</span>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#0f172a] border border-[#334155] rounded p-2 text-white focus:border-[#38bdf8] focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#0f172a] border border-[#334155] rounded p-2 text-white focus:border-[#38bdf8] focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[#0f172a] border border-[#334155] rounded p-2 text-white focus:border-[#38bdf8] focus:outline-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="code-button flex items-center"
                >
                  <Send size={16} className="mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}