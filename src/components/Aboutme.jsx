"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Github, Linkedin, Code2 } from "lucide-react";

const AboutMe = () => {
  return (
    <HeroHighlight>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="p-8 text-center"
      >
        <h1 className="text-5xl mb-6 bg-clip-text text-transparent">
          <Highlight className="text-white font-bold">About Me</Highlight>
        </h1>
        <p className="text-3xl font-semibold mb-10 bg-gradient-to-r from-violet-400 to-purple-800 bg-clip-text text-transparent">
            
          I'm a passionate web developer with expertise in modern web technologies.<br/>
          <Highlight className="text-white font-semibold">I love creating efficient, scalable, and user-friendly applications.</Highlight>
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/Singhmayank0217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-white text-white hover:text-black font-medium rounded-lg transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-singh-a4805327b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-white text-white hover:text-black font-medium rounded-lg transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/singhMayank/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-white text-white hover:text-black font-medium rounded-lg transition-colors duration-300"
          >
            <Code2 className="w-5 h-5" />
            <span>LeetCode</span>
          </a>
        </div>
      </motion.div>
    </HeroHighlight>
  );
};

export default AboutMe;
