import React from "react";
import { motion } from "framer-motion";

const Reel = () => {
  return (
    <div className="w-full h-fit md:h-screen relative bg-dark-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 z-10 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <video
          src="https://cdn.cuberto.com/cb/showreel/2.mp4"
          loop
          autoPlay
          muted
          className="w-full h-full object-cover"
        ></video>
      </motion.div>
    </div>
  );
};

export default Reel;
