import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import introVideo from "../assets/videos/Demo3.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const backgroundVideoRef = useRef(null);
  const frameRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for tilt
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-[100vh] md:min-h-[88vh] flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-hero">
      {/* Background Video */}
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://cdn.cuberto.com/cb/showreel/2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950/70 via-dark-900/60 to-dark-950/70 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-transparent to-accent-950/20 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)] z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)] z-[1]" />

      <div className="relative w-full lg:w-[115%] flex items-center justify-start px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-0 z-[2]">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight animate-fade-in-up">
          Automate
            <br />
            <span className="font-normal bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-transparent">
            Innovate
            </span>
            <br />
            Scale

          </h1>

          {/* Subheading with fade-in and slide-up animation (delayed) */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light animate-fade-in-up-delayed leading-relaxed">
          Technology-driven solutions to simplify and grow your business.
          </p>

          {/* Button with fade-in and slide-up animation (more delayed) */}
          <div className="flex mt-4 md:mt-8 animate-fade-in-up-delayed-2 justify-center lg:justify-start">
            <motion.button 
              onClick={scrollToProjects}
              className="px-10 py-4 md:px-12 md:py-5 min-w-[200px] bg-transparent border-2 border-white/30 text-white font-medium text-base md:text-lg rounded-lg backdrop-blur-sm hover:border-white/60 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">View Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Side - Interactive 3D Video Frame */}
      <div className="w-full lg:w-[45%] relative min-h-[60vh] md:min-h-[65vh] lg:h-[88vh] z-[2] flex items-center justify-center lg:justify-end lg:pr-8 xl:pr-16 py-8 md:py-0">
        
        {/* 3D Perspective Container */}
        <div 
          ref={frameRef}
          className="relative"
          style={{ perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated Orbital Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              className="absolute w-[140%] h-[110%] border border-primary-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ rotateX: '75deg' }}
            />
            <motion.div 
              className="absolute w-[130%] h-[105%] border border-accent-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ rotateX: '75deg' }}
            />
          </div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute -top-8 -right-8 w-4 h-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-[1px]"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-3 h-3 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full blur-[1px]"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/3 -left-10 w-2 h-2 bg-white rounded-full"
            animate={{ 
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Main 3D Tilting Frame */}
          <motion.div
            className="relative"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glow Effect - Intensifies on hover */}
            <motion.div 
              className="absolute -inset-6 rounded-[3rem] blur-2xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4), rgba(14, 165, 233, 0.3), transparent 70%)',
              }}
              animate={{
                opacity: isHovered ? 0.9 : 0.5,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Animated Border Frame */}
            <div 
              className="relative rounded-[2rem] md:rounded-[2.5rem] p-[2px] overflow-hidden"
              style={{
                width: 'min(90vw, 600px)',
                height: 'min(60vw, 400px)',
                maxWidth: '600px',
                maxHeight: '400px',
              }}
            >
              {/* Rotating Gradient Border */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 0deg, #a855f7, #0ea5e9, #a855f7, #0ea5e9, #a855f7)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <div 
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                }}
              />

              <div className="relative w-full h-full rounded-[1.9rem] md:rounded-[2.4rem] overflow-hidden bg-dark-950">
                <motion.video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={introVideo}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.03) 50%, transparent 100%)',
                    backgroundSize: '100% 8px',
                  }}
                />

                {/* Interactive Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                  }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent pointer-events-none" />

                {/* Video Controls - Inside Frame */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                  <motion.button
                    onClick={togglePlayPause}
                    className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full border border-white/20 shadow-lg"
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(168, 85, 247, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </motion.button>
                  <motion.button
                    onClick={toggleMute}
                    className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full border border-white/20 shadow-lg"
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(14, 165, 233, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.617a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* 3D Shadow */}
            <motion.div 
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/40 rounded-[50%] blur-xl"
              animate={{
                scale: isHovered ? 0.9 : 1,
                opacity: isHovered ? 0.3 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Hero;
