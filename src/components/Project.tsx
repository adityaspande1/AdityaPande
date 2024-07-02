import React, { FC, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
  name: string;
  thumbnail: string;
  githubLink?: string;
  liveLink?: string;
  description: string;
  techStack: string[];
}

const Project: FC<ProjectProps> = (project) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <motion.div
        layoutId={project.name}
        key={project.name}
        className="flex flex-col gap-4 rounded-[0.875rem] dark:text-white shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] bg-neutral-100 dark:bg-black border-white transition-colors duration-150 border p-2 md:p-3 max-w-sm cursor-pointer"
        onClick={() => setSelectedId(project.name)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative flex overflow-hidden rounded-lg object-contain h-fit">
          <img
            src={project.thumbnail}
            alt={project.thumbnail}
            width={500}
            height={500}
            className="h-full w-full aspect-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 px-4 py-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-xl underline inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none ">
              {project.name}
            </h2>
            <div className="flex justify-between items-center gap-4 text-sm">
              {project.githubLink && (
                <motion.a href={project.githubLink} target="_blank"
                whileHover={{scale:1.2}}
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              )}
              {project.liveLink && (
                <motion.a href={project.liveLink} target="_blank" 
                whileHover={{scale:1.2}}>
                  <FaGlobe className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
          <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
            {project.description}
          </p>
          <div className="flex gap-3 items-center">
            {project.techStack.map((tech) => (
              <img src={tech} alt={tech} width={20} height={20} key={tech} />
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId === project.name && (
          <motion.div
            layoutId={project.name}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-black p-4 rounded-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <div className="relative flex overflow-hidden rounded-lg object-contain h-fit mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.thumbnail}
                  width={500}
                  height={500}
                  className="h-full w-full aspect-auto object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-4 py-2">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-medium text-xl underline inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none ">
                    {project.name}
                  </h2>
                  <div className="flex justify-between items-center gap-4 text-sm">
                    {project.githubLink && (
                      <motion.a href={project.githubLink} target="_blank" 
                      whileHover={{scale:1.2}}>
                        <FaGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.liveLink && (
                      <motion.a href={project.liveLink} target="_blank" 
                      whileHover={{scale:1.2}}>
                        <FaGlobe className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
                  {project.description}
                </p>
                <div className="flex gap-3 items-center">
                  {project.techStack.map((tech) => (
                    <img src={tech} alt={tech} width={20} height={20} key={tech} />
                  ))}
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="mt-4 bg-slate-800 text-white p-2 rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
