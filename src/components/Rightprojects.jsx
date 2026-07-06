import React from "react";
import { TimelineRight } from "../components/ui/TimelineRight";
import { Highlight } from "../components/ui/hero-highlight";
import s1 from "../assests/Sraj-1.png";
import s2 from "../assests/Sraj-2.png";
import s3 from "../assests/Sraj-3.png";
import s4 from "../assests/Sraj-4.png";
import g1 from "../assests/Grid-1.png";
import g2 from "../assests/Grid-2.png";
import g3 from "../assests/Grid-3.png";
import g4 from "../assests/Grid-4.png";
import t1 from "../assests/Shop-1.png";
import t2 from "../assests/Shop-2.png";
import t3 from "../assests/Shop-3.png";
import t4 from "../assests/Shop-4.png";
import R1 from "../assests/Rk-1.png";
import R2 from "../assests/Rk-2.png";
import R3 from "../assests/Rk-3.png";
import R4 from "../assests/Rk-4.png";
import A1 from "../assests/Apple-1.png";
import A2 from "../assests/Apple-2.png";
import A3 from "../assests/Apple-3.png";
import A4 from "../assests/Apple-4.png";
import W1 from "../assests/We-1.png";
import W2 from "../assests/We-2.png";
import W3 from "../assests/We-3.png";
import W4 from "../assests/We-4.png";

export function RightProjects() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="text-justify">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-4">
          My first freelancing project :
            <Highlight className="text-white font-bold ml-1 text-base">
            R K TECHNICAL SUPPORT 
            </Highlight>
          </p>
          <p className="text-neutral-900 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This project is my first freelancing project.
          The webite is built using HTML, CSS, and JavaScript.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[R1,R2,R3,R4].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="S RAJ INFRA PROJECTS PRIVATE LIMITED"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Sep, 2024",
      content: (
        <div className="text-justify">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-4">
             Apple Store Project :
            <Highlight className="text-white font-bold ml-1 text-base">
             Apple clone iPhone 15 Pro
            </Highlight>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This project is currently deployed on Vercel and utilizes Three.js for creating immersive 3D graphics,
           along with Framer Motion for sophisticated animations and transitions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[A1, A2, A3, A4].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Grid Reputation"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Jan, 2024",
      content: (
        <div className="text-justify">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-4">
            Weather Project :
            <Highlight className="text-white font-bold ml-1 text-base">
              Weather App 
            </Highlight>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mt-5 text-xs md:text-sm font-normal mb-8">
            Created this website using HTML, CSS, and JavaScript 
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[W1, W2, W3, W4].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="The Sparkle Shop"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <TimelineRight data={data} />
    </div>
  );
}