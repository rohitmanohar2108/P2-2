import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-gradient-to-r from-orange-700/70 via-gray-950 to-orange-700/70"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Get In Touch
        </motion.h2>

        <div
          ref={ref}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <motion.a
                href="mailto:student@nitk.edu.in"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-black border flex items-center justify-center"
              >
                <Mail className="text-white" size={24} />
              </motion.a>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-300 font-extralight">student@nitk.edu.in</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="tel:+911234567890"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border bg-black flex items-center justify-center"
              >
                <Phone className="text-white" size={24} />
              </motion.a>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-300 font-extralight">+91 1234567890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://goo.gl/maps/example" // Replace with your actual location link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border bg-black flex items-center justify-center"
              >
                <MapPin className="text-white" size={24} />
              </motion.a>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-gray-300 font-extralight">NITK, Surathkal, Karnataka</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-10 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-black border text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                <Send className="inline-block h-5 w-5 mr-2" />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
       
      </div>
      <div className="pt-9  text-white text-center font-extralight">
          <p>© {new Date().getFullYear()} Rohit Manohar. All rights reserved.</p>
        </div>
    </section>
  );
};
