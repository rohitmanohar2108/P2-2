import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar } from "lucide-react";
import { ParallaxText } from "./ParallaxText";

const certifications = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    provider: "Cloud Native Computing Foundation",
    period: "Sep 2023",
    description:
      "Demonstrated proficiency in managing Kubernetes clusters and deploying cloud-native applications.",
    image: "https://example.com/cka-logo.png",
    link: "https://www.cncf.io/certification/cka/",
  },
  {
    title: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    period: "Jun 2023",
    description:
      "Designed scalable and secure cloud solutions leveraging AWS services and infrastructure.",
    image: "https://example.com/aws-logo.png",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    title: "React Developer Certification",
    provider: "Meta Platforms",
    period: "Mar 2023",
    description:
      "Validated expertise in building responsive web applications using React and modern JavaScript.",
    image: "https://example.com/react-logo.png",
    link: "https://www.coursera.org/meta-react-certification",
  },
];

export const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-gradient-to-bl from-orange-700/70 via-gray-950 to-teal-600/10"
      id="certifications"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Certifications
        </motion.h2>
        <div className="relative  mb-8 bottom-0 left-0 right-0 z-20">
          <ParallaxText baseVelocity={-5}>
            CREATIVE DEVELOPER INNOVATIVE THINKER DSA
          </ParallaxText>
          <ParallaxText baseVelocity={5}>
            PROBLEM SOLVER TECH ENTHUSIAST
          </ParallaxText>
        </div>
       

        <div ref={ref} className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-1 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-green-500">
                <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Award size={12} className="text-white" />
                </div>
              </div>

              <div className="bg-black border hover:border-zinc-500 rounded-lg p-6 ml-6 flex items-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mr-6"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 object-contain rounded-lg border border-gray-600"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      {cert.title}
                    </a>
                  </h3>
                  <div className="text-green-500 mb-2 flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>{cert.provider}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mb-4 font-extraligh space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.period}</span>
                  </div>
                  <p className="text-gray-300 font-extralight">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
