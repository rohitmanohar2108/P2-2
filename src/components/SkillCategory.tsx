import React from 'react';
import { SkillCard } from './SkillCard';
import { Code, LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  name: string;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  gradient: string;
}

export function SkillCategory({ title, skills, gradient }: SkillCategoryProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-lg bg-gradient-to-r opacity-20 blur-xl animate-pulse-glow" 
           style={{ backgroundImage: gradient }} />
      <div className="relative space-y-6">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r" 
            style={{ backgroundImage: gradient }}>
                 
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}