import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMeasure } from 'react-use';
import { ParallaxText } from './ParallaxText';

const skills = [
  { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', level: 85, color: 'from-blue-400 to-indigo-500' },
  { name: 'Node.js', level: 80, color: 'from-green-400 to-emerald-500' },
  { name: 'Python', level: 85, color: 'from-yellow-400 to-orange-500' },
  { name: 'Machine Learning', level: 75, color: 'from-purple-400 to-pink-500' },
  { name: 'Data Structures', level: 90, color: 'from-red-400 to-rose-500' },
  { name: 'Algorithms', level: 85, color: 'from-indigo-400 to-violet-500' },
  { name: 'Database Design', level: 80, color: 'from-teal-400 to-cyan-500' },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [measureRef, { height }] = useMeasure<HTMLDivElement>();
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-bl from-orange-700/70 via-gray-950 to-black relative overflow-hidden" id="skills">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
          y
        }}
      />
       <div className="absolute bottom-0 left-0 right-0">
        <ParallaxText baseVelocity={-5}>CREATIVE DEVELOPER INNOVATIVE THINKER</ParallaxText>
        <ParallaxText baseVelocity={5}>PROBLEM SOLVER TECH ENTHUSIAST</ParallaxText>
      </div>

      <div className="container mx-auto px-4" ref={measureRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-24"
        >
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span>
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                  <span className="text-lg font-semibold text-blue-400">{skill.level}%</span>
                </div>
                
                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`absolute h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};