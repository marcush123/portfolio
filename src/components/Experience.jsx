import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Undergraduate Research Intern",
    company: "PRIME Lab @ Virginia Tech",
    duration: "Feb 2024 - Present",
    location: "Blacksburg, VA",
    description: [
      "Developed AI-powered agents with distinct personas to automate web-based tasks, utilizing React, JavaScript, and Python",
      "Collaborated with diverse teams to design and implement user studies evaluating the effectiveness of AI-enhanced interfaces",
    ],
    technologies: ["React", "Python", "Javascript", "PostgreSQL"]
  },
  {
    id: 2,
    role: "Undegraduate Teaching Assistant",
    company: "Virginia Tech Computer Science Department",
    duration: "Aug 2024 - Present",
    location: "Blacksburg, VA",
    description: [
      "TA for the Data Structures and Algorithms Course at Virginia Tech",
      "Assisted 450+ students with assignments and projects by holding regular office hours, answering questions on the class forum, and responding to emails from students",
      "Worked closely with instructors and other TAs to cultivate a supportive learning environment for students by attending weekly meetings, reviewing assignment specifications, and grading assignments"
    ],
    technologies: ["Java"]
  },
  {
    id: 3,
    role: "Summer Research Intern",
    company: "Center for the Enhancement of Engineering Diversity (CEED)",
    duration: "May 2024 - July 2024",
    location: "Blacksburg, VA",
    description: [
      "Attended weekly professional workshops to enhance skills in research methodologies, academic writing, and professional development",
      "Conducted independent research related to AI and automation, presenting findings and project outcomes at the end-of-program VT research symposium"
    ],
    technologies: ["JavaScript", "React", "Python", "PostgreSQL"]
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

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-50 border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-800">{experience.role}</h3>
          <p className="text-lg text-slate-700">{experience.company}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-slate-600 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        <ul className="space-y-2 text-slate-600">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {experience.technologies.map((tech, index) => (
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

const Experience = () => {
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-xl text-slate-600">
            My journey and growth
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="space-y-6"
        >
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;