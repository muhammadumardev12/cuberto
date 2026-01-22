import React from "react";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className="text-white font-normal h-fit pb-16 md:pb-36 md:rounded-t-[4rem] md:-mt-[4rem] bg-gradient-to-b from-white via-gray-50 to-dark-950 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-accent-500/5" />
      
      <motion.div 
        className="text-[4rem] md:text-[8rem] py-9 md:py-36 px-6 md:px-32 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="leading-none text-dark-950">Our</h1>
        <h1
          id="design"
          className="text-[4.3rem] md:text-[8.5rem] leading-none tracking-wide bg-gradient-to-r from-dark-950 via-primary-600 to-accent-600 bg-clip-text text-transparent"
        >
          philosophy
        </h1>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-[90%] mx-auto md:mx-0 md:w-1/3 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <video
            src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"
            autoPlay
            muted
            loop
            className="relative rounded-2xl transition-transform duration-500 group-hover:scale-105"
          ></video>
        </motion.div>
        <motion.div 
          className="space-y-3 text-xl font-medium px-6 text-dark-800"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="leading-relaxed">
            In our team, developers work alongside &nbsp;
            <br className="hidden md:block" />
            designers, strategists and analysts.{" "}
            <br className="hidden md:block" />
            Cuberto doesn't do cookie-cutter <br className="hidden md:block" />
            solutions and we build products exactly{" "}
            <br className="hidden md:block" />
            as they were during the design phase, No &nbsp;
            <br className="hidden md:block" />
            short cuts or simplifications.
          </p>
          <p className="leading-relaxed">
            We're driven by user-centered design{" "}
            <br className="hidden md:block" />
            that drives productivity and increases{" "}
            <br className="hidden md:block" />
            revenue. Our expertise and ingenuity are{" "}
            <br className="hidden md:block" />
            remarkable, yet we always strive to outdo{" "}
            <br className="hidden md:block" />
            and outperform our previous <br className="hidden md:block" />
            achievements.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
