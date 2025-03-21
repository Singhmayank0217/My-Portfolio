import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitlabIcon as GitHub, ExternalLink, X } from "lucide-react"
import { Timeline } from "./Timeline"
import Rk from "../assets/Rk-1.png";
import SR from "../assets/Sraj-1.png";
import GR from "../assets/Grid-1.png";
import SS from "../assets/Shop-1.png";
import AS from "../assets/Apple-1.png";

const projects = [
  {
    id: 1,
    title: "S RAJ INFRA PROJECTS PRIVATE LIMITED",
    description: "Spearheaded the design and development of an enterprise-level SaaS platform, utilizing React and Tailwind CSS. Engineered dynamic user interfaces with Framer Motion animations, achieving 40% improved user engagement metrics. Successfully deployed to production, serving as the primary client acquisition and service showcase platform.",
    image: SR,
    technologies: ["React", "Node.js", "Express", "Firebase", "Vercel", "Tailwind CSS"],
    github: "https://github.com/Singhmayank0217/S-RAJ-INFRA",
    demo: "https://s-raj-infra.vercel.app/",
    date: "December 2024 - Present",
  },
  {
    id: 2,
    title: "R K TECHNICAL SUPPORT",
    description: "Led the development of a professional Security website, utilizing HTML, CSS, and JavaScript. Achieved a fully responsive design for mobile, desktop, and tablet, integrating dynamic Google Maps for real-time tracking. Deployed by the client for real-world use on mobile, desktop, and tablet platforms.",
    image: Rk,
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API", "Vercel"],
    github: "https://github.com/Singhmayank0217/RKTECHNICALSUPPORT",
    demo: "https://www.rktechs.co/",
    date: "December 2023 - January 2024",
  },
  {
    id: 3,
    title: "Grid Reputation, a market agency company",
    description: " This project is currently deployed on Vercel and is still a work in progress. The client has requested to hold off on further development while awaiting design updates.",
    image: GR,
    technologies: ["React", "Node.js", "Express", "Firebase", "Vercel", "Tailwind CSS"],
    github: "https://github.com/Singhmayank0217/Freelance-Project-GridReputation",
    demo: "https://grid-reputation.vercel.app/",
    date: "March 2023 - Present",
  },
  {
    id: 4,
    title: "The Sparkle Shop",
    description: "Currently, I'm waiting for the design, as the site is built on WordPress.",
    image: SS,
    technologies: ["React", "Node.js", "Express", "MongoDB", "MERN", "Tailwind CSS", "Vercel","Render"],
    github: "",
    demo: "https://thesparkleshop.in/",
    date: "Feb 2025 - Present",
  },
  {
    id: 5,
    title: "Apple Store Project : Apple clone iPhone 15 Pro",
    description: "This project is currently deployed on Vercel and utilizes Three.js for creating immersive 3D graphics, along with Framer Motion for sophisticated animations and transitions.",
    image: AS,
    technologies: ["React", "Tailwind CSS","Framer-Motion", " Gsap", "Three.Js", "Vercel"],
    github: "https://github.com/Singhmayank0217/Apple_ThreeJs",
    demo: "https://iphone15pro-mayank.netlify.app/",
    date: "Feb 2025 - Present",
  },
 
]

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      onClick={() => onClick(project)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden group"
      whileHover={{ y: -10 }}
      layoutId={`project-card-${project.id}`}
    >
      <motion.div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
      <motion.div className="p-5">
        <motion.h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</motion.h3>
        <motion.p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
          {project.description}
        </motion.p>
        <motion.div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.div
      layoutId={`project-card-${project.id}`}
      className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full overflow-hidden relative"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 dark:text-gray-300 hover:text-gray-600 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={24} />
      </motion.button>
      <motion.div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          layoutId={`project-image-${project.id}`}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      </motion.div>
      <motion.div className="p-8">
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"
          layoutId={`project-title-${project.id}`}
        >
          {project.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHub size={20} /> GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} /> Live Demo
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
)

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const data = projects.map((project) => ({
    title: project.date,
    content: <ProjectCard project={project} onClick={setSelectedProject} />,
  }))

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects Journey
        </motion.h2>
        <Timeline data={data} />
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}
