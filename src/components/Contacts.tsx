import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { SiCodechef, SiLeetcode } from 'react-icons/si';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from 'react';

export function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all fields'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://email-server-ffdx.onrender.com/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred while sending your message'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <a href="mailto:adityaspande1@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#0f172a] border border-[#334155] rounded p-2 text-white focus:border-[#38bdf8] focus:outline-none"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#0f172a] border border-[#334155] rounded p-2 text-white focus:border-[#38bdf8] focus:outline-none"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[#0f172a] border border-[#334155] rounded p-2 text-white focus:border-[#38bdf8] focus:outline-none"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                {submitStatus && (
                  <div className={`p-3 rounded ${submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit"
                  className="code-button flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}