"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animationDelay }}
      className="relative group flex flex-col items-center justify-center"
    >

      {/* 🧠 Icon */}
      <Image
        src={`/skills/${src}`}
        width={width}
        height={height}
        alt={name}
        className="transition-all duration-300 ease-out group-hover:scale-110"
      />

      {/* ✨ Tooltip */}
      <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-xs bg-gradient-to-r from-purple-500 to-cyan-500 px-3 py-1 rounded-md text-white whitespace-nowrap shadow-lg">
        {name}
      </span>

    </motion.div>
  );
};