
import React,{FC} from "react";

import { FaGithub,FaGlobe } from "react-icons/fa";
//structure defining for the Project props

interface ProjectProps{
    name:string;
    thumbnail:string;
    githubLink?:string;//not compulsary to be present
    liveLink?:string;//not compulsary to be present
    description:string;
    techStack:string[]//tech stack can be more than one
};

const Project : FC<ProjectProps> = (project) => {
   
    console.log(project)
    return (
        <div
          key={project.name}
          className="flex flex-col gap-4 rounded-[0.875rem] dark:text-white shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] bg-neutral-100 dark:bg-black border-white transition-colors duration-150 border p-2 md:p-3 max-w-sm"
        >
          <div className="relative flex overflow-hidden  rounded-lg object-contain h-fit">
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
              <a href={project.githubLink} target="_blank">
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank">
                <FaGlobe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
         
          {project.description}
        </p>
        <div className="flex gap-3 items-center">
          {project.techStack.map((proj) => (
            
            <img src={proj} alt={proj} width={20} height={20} key={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Project;