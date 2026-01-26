import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, index = 0, onClick }) => {
  return (
    <motion.div 
      className="group relative w-full will-change-transform"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: Math.min(index * 0.08, 0.4)
      }}
      onClick={onClick}
    >
      <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden relative cursor-pointer bg-dark-800">
        {/* Glow effect on hover - optimized */}
        <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/15 via-accent-500/15 to-primary-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl z-0" />
        
        {/* Image container */}
        <motion.div
          className="relative w-full z-10"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto object-contain transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {title}
          </h3>
          <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 mt-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
