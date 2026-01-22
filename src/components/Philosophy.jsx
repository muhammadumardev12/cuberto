import React, { useState } from "react";
import { motion } from "framer-motion";
import clientImage from "../assets/images/client.png";

const Philosophy = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { number: "500+", label: "Projects", color: "primary" },
    { number: "50+", label: "Clients", color: "accent" },
    { number: "10+", label: "Years", color: "primary" },
  ];

  return (
    <div className="text-white font-normal h-fit pb-8 sm:pb-10 md:pb-12 lg:pb-16 md:-mt-[3rem] lg:-mt-[4rem] bg-gradient-to-b from-white via-gray-50 to-dark-950 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-accent-500/5" />
      
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-between md:gap-x-8 lg:gap-x-12 xl:gap-x-16 relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-6 md:py-8 lg:py-10">
        {/* Left Column - Heading and Description */}
        <div className="w-full md:w-[50%] lg:w-[48%] xl:w-[50%]">
          {/* About Us Heading */}
          <motion.div 
            className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] relative z-10 mb-4 sm:mb-5 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="leading-tight text-center md:text-left">
              <span className="text-dark-950 font-semibold">About </span>
              <span className="tracking-wide bg-gradient-to-r from-dark-950 via-primary-600 to-accent-600 bg-clip-text text-transparent font-semibold">
                Us
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-base lg:text-lg text-dark-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
          <motion.p 
            className="text-dark-700 md:text-dark-800"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            In our team, developers work alongside designers, strategists and analysts. 
            Cuberto doesn't do cookie-cutter solutions and we build products exactly 
            as they were during the design phase, no short cuts or simplifications.
          </motion.p>
          <motion.p 
            className="text-dark-700 md:text-dark-800"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            We're driven by user-centered design that drives productivity and increases 
            revenue. Our expertise and ingenuity are remarkable, yet we always strive 
            to outdo and outperform our previous achievements.
          </motion.p>

          {/* Stats below description */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-7 md:mt-8 pt-6 sm:pt-7 md:pt-8 border-t border-gray-200/60"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center cursor-pointer group relative"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.4 + index * 0.1 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <motion.div
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${
                    stat.color === "primary" 
                      ? "from-primary-600 to-primary-400" 
                      : "from-accent-600 to-accent-400"
                  } bg-clip-text text-transparent relative z-10`}
                  animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-xs sm:text-sm md:text-base text-dark-600 mt-1 sm:mt-2 group-hover:text-dark-950 transition-colors duration-300 relative z-10 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[90%] sm:max-w-full md:w-[45%] lg:w-[48%] xl:w-[45%] relative group mb-6 sm:mb-8 md:mb-0 mt-8 sm:mt-10 md:mt-0 mx-auto md:mx-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <img
              src={clientImage}
              alt="About Us"
              className="w-full h-auto max-h-[280px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[550px] object-contain md:object-cover rounded-xl sm:rounded-2xl"
              style={{ display: 'block' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
