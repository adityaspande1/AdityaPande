
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Terminal, Code, Cpu, Zap } from 'lucide-react';

export default function MacBookSafari() {
  const codeString = `/**
 * @file personal-journey.ts
 * @description My journey as a developer and what drives me
 */

class DeveloperJourney {
  private readonly name: string = "Aditya Pande";
  private readonly passion: string = "Building innovative solutions";
  private readonly philosophy: string = "Code that makes a difference";
  
  constructor() {
    this.initializeJourney();
  }

  private initializeJourney(): void {
    console.log("Journey started: Wrote my first line of in Nov 2022");
  }

  public getMotivation(): string[] {
    return [
      "Solving complex problems with elegant solutions",
      "Creating technology that improves people's lives",
      "Continuous learning and mastering new technologies",
      "Building communities and mentoring new developers"
    ];
  }

  public getCurrentFocus(): Record<string, string> {
    return {
      technical: "Exploring Cloud technologies and Devops",
      personal: "Building open-source tools for developers",
      learning: "Diving deeper into systems design and scalability",
    };
  }

  public getApproach(): string {
    return \`I believe in writing clean, maintainable code that solves
real problems. My approach combines technical excellence
with user empathy to create meaningful experiences.\`;
  }
}

// The journey continues...
export const myJourney = new DeveloperJourney();`;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="terminal h-full">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="ml-4 text-xs text-gray-300 flex items-center">
                <Code size={12} className="mr-1.5 text-[#38bdf8]" />
                personal-journey.ts - ~/projects/portfolio
              </div>
            </div>
            <div className="terminal-body p-0">
              <SyntaxHighlighter 
                language="typescript" 
                style={atomOneDark}
                showLineNumbers={true}
                customStyle={{ 
                  background: 'transparent',
                  margin: 0,
                  padding: '1.5rem',
                  borderRadius: '0 0 0.5rem 0.5rem',
                  fontSize: '0.9rem',
                  height: '100%'
                }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="terminal h-full">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <div className="ml-4 text-xs text-gray-300 flex items-center">
                <Terminal size={12} className="mr-1.5 text-[#38bdf8]" />
                about.sh - ~/projects/portfolio
              </div>
            </div>
            <div className="terminal-body">
              <div className="mb-4">
                <span className="prompt">aditya@dev:~$</span> <span className="text-white">./about.sh</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Cpu className="text-[#38bdf8] mr-2" size={18} />
                  <span className="text-[#10b981] font-semibold">Core Values:</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1.5 ml-5">
                  <li>Continuous innovation</li>
                  <li>Technical excellence</li>
                  <li>User-centeric design</li>
                  <li>Knowledge sharing</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Zap className="text-[#38bdf8] mr-2" size={18} />
                  <span className="text-[#10b981] font-semibold">Current Focus:</span>
                </div>
                <div className="code-block text-sm p-3">
                  <div className="mb-1.5"><span className="text-[#38bdf8]">→</span> Cloud </div>
                  <div className="mb-1.5"><span className="text-[#38bdf8]">→</span> Open Source Development</div>
                  <div className="mb-1.5"><span className="text-[#38bdf8]">→</span> Devops</div>
  
                </div>
              </div>
              
              <div className="text-gray-300 text-sm border-t border-[#334155] pt-4 mt-4">
                <span className="text-[#10b981]">$</span> Beyond coding, I am also interested in music. I am a plectrum guitarist with a Grade 3 certification from Trinity College London.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          My journey in tech is guided by curiosity, creativity, and a commitment to excellence. I approach each project as an opportunity to create something meaningful that solves real problems, combining technical expertise with a deep understanding of user needs.
        </p>
      </motion.div>
    </div>
  );
}