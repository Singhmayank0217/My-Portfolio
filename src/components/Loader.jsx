import { useState, useEffect } from "react"
import { motion } from "framer-motion"

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

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-400/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-400/30 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-md px-8">
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              MS
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-white mb-2 text-center"
        >
          Mayank Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/80 text-lg mb-8 text-center"
        >
          Mern Stack Developer
        </motion.p>

        <div className="w-full max-w-xs">
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-2 text-white/80 text-sm">
            <span>Loading Portfolio</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {["<React/>", "<Node.js/>", "<MongoDB/>", "<Next.js/>", "<Express/>"].map((tech, index) => (
            <motion.div
              key={tech}
              className="px-3 py-1 bg-white/10 rounded-md text-white/90 text-sm font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Loader
