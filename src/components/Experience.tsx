import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";
import { ParallaxText } from "./ParallaxText";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Corp",
    period: "May 2023 - Aug 2023",
    description:
      "Developed and maintained full-stack applications using React and Node.js. Implemented new features and improved application performance.",
  },
  {
    title: "Research Assistant",
    company: "NITK AI Lab",
    period: "Jan 2023 - Apr 2023",
    description:
      "Conducted research in machine learning algorithms and published a paper on deep learning applications.",
  },
  {
    title: "Web Development Lead",
    company: "College Technical Club",
    period: "Aug 2022 - Present",
    description:
      "Leading a team of developers in creating web applications for college events and managing technical workshops.",
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-gradient-to-br from-orange-700/70 via-gray-950 to-purple-600/10"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Experience
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-1 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-blue-500">
                <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <Briefcase size={12} className="text-white" />
                </div>
              </div>

              <div className="bg-black border hover:border-zinc-500 rounded-lg p-6 ml-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <div className="text-blue-400 mb-2">{exp.company}</div>
                <div className="flex items-center text-gray-400 text-sm mb-4 font-extraligh space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-300 font-extralight">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
