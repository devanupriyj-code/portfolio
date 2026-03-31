 'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[70px] fixed top-0 z-50 px-6">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-[#03001466] backdrop-blur-xl border-b border-white/10" />

      {/* 📦 Container */}
      <div className="relative flex items-center justify-between max-w-7xl mx-auto h-full">

        {/* 🔥 Logo */}
        <Link href="#about-me" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="group-hover:scale-110 transition duration-300"
          />
          <span className="hidden md:block font-bold text-gray-300 group-hover:text-white transition">
            Devanupriy
          </span>
        </Link>

        {/* 💻 Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex items-center gap-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">

            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative text-sm text-gray-300 hover:text-white transition group"
              >
                {link.title}

                {/* ✨ underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <Link
              href={LINKS.sourceCode}
              target="_blank"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Source
            </Link>
          </div>

          {/* 🌐 Socials */}
          <div className="flex gap-4 ml-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link key={name} href={link} target="_blank">
                <Icon className="h-5 w-5 text-gray-300 hover:text-white hover:scale-110 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* 📱 Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="mx-4 rounded-2xl bg-[#030014cc] backdrop-blur-xl border border-white/10 p-6 flex flex-col items-center gap-6">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition text-lg"
            >
              {link.title}
            </Link>
          ))}

          <Link
            href={LINKS.sourceCode}
            target="_blank"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white transition text-lg"
          >
            Source Code
          </Link>

          <div className="flex gap-6 pt-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link key={name} href={link} target="_blank">
                <Icon className="h-6 w-6 text-gray-300 hover:text-white transition" />
              </Link>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};