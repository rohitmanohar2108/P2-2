import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "National Institute of Technology Karnataka (NITK)",
    period: "Aug 2020 - May 2024",
    description:
      "Focused on data structures, algorithms, and system design. Participated in research projects and coding competitions.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "XYZ High School",
    period: "Jun 2018 - May 2020",
    description:
      "Studied core science subjects including Mathematics, Physics, and Chemistry. Achieved a distinction in final examinations.",
  },
  {
    degree: "Secondary School Education",
    institution: "ABC School",
    period: "Jun 2016 - May 2018",
    description:
      "Completed foundational education with a focus on academics and extracurricular activities."
  }
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-gradient-to-bl from-orange-700/70 via-gray-950 to-blue-600/10"
      id="education"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Education
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-1 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-purple-500">
                <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                  <GraduationCap size={12} className="text-white" />
                </div>
              </div>

              <div className="bg-black border hover:border-zinc-500 rounded-lg p-6 ml-6">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <div className="text-purple-500 mb-2 flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-4 font-extraligh space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-300 font-extralight">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
