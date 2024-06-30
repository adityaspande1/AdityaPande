

import {Languages,Technologies,Databaases,Frameworks} from "../data/Skills"


export type SkillPullProps = {
  name: string;
  icon: JSX.Element;
};
console.log(Languages);

function SkillPull(props:SkillPullProps) {
  // const { name, icon } = props;
  const name=props.name;
  const icon=props.icon;
  
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] cursor-pointer">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}


export default function Skill() {
  const renderSkills = (skill: SkillPullProps, index: number) => (
    

    <SkillPull key={index} icon={skill.icon} name={skill.name} />
    
  );
  return (
    <div className='tech-container text-white mt-55 bg-black'>
        <h1 className=' tech-skill text-6xl font-bold text-center align-center '>Technical Skills</h1>
        <h2 className='text-3xl mt-20 text-center'>
            Programming Languages
        </h2>
        <div className="mt-2 flex flex-wrap justify-center gap-5 text-xl dark:text-zinc-100">
            {Languages.map(renderSkills)}
        </div>
        <h2 className='text-3xl mt-20 text-center'>
            Databases
        </h2>
        <div className="mt-2 flex flex-wrap justify-center gap-5 text-xl dark:text-zinc-100">
          {Databaases.map(renderSkills)}
        </div>
        <h2 className='text-3xl mt-20 text-center'>
            Frameworks
        </h2>
        <div className="mt-2 flex flex-wrap justify-center gap-5 text-xl dark:text-zinc-100">
          {Frameworks.map(renderSkills)}
        </div>
        <h2 className='text-3xl mt-20 text-center'>
            Technologies
        </h2>
        <div className="mt-2 flex flex-wrap justify-center gap-5 text-xl dark:text-zinc-100">
          {Technologies.map(renderSkills)}
        </div>
    </div>
   
  )
}
