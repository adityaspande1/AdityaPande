import projects from "../data/Projects"
import ProjectComponent from './Project'

export default function Project() {
  return (
    <div className='tech-container text-white mt-20 bg-black'>
        <h1 className=' tech-skill text-6xl font-bold text-center align-center '> My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10 container mx-auto mt-20">
          {projects.map((project) => (
            <ProjectComponent {...project} key={project.name}/>
            
          ))}
        </div>
    </div>
  );
};
