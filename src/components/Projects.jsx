import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const leftColumnProjects = [
    {
      title: "Punto Pago",
      url: "https://cdn.cuberto.com/cb/projects/puntopago/cover.mp4",
    },
    {
      title: "Riyadh",
      url: "https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4",
    },
    {
      title: "Qvino",
      url: "https://cdn.cuberto.com/cb/projects/qvino/cover.mp4",
    },
    {
      title: "Zelt",
      url: "https://cdn.cuberto.com/cb/projects/zelt/cover.mp4",
    },
    {
      title: "Cisco",
      url: "https://cdn.cuberto.com/cb/projects/cisco/cover.mp4",
    }
  ];

  const rightColumnProjects = [
    {
      title: "Kelvin Zero",
      url: "https://cdn.cuberto.com/cb/projects/kzero/cover.mp4?2",
    },
    {
      title: "Magma",
      url: "https://cdn.cuberto.com/cb/projects/magma/cover.mp4",
    },
    {
      title: "Flipaclip",
      url: "https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4",
    },
    {
      title: "Potion",
      url: "https://cdn.cuberto.com/cb/projects/potion/cover.mp4",
    },
    {
      title: "Ferrumpipe",
      url: "https://cdn.cuberto.com/cb/projects/ferrumpipe/cover.mp4",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white h-fit pt-2 md:pt-0 pb-0 md:pb-32 px-6 md:px-32 md:rounded-t-[4rem] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-t from-accent-500/10 to-transparent" />
      
      <motion.div 
        className="text-5xl md:text-9xl py-14 md:py-28 font-light relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
          Featured
        </div>
        <div className="flex items-center md:items-end my-1">
          <motion.div 
            className="h-14 md:h-28 w-20 md:w-40 rounded-full overflow-hidden relative group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <video
              src="https://cdn.cuberto.com/cb/home/featured/header.mp4?2"
              className="relative z-10"
              loop
              autoPlay
              muted
            ></video>
          </motion.div>
          <div>
            <span
              id="design"
              className="font-normal tracking-wide text-[3.2rem] md:text-[8.5rem] bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-transparent"
            >
              &nbsp;projects
            </span>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row md:gap-x-14 relative z-10">
        <motion.div 
          data-scroll data-scroll-speed="0" 
          className="w-[94%] mx-auto md:mx-0 md:w-[36%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            {leftColumnProjects.map((project, index) => (
                <ProjectCard key={project.title} title={project.title} url={project.url} index={index} />
            ))}
        </motion.div>
        <motion.div 
          data-scroll data-scroll-speed="0.5" 
          className="w-[94%] mx-auto md:mx-0 md:w-[36%] md:mt-52"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            {rightColumnProjects.map((project, index) => (
                <ProjectCard key={project.title} title={project.title} url={project.url} index={index + 5} />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
