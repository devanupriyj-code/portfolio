"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  const fullText = "Making apps with modern technologies";
  const [text, setText] = useState("");

  // ✍️ Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center">

      {/* 🌌 Glow Background */}
      <div className="absolute w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full -z-10 animate-pulse" />

      

      {/* 🔥 Typing Heading */}
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="text-3xl md:text-5xl font-semibold mt-4 mb-3 text-white leading-tight"
      >
        {text.split("modern").map((part, i) =>
          i === 1 ? (
            <span
              key={i}
              className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-transparent bg-clip-text animate-[gradient_5s_linear_infinite]"
            >
              modern technology
            </span>
          ) : (
            part
          )
        )}
        <span className="animate-pulse">|</span>
      </motion.h1>

      {/* 💬 Subtext (word reveal) */}
      <motion.p
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className="text-lg text-gray-300 max-w-2xl flex flex-wrap justify-center gap-1"
      >
        {"Never miss a task, deadline or idea.".split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
      
    </div>
    
  );
  
};