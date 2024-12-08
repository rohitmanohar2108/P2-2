import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillOrbProps {
  icon: LucideIcon;
  name: string;
  level: number;
  groupColor: string;
}

export function SkillOrb({ icon: Icon, name, level, groupColor }: SkillOrbProps) {
  return (
    <div className="group/orb relative">
      <div className="absolute -inset-2 bg-gradient-to-r rounded-full opacity-75 blur-lg transition-all duration-500 group-hover/orb:opacity-100"
           style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
      
      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r opacity-75 blur-sm"
               style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
          <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-full transform transition-transform duration-500 group-hover/orb:scale-110">
            <Icon className="w-6 h-6 text-white dark:text-white " />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-white dark:text-white font-extralight">{name}</h4>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500  animate-spin-slow  ${
                    i * 33 < level ? `bg-gradient-to-r ${groupColor}` : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}