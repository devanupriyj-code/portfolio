"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20] gap-12"
    >

      {/* 👤 LEFT SIDE (IMAGE) */}
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="relative flex justify-center items-center"
      >
        {/* ✨ Glow */}
        <div className="absolute w-[220px] h-[220px] bg-purple-500/20 blur-[100px] rounded-full animate-pulse" />

        {/* 🧠 Profile Image */}
        <Image
          src="portfolio/public/1.png"
          alt="Devanupriy"
          height={200}
          width={200}
          draggable={false}
          className="rounded-full border-4 border-purple-500 shadow-xl transition duration-300 hover:scale-105"
        />
      </motion.div>

      {/* 🔥 RIGHT SIDE (TEXT) */}
      <div className="flex flex-col gap-5 justify-center text-center md:text-left max-w-[600px]">

        {/* ✨ Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center gap-2 py-[6px] px-[12px] border border-[#7042f88b] opacity-90 backdrop-blur-md bg-white/5 rounded-full"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <span className="text-[13px] text-gray-200">
            Software Engineer
          </span>
        </motion.div>

        {/* 🔥 Heading */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white"
        >
          <span>
            Hi,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
               I’m Devanupriy
            </span>{" "}
             I build fast, modern and scalable web applications.          </span>
        </motion.div>

        {/* 💬 Description */}
        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        {/* 🎯 Button */}
        <motion.a
          variants={slideInFromRight(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:scale-105 transition duration-300"
        >
          Learn more
        </motion.a>

      </div>

    </motion.div>
  );
};
