import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "./assets/profile.png";

export default function Portfolio() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const techStack = {
    Database: ["MS SQL Server", "MongoDB", "PostgreSQL"],
    Backend: [".NET Core", "Node.js", "Python (Django, Flask)"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS"],
    DevOps: ["Docker", "Kubernetes", "Jenkins"],
    Cloud: ["Azure", "AWS", "Google Cloud"],
  };

  const projects = [
    { name: "Project 1", description: "Description of project 1" },
    { name: "Project 2", description: "Description of project 2" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-gray-200 to-cream-300 text-gray-900 p-5">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-black">My Portfolio</h1>
        <div className="flex gap-4">
          <a href="#techstack" className="hover:text-gray-600 text-orange-500 font-bold">Tech Stack</a>
          <a href="#projects" className="hover:text-gray-600 text-orange-500 font-bold">Projects</a>
          <a href="#about" className="hover:text-gray-600 text-orange-500 font-bold">About</a>
          <a href="#contact" className="hover:text-gray-600 text-orange-500 font-bold">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center my-20 gap-10">
        {/* About Section (Left Side) */}
        <div id="about" className="text-left max-w-lg">
          <motion.h2 className="text-5xl font-bold text-black" animate={{ scale: 1.1 }}>
            I'm <span className="text-orange-500">Sanket Chaudhari</span>
          </motion.h2>
          <p className="text-2xl font-bold text-black mt-4">Developer</p>
          <p className="text-gray-600 mt-4">
            I am a <span className="text-orange-500 font-bold">curious and passionate developer</span> with a strong
            problem-solving mindset. Always eager to learn, adapt, and innovate, I thrive on challenges that push me to grow.
          </p>
        </div>

        {/* Profile Image (Right Side) */}
        <div>
          <img src={profileImage} alt="Profile" className="w-56 h-56 rounded-full border-4 border-gray-500" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="my-20 text-center">
        <h3 className="text-3xl font-bold text-orange-500">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {Object.keys(techStack).map((tech) => (
            <motion.div
              key={tech}
              className="bg-gray-200 p-5 rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setSelectedTech(tech)}
              onMouseLeave={() => setSelectedTech(null)}
            >
              <h4 className="text-xl font-semibold">{tech}</h4>
              {selectedTech === tech && (
                <motion.div className="mt-2 bg-gray-300 p-4 rounded-lg shadow-lg text-left">
                  <h4 className="text-2xl font-semibold">{tech} Tools</h4>
                  <ul className="mt-2">
                    {techStack[tech].map((tool, index) => (
                      <li key={index} className="text-gray-700">{tool}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="my-20 text-center">
        <h3 className="text-3xl font-bold text-orange-500">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 p-5 rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setSelectedProject(project.name)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <h4 className="text-xl font-semibold">{project.name}</h4>
              {selectedProject === project.name && (
                <motion.div className="mt-2 bg-gray-300 p-4 rounded-lg shadow-lg text-left">
                  <p className="text-gray-700">{project.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="my-20 text-center">
        <h3 className="text-3xl font-bold text-orange-500">Contact</h3>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-800"><FaGithub /></a>
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-800"><FaLinkedin /></a>
          <a href="#" className="text-2xl text-gray-600 hover:text-gray-800"><FaEnvelope /></a>
        </div>
        <div className="mt-10">
          <a
            href="#"
            className="px-6 py-3 bg-orange-500 rounded-lg text-white text-lg font-semibold hover:bg-orange-600 transition duration-300"
            download
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
