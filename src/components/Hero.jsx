import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import introVideo from "../assets/videos/intro.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <div className="relative w-full min-h-[92vh] md:min-h-[88vh] flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-transparent to-accent-950/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]" />

      <div className="relative w-full lg:w-[115%] flex items-center justify-start px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-0 z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight animate-fade-in-up">
          Smart Automation
            <br />
            <span className="font-normal bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-transparent">
              Powerful IT Solutions
            </span>
            <br />
            {/* agency */}
          </h1>

          {/* Subheading with fade-in and slide-up animation (delayed) */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light animate-fade-in-up-delayed leading-relaxed">
          Helping businesses optimize operations and grow with technology.
          </p>

          {/* Buttons with fade-in and slide-up animation (more delayed) */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-8 animate-fade-in-up-delayed-2 justify-center lg:justify-start w-full sm:w-auto lg:w-full">
            <motion.button 
              className="relative px-10 py-4 md:px-12 md:py-5 w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-base md:text-lg rounded-lg overflow-hidden group glow-effect"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
            <motion.button 
              className="px-10 py-4 md:px-12 md:py-5 w-full sm:w-auto min-w-[200px] bg-transparent border-2 border-white/30 text-white font-medium text-base md:text-lg rounded-lg backdrop-blur-sm hover:border-white/60 transition-all duration-300 group relative overflow-hidden"
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

      {/* Right Side - Video */}
      <div className="w-full lg:w-[40%] relative h-[48vh] md:h-[58vh] lg:h-[88vh] bg-dark-950/50">
        <div className="relative w-full h-full group">
          <div className="absolute inset-0 bg-gradient-to-l from-dark-950/50 to-transparent z-10 pointer-events-none" />
          <video
            ref={videoRef}
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
            src={introVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-3">
          <motion.button
            onClick={togglePlayPause}
            className="glass-effect text-white p-3 rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </motion.button>
          <motion.button
            onClick={toggleMute}
            className="glass-effect text-white p-3 rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.617a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
