import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Youtube Companion",
    timeline: "Feb 2024",
    description: [
      "Developed a Google Chrome extension to enhance YouTube viewing experience with real-time AI insights, using JavaScript, HTML, and CSS for a user-friendly popup interface",
      "Integrated OpenAI’s API to interpret user queries and generate contextually relevant responses",
      "Engineered a robust backend system using Heroku, Node.js, and Express.js to handle API requests and manage data flow, enabling efficient communication between the extension, YouTube’s interface, and the AI service"
    ],
    technologies: ["React", "Node.js", "OpenAI API", "JavaScript", "HTML/CSS", "Python"]
  },
  {
    id: 2,
    title: "Persona Web Automation",
    timeline: "Feb 2024 - Aug 2024",
    description: [
      "Developed a flexible automation framework capable of handling most web tasks, influenced by an AI-generated persona based on users’ personalities",
      "Implemented React, JavaScript, and Tailwind for the user interface and Python and Flask for the backend",
      "Utilized the OpenAI API to generate user personas and analyze web pages for personality-accurate automation"
    ],
    technologies: ["React", "Tailwind", "JavaScript", "Flask", "Python", "OpenAI API"] 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.006,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-50 border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-600 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{project.timeline}</span>
        </div>

        <ul className="space-y-2 text-slate-600">
          {project.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-4xl w-full mx-auto py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.div 
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <p className="text-xl text-slate-600">
            Some of my work
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="space-y-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;