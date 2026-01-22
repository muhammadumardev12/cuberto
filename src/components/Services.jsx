import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="w-full h-[70vh] md:h-[120vh] flex items-center justify-center gap-x-9 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(14,165,233,0.05),transparent_50%)]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block w-1/3 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <video
          loop
          autoPlay
          muted
          src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
          className="relative rounded-2xl transition-transform duration-500 group-hover:scale-105"
        ></video>
      </motion.div>
      <div className="space-y-9 text-xl md:text-2xl px-6 md:px-0 font-normal text-gray-200 relative z-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cuberto is a leading digital product{" "}
          <br className="hidden md:block" />
          agency focused on branding, UI/UX <br className="hidden md:block" />
          design, mobile, and web <br className="hidden md:block" />
          development.
        </motion.p>
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 0.3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border-2 border-white/20 overflow-hidden hover:cursor-pointer group glow-effect"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-10%", opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="relative rounded-full py-9 md:py-16 text-gray-200 bg-dark-800/50 backdrop-blur-sm border-none"
          >
            How we work
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
            className="absolute inset-0 rounded-full py-9 md:py-16 text-white bg-gradient-to-r from-primary-600 to-accent-600 border-none"
          >
            How we work
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
