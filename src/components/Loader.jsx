"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Terminal, Database, Globe, Sparkles } from "lucide-react"

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [onLoadingComplete])

  // Generate more varied particles
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    opacity: Math.random() * 0.5 + 0.2,
    blur: Math.random() > 0.8,
  }))

  // Tech stack with icons
  const techStack = [
    { name: "React", icon: <Code className="mr-1 size-3" /> },
    { name: "Node.js", icon: <Terminal className="mr-1 size-3" /> },
    { name: "MongoDB", icon: <Database className="mr-1 size-3" /> },
    { name: "Next.js", icon: <Globe className="mr-1 size-3" /> },
    { name: "Express", icon: <Sparkles className="mr-1 size-3" /> },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-700">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.blur ? "bg-white/10 blur-xl" : "bg-white/30"}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -500],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, particle.opacity, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Content container with glassmorphism effect */}
      <motion.div
        className="relative z-10 flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo/Avatar */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="group relative h-28 w-28">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-1 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-700 to-purple-900 text-4xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 5px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                MS
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Name and title with staggered animation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent"
          >
            Mayank Singh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <motion.p
              className="text-lg text-white/90"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              MERN Stack Developer
            </motion.p>
            <motion.div
              className="absolute -bottom-2 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              initial={{ width: 0, x: "-50%" }}
              animate={{ width: "80%", x: "-40%" }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced progress bar */}
        <div className="mb-8 w-full max-w-xs">
          <div className="mb-2 flex justify-between text-sm text-white/80">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Loading Portfolio
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono"
            >
              {Math.round(progress)}%
            </motion.span>
          </div>

          <div className="relative h-3 overflow-hidden rounded-full bg-white/10 p-0.5">
            <motion.div
              className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600"
              style={{ scaleX: progress / 100, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full opacity-50"
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                  "linear-gradient(90deg, rgba(255,255,255,0) 100%, rgba(255,255,255,0.5) 100%, rgba(255,255,255,0) 100%)",
                ],
                left: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Tech stack with hover effects */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
              }}
            >
              {tech.icon}
              {tech.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced loading dots */}
        <motion.div
          className="flex space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500"
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  "0 0 0 rgba(167, 139, 250, 0)",
                  "0 0 20px rgba(167, 139, 250, 0.7)",
                  "0 0 0 rgba(167, 139, 250, 0)",
                ],
              }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loader
