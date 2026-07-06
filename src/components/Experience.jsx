import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { TracingBeam } from "../components/TracingBeam";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

function Experience() {
  const experiences = [
  {
    company: "Freelance Full Stack Developer",
    location: "Remote",
    period: "November 2023 - Present",
    role: "Full Stack & AI Developer",
    responsibilities: [
      "Delivered 6+ production-ready websites and web applications for clients using React.js, Next.js, Node.js, FastAPI, Python, and Tailwind CSS.",
      "Developed and maintained business platforms for clients including RK Technical Support, RR Enterprise, Baba Dairy, and SRAJ, focusing on scalable and responsive solutions.",
      "Built full-stack applications with secure REST APIs, authentication systems, database integration, and modern UI/UX for improved business workflows.",
      "Deployed applications on Vercel and provided ongoing maintenance, bug fixes, feature enhancements, and technical support for production systems.",
    ],
  },
  {
    company: "Celebal Technologies",
    location: "Jaipur",
    period: "June 2025 - August 2025",
    role: "React JS Intern",
    responsibilities: [
      "Contributed to the development of multiple frontend projects—including a dashboard, Spotify clone, eCommerce store, and Kanban board—under the guidance of a senior developer.",
      "Implemented responsive UI components using React and Tailwind CSS, integrating animations with Framer Motion to enhance user interactivity.",
      "Utilized Redux for state management and created custom React hooks to promote code reuse and maintainability across projects.",
      "Collaborated on deploying applications to staging environments, gaining hands-on experience in iterative development and version control.",
    ],
  },
  {
    company: "GRID REPUTATION PVT. LTD.",
    location: "Howrah, WB",
    period: "May 2024 - July 2024",
    role: "Frontend Developer Intern",
    responsibilities: [
      "Developed and optimized interactive UI components using React.js and Tailwind CSS.",
      "Enhanced website performance using best coding practices.",
      "Collaborated with a team to improve website functionality.",
    ],
  },
];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="Professional Experience" />

        <TracingBeam className="mt-16">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.025] relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-blue-200 dark:bg-blue-700 opacity-50"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                    {exp.company === "Freelance" ? (
                      <Globe className="w-6 h-6 mr-2 text-blue-500" />
                    ) : null}
                    {exp.company}
                  </h3>

                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </p>

                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </p>

                  <p className="mt-4 text-xl font-medium flex items-center dark:text-gray-200">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {exp.role}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

export default Experience;
