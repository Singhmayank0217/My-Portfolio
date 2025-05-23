import { motion } from "framer-motion"

export default function AnimatedSectionHeader({ title }) {
  return (
    <motion.h2
      className="text-4xl font-bold mb-12 text-center dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
  )
}
