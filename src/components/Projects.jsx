import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import One from "../assets/images/One.png";
import Second from "../assets/images/Second.png";
import Three from "../assets/images/Three.png";
import Four from "../assets/images/Four.png";
import Five from "../assets/images/Five.png";
import Six from "../assets/images/Six.png";
import Seven from "../assets/images/Seven.png";
import Eight from "../assets/images/Eight.png";
import Nine from "../assets/images/Nine.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Automotive Repair Podcast NetWork App",
      image: One,
      description: "A feature-rich platform for automotive enthusiasts and professionals to enjoy audio and video podcasts in one place.It automatically resumes playback from where you left off and supports background listening.A floating player and built-in media controls ensure a smooth, uninterrupted experience anytime.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.arp.podcast&pli=1",
    },
    {
      title: "Your Life Organized",
      image: Second,
      description: "A mobile platform that helps users catalog, organize, sell, donate, and share personal belongings using photo-based inventory management.Designed with a strong focus on accessibility and ease of use, especially for adults aged 50 and above.It offers secure authentication, AI-assisted item descriptions, smart organization, reminders, and marketplace and charity support.",
      appStoreLink: "https://apps.apple.com/pk/app/your-life-organized/id6752123949Your Life Organized",
    },
    {
      title: "Salute",
      image: Three,
      description: "An all-in-one platform created for service members, veterans, and military families to stay connected and supported.It brings together career tools, mental wellness resources, education guidance, VA services, and exclusive discounts.Designed to support every stage of military life, helping users stay informed, empowered, and connected beyond the uniform.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.nullanon.Salute",
    },
    {
      title: "Global Retrieval Solution",
      image: Four,
      description: "A dedicated platform that connects professional dog trainers with pet owners seeking trusted training guidance.Trainers share exclusive video lessons, while users can chat directly with experts for personalized support.With a simple subscription, learning becomes interactive, convenient, and effective for better dog training.",
    },
    {
      title: "myGPSFootPrint",
      image: Five,
      description: "A social platform for sharing stories, memories, and moments with location-aware posts that show where experiences happened.Users can share text and photos, follow others, and explore public content, with optional premium features for expanded storage and private groups.It adds a unique storytelling layer by blending memories with place and time for more meaningful connections.",
    },
    {
      title: "PICME",
      image: Six,
      description: "A platform that connects customers with professional photographers for instant or scheduled bookings.Users can browse portfolios, compare packages, book securely, and chat to finalize details.Photographers can showcase their work, manage availability, and grow their business through streamlined bookings.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.thepicme.android",
      appStoreLink: "https://apps.apple.com/us/app/the-picme-app/id6738265063",
    },
    {
      title: "Auto Shop Awswers",
      image: Seven,
      description: "An event companion designed for automotive professionals attending hands-on training experiences.It provides detailed schedules, speaker insights, networking tools, and interactive features like maps and reminders.Built to help attendees stay organized, connected, and fully engaged throughout the event.",

    },
    {
      title: "MindHYVE.ai",
      image: Eight,
      description: "An AI-driven platform that creates digital employees to autonomously handle complex business tasks.These intelligent agents learn and adapt over time, boosting productivity and efficiency across industries.",
    },
    {
      title: "ViClinic",
      image: Nine,
      description: "A telehealth platform that combines AI with a virtual assistant to assess symptoms before appointments.It streamlines care and improves doctor–patient interactions by making healthcare access smarter and more efficient.",
    },
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="mb-12 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm md:text-base text-primary-400 font-medium tracking-wider uppercase">
              Our Work
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              Featured
            </span>
            <span
              id="design"
              className="font-normal ml-3 md:ml-4 bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-transparent"
            >
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Showcasing our latest innovations and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid - Simple Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            return (
              <div key={project.title} className="w-full">
                <ProjectCard 
                  title={project.title} 
                  image={project.image} 
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-16 md:mt-24 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-dark-950/95 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative bg-dark-900 rounded-3xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-dark-800/80 hover:bg-dark-700 flex items-center justify-center transition-colors duration-300 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-primary-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 bg-dark-800 flex items-center justify-center p-4 md:p-8">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </div>

                {/* Description Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-gradient-to-br from-dark-900 to-dark-950">
                  <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mb-6 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  />

                  <motion.p
                    className="text-gray-300 text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedProject.description}
                  </motion.p>

                  {/* Store Links */}
                  {(selectedProject.playStoreLink || selectedProject.appStoreLink) && (
                    <motion.div
                      className="mt-8 flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {selectedProject.playStoreLink && (
                        <a
                          href={selectedProject.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 bg-dark-800 hover:bg-dark-700 border border-white/10 hover:border-primary-500/50 rounded-xl transition-all duration-300 group"
                        >
                          <svg className="w-5 h-5 text-white group-hover:text-primary-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                          </svg>
                          <span className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">Play Store</span>
                        </a>
                      )}
                      {selectedProject.appStoreLink && (
                        <a
                          href={selectedProject.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 bg-dark-800 hover:bg-dark-700 border border-white/10 hover:border-accent-500/50 rounded-xl transition-all duration-300 group"
                        >
                          <svg className="w-5 h-5 text-white group-hover:text-accent-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <span className="text-sm font-medium text-white group-hover:text-accent-400 transition-colors">App Store</span>
                        </a>
                      )}
                    </motion.div>
                  )}

                  {/* Decorative elements */}
                  <div className="mt-6 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                    <div className="w-2 h-2 rounded-full bg-accent-400" />
                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
