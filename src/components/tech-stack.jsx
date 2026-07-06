import { motion } from "framer-motion";
import { Tooltip } from "./ui/Tooltip";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { Database, Code2, Wrench, GitBranchPlus } from "lucide-react";

const techStack = {
  "Frontend & Framework": [
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      category: "Frontend",
      proficiency: 90,
      description: "Primary frontend library for building user interfaces",
    },
    {
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      category: "Framework",
      proficiency: 55,
      description: "React framework for production-grade applications",
    },
  ],
  "Backend & Database": [
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      proficiency: 90,
      description: "Runtime environment for server-side JavaScript",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      category: "Database",
      proficiency: 90,
      description: "NoSQL database for modern applications",
    },
    {
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      category: "Backend",
      proficiency: 80,
      description: "Object-oriented programming language",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      category: "Backend",
      proficiency: 50,
      description: "Versatile programming language",
    },
  ],
  "Tools & Testing": [
    {
      name: "VS Code",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      category: "Tools",
      proficiency: 95,
      description: "Preferred code editor",
    },
    {
      name: "Selenium",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg",
      category: "Testing",
      proficiency: 65,
      description: "Web application testing framework",
    },
    {
        name: "Postman",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
        category: "Testing",
        proficiency: 90,
        description: "API development and testing tool",
    },
  ],
  "Deployment & Version Control": [
    {
        name: "Vercel",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
        category: "Deployment",
        proficiency: 85,
        description: "Frontend and full-stack application hosting",
    },
    {
        name: "Netlify",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg",
        category: "Deployment",
        proficiency: 80,
        description: "Powerful platform for static site deployment",
    },
    {
      name: "Render",
      icon: "/placeholder.svg?height=48&width=48",
      category: "Deployment",
      proficiency: 75,
      description: "Cloud application hosting platform",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      category: "Version Control",
      proficiency: 88,
      description: "Distributed version control system",
    },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      category: "Version Control",
      proficiency: 90,
      description: "Code hosting and collaboration platform",
    },
  ],
};

const categoryIcons = {
  "Frontend & Framework": <Code2 className="w-5 h-5" />,
  "Backend & Database": <Database className="w-5 h-5" />,
  "Tools & Testing": <Wrench className="w-5 h-5" />,
  "Deployment & Version Control": <GitBranchPlus className="w-5 h-5" />,
};

export default function TechStack() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            Tech Stack & Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid gap-8">
          {Object.entries(techStack).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  {categoryIcons[category]}
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {items.map((tech, index) => (
                    <Tooltip key={tech.name} content={tech.description}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                      >
                        <div className="relative w-12 h-12">
                          <img
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.proficiency}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-blue-500"
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-white">{tech.name}</span>
                        <Badge variant="secondary">Proficiency: {tech.proficiency}%</Badge>
                      </motion.div>
                    </Tooltip>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
