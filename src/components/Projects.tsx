import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import projects from '../data/Projects';

export default function Projects() {
  
  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
    staggerChildren: 0.2
    }
  }
  };

  const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
  };

  return (
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {projects.map((project, index) => (
    <motion.div 
      key={index}
      className="project-card overflow-hidden rounded-lg bg-[#1e293b] border border-[#334155]"
      variants={item}
    >
      <div className="relative h-48 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-70"></div>
      </div>
      <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap mb-4">
        {project.tags.map((tag, tagIndex) => (
        <span 
          key={tagIndex} 
          className="text-xs bg-[#0f172a] text-[#38bdf8] px-2 py-1 rounded mr-2 mb-2"
        >
          {tag}
        </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.github && (
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors flex items-center"
        >
          <Github size={16} className="mr-1" /> Code
        </a>
        )}
        {project.demo && (
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors flex items-center"
        >
          <ExternalLink size={16} className="mr-1" /> Demo
        </a>
        )}
      </div>
      </div>
    </motion.div>
    ))}
  </motion.div>
  );
}