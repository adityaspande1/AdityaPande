import { Jscript, Cpp, Java, Python, Typescript, Docker, Express, Git, MongoDb, Node, Postgress, React, Tailwind ,Android} from '../components/icons';

import { JSX } from "react";



export type SkillPullProps = {
    name: string;
    icon: JSX.Element;
  };
  
export  const Languages: SkillPullProps[] = [
    { name: "Javascript", icon: <Jscript /> },
    { name: "C/C++", icon: <Cpp /> },
    { name: "Java", icon: <Java /> },
    { name: "Python", icon: <Python /> },
    { name: "Typescript", icon: <Typescript /> },
    
  ];
export const Databaases=[
  {name: "MongoDB", icon: <MongoDb /> },
{ name: "PostgreSQL", icon: <Postgress /> }]
export const Frameworks=[
  { name: "Node.js", icon: <Node /> },
  { name: "Express", icon: <Express /> },
  { name: "React", icon: <React /> },
  { name: "Tailwind", icon: <Tailwind /> },
]
export const Technologies=[
  { name: "Android", icon: <Android /> },
  { name: "Git", icon: <Git /> },
  { name: "Docker", icon: <Docker /> },
 
]



