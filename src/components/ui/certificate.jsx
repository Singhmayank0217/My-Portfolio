"use client";

import Carousel from "../ui/carousel";
import Appreciation from "../../assets/Appreciation.png";
import LLM from "../../assets/LLM.png";
import Innovate from "../../assets/Innovate.png";

export default function Certificate() {
  const slideData = [
    {
      title: "Appreciation Certificate",
      button: "R K TECHNICAL SUPPORT",
      src: Appreciation,
    },
    {
      title: "LangChain for LLM Application Development",
      button: "Coursera",
      src: LLM,
    },
    {
      title: "Innovate 2025",
      button: "Explore Component",
      src: Innovate,
    },
  ];

  return (
    <section className="relative w-full h-full py-20 bg-gray-50 dark:bg-gradient-to-br from-[#121B30] via-[#362f52] to-[#111827] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-0">
        <div className="absolute top-10 left-10 w-60 h-60 bg-pink-500  rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-float"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] dark:text-gray-100 mb-11">
          My Certificates
        </h2>
      </div>

      <div className="relative flex justify-center z-10">
        <Carousel slides={slideData} />
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 14s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-40px) translateX(25px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </section>
  );
}
