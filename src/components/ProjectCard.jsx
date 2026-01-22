import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, url, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="my-8 md:my-14 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-fit rounded-3xl overflow-hidden relative cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl z-10 pointer-events-none" />
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative z-0"
        >
          <video 
            src={url} 
            loop 
            autoPlay 
            muted
            className="w-full h-full object-cover transition-all duration-500"
            style={{ 
              filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)'
            }}
          ></video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      </div>
      <motion.p 
        className="my-4 text-xl text-gray-200 group-hover:text-white transition-colors duration-300"
        whileHover={{ x: 5 }}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default ProjectCard;
