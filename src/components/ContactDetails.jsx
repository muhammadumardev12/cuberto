import React from "react";
import { motion } from "framer-motion";

const ContactDetails = () => {
  return (
    <div className="bg-gradient-to-b from-dark-900 to-dark-950 text-white text-sm md:text-2xl font-light text-center py-20 w-full px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
      <div className="w-[70%] mx-auto md:w-full flex flex-col md:flex-row justify-start gap-y-3 md:gap-x-8 relative z-10">
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 0.3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border-2 border-white/20 overflow-hidden hover:cursor-pointer group glow-effect"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 py-1 md:py-2 text-white bg-dark-800/50 backdrop-blur-sm border-none rounded-full"
          >
            vikasipar4@gmail.com
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
            className="relative rounded-full py-1 md:py-2 px-6 text-white bg-gradient-to-r from-primary-600 to-accent-600 border-none"
          >
            vikasipar4@gmail.com
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 0.3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border-2 border-white/20 overflow-hidden hover:cursor-pointer group glow-effect"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 py-1 md:py-2 text-white bg-dark-800/50 backdrop-blur-sm border-none rounded-full"
          >
            +91 8329909096
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
            className="relative rounded-full py-1 md:py-2 px-6 text-white bg-gradient-to-r from-primary-600 to-accent-600 border-none"
          >
            +91 8329909096
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDetails;
