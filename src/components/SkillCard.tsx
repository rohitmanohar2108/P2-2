import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  color: string;
}

export function SkillCard({ icon: Icon, name, color }: SkillCardProps) {
  return (
    <div className="group relative ">
      <div className={`absolute -inset-0.5 ${color}  rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow`}></div>
      <div className="relative flex items-center  space-x-4 bg-gray-900 p-6 rounded-lg border border-white/10 hover:border-white/20">
        <div className="relative">
          <div className={`absolute inset-0 ${color} blur-sm opacity-40 rounded-full`}></div>
          <div className="relative">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg  font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
            {name}
          </h3>
        </div>
        
        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-all"></div>
      </div>
    </div>
  );
}