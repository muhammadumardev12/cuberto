import React, { useRef } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { LiaGithub } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import { motion, useScroll, useTransform } from "framer-motion";

const FollowUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden py-9 font-light relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
      <motion.div
        style={{ x }}
        className="flex justify-around items-center text-[4rem] md:text-[8rem] relative z-10"
      >
        <span className="flex shrink-0 space-x-1 items-center group">
          <span className="bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Follow Us
          </span>{" "}
          <AiFillTwitterCircle className="text-6xl md:text-8xl text-primary-400 mx-9 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-300" />
        </span>
        <span className="flex shrink-0 space-x-1 items-center group">
          <span className="bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Follow Us
          </span>{" "}
          <ImLinkedin className="text-[5rem] text-accent-400 mx-9 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:text-accent-300" />
        </span>
        <span className="flex shrink-0 space-x-1 items-center group">
          <span className="bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Follow Us
          </span>{" "}
          <LiaGithub className="text-8xl text-primary-400 mx-9 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-300" />
        </span>
        <span className="flex shrink-0 space-x-1 items-center">
          <span className="bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Follow Us
          </span>
        </span>
      </motion.div>
    </div>
  );
};

export default FollowUs;
