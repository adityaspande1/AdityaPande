import { Jscript, Cpp, Java, Python, Typescript, Docker, Express, Git, MongoDb, Node, Postgress, React, Tailwind ,Android} from '../components/icons';

import { JSX } from "react";
import { Code, Server, Database, Globe, Cpu, LineChart, Laptop } from 'lucide-react';


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



export const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="text-[#38bdf8] mb-2" size={24} />,
    skills: [ "C/C++","Sql","JavaScript", "TypeScript", "Python", "Java",]
  },
  {
    title: "Frontend",
    icon: <Laptop className="text-[#38bdf8] mb-2" size={24} />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML","CSS"]
  },
  {
    title: "Backend",
    icon: <Server className="text-[#38bdf8] mb-2" size={24} />,
    skills: ["Node.js", "Express.js", "REST APIs", ]
  },
  {
    title: "Database",
    icon: <Database className="text-[#38bdf8] mb-2" size={24} />,
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Prisma"]
  },
  {
    title: "DevOps",
    icon: <Globe className="text-[#38bdf8] mb-2" size={24} />,
    skills: ["Docker", "CI/CD",]
  },
  {
    title: "Tools",
    icon: <Cpu className="text-[#38bdf8] mb-2" size={24} />,
    skills: ["Git", "VS Code", "Webpack", "Vite",]
  },
  {
    title: "Other",
    icon: <LineChart className="text-[#38bdf8] mb-2" size={24} />,
    skills: [ "UI/UX", "WebSockets","Android","Yeoman",],
  }
];