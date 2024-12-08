import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { ParallaxText } from './ParallaxText';

const projects = [
  {
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent study assistant that uses NLP to help students organize and understand complex topics.',
    tech: ['Python', 'TensorFlow', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069',
  },
  {
    title: 'Smart Campus Navigation',
    description: 'Mobile app for NITK students to navigate campus with real-time updates and indoor mapping.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
  },
  {
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on Ethereum for student council elections.',
    tech: ['Solidity', 'Web3.js', 'React', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032',
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-orange-700/70 via-gray-950 to-rose-600/10" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="relative z-20 bottom-0 left-0 right-0 mb-6">
        <ParallaxText baseVelocity={-5}>CREATIVE DEVELOPER INNOVATIVE THINKER</ParallaxText>
        <ParallaxText baseVelocity={5}>PROBLEM SOLVER TECH ENTHUSIAST</ParallaxText>
      </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black border rounded-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 font-extralight">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full font-extralight">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="text-white hover:text-blue-400"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="text-white hover:text-blue-400"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};