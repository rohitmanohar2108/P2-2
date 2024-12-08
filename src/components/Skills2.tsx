import React from 'react';
import { SkillOrb } from './SkillOrb'

import { 
  Code2, Database, Globe, Server, 
  Cloud, Shield, GitBranch, Terminal,
  Cpu, Brain, Layout, Settings
} from 'lucide-react';
import { FaCloud, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMysql, SiRedux, SiSqlite, SiTypescript, } from 'react-icons/si';
import { FaC } from 'react-icons/fa6';
import { ParallaxText } from './ParallaxText';

export function Skills2() {
  const skillGroups = [
    {
      name: "Core",
      color: "from-blue-500 to-purple-500",
      skills: [
        { icon: FaC, name: "C Programming", level: 90 },
        { icon: SiCplusplus, name: "C++ Programming", level: 90 },
        { icon: FaReact, name: "React/Next.js", level: 90 },
        { icon: FaHtml5, name: "HTML/CSS", level: 85 },
        { icon: SiJavascript, name: "JavaScript", level: 88 },
        { icon: SiTypescript, name: "TypeScript", level: 88 },
      ]
    },
    {
      name: "Backend",
      color: "from-emerald-500 to-cyan-500",
      skills: [
        { icon: FaNodeJs, name: "Node.js", level: 92 },
        { icon: SiMysql, name: "SQL/NoSQL", level: 87 },
        { icon: FaCloud, name: "Cloud", level: 85 },
      ]
    },
    {
      name: "Tools",
      color: "from-pink-500 to-rose-500",
      skills: [
        { icon: FaGithub, name: "Github", level: 89 },
        { icon: SiRedux, name: "Redux Toolkit", level: 86 },
        { icon: Brain, name: "AI/ML", level: 84 },
      ]
    }
  ];

  return (
    <div id="skills" className="relative min-h-screen bg-black  py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
        <ParallaxText baseVelocity={-5}>CREATIVE DEVELOPER INNOVATIVE THINKER</ParallaxText>
        <ParallaxText baseVelocity={5}>PROBLEM SOLVER TECH ENTHUSIAST</ParallaxText>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
       
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Technical Universe
          </h2>
          <p className="mt-4 text-gray-400 font-extralight">Explore the interconnected world of technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100"
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
              </div>
              <div className="relative shadow-lg mb-12  bg-black/30 border border-white hover:border-gray-600 dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20  p-6 rounded-xl transform-gpu transition-all duration-500 group-hover:rotate-y-12">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                  {group.name}
                </h3>
                <div className="space-y-8">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillOrb key={skillIndex} {...skill} groupColor={group.color} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}