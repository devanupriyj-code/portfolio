"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  const ref = useRef(null);

  // 📜 Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎯 Effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // parallax
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.3]); // fade
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "6px"]); // blur

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
    >

      {/* 🎥 VIDEO (Next Level) */}
      <motion.video
        style={{
          y,
          opacity,
          filter: blur,
        }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/encryption-bg.webm" type="video/webm" />
      </motion.video>

      {/* 🌌 Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* 🔤 Heading */}
      <div className="absolute top-0 z-[10]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          security.
        </motion.div>
      </div>

      {/* 🔒 Lock */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] z-[20]">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      {/* 📝 Bottom text */}
      <div className="absolute bottom-[10px] z-[10] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>
    </div>
  );
};