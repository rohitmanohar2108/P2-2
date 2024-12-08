import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ParallaxText } from './ParallaxText';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        ".animate-title",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out" }
      );
    }
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-orange-600 via-gray-800 to-black"
    >
      <div className="absolute inset-0 bg-[url('https://lmnr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnoise.6f9fcba0.jpeg&w=3840&q=75')] bg-cover bg-center opacity-40" 
        style={{ 
          
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(3px)"
        }}
      />
      
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
            className="w-52 h-52  rounded-full overflow-hidden mx-auto mb-12 border border-white shadow-lg shadow-blue-500/30"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-4 mb-12">
            <motion.h1 
              className="animate-title text-6xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Computer Science
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Student</span>
            </motion.h1>

            <motion.p
              className="animate-title text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              NITK | Full Stack Developer | AI Enthusiast
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8"
          >
            {[
              { Icon: Github, href: "#", color: "from-black" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/rohit-manohar-80b949207/", color: "from-black" },
              { Icon: Mail, href: "#", color: "from-black to-emerald-900" },
              { Icon: Code2, href: "#", color: "from-black to-red-900" },
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-2xl border border-zinc-500 hover:border-zinc-400 flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <ParallaxText baseVelocity={-5}>CREATIVE DEVELOPER INNOVATIVE THINKER</ParallaxText>
        <ParallaxText baseVelocity={5}>PROBLEM SOLVER TECH ENTHUSIAST</ParallaxText>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center items-start p-2"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-white/30 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};