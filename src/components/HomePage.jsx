import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, User, Briefcase, Mail } from 'lucide-react';
import AboutMe from './AboutMe';
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

// Animation variants for consistent animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        delay: 0.3
      }
    }
  };

// Navigation sections configuration
const sections = [
  {
    id: 'about',
    icon: User,
    title: 'About Me',
    description: 'Who am I?',
    color: 'text-slate-600',
    component: AboutMe
  },
  {
    id: 'projects',
    icon: Code,
    title: 'Projects',
    description: "See what I've built...",
    color: 'text-slate-600',
    component: Projects
  },
  {
    id: 'experience',
    icon: Briefcase,
    title: 'Experience',
    description: "Where I've been...",
    color: 'text-slate-600',
    component: Experience
  },
  {
    id: 'contact',
    icon: Mail,
    title: 'Contact',
    description: "Let's connect...",
    color: 'text-slate-600',
    component: Contact
  }
];

const NavigationCard = ({ section, onClick }) => {
  const Icon = section.icon;
  
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="bg-gray-50 border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center space-x-4">
          <Icon className={`w-8 h-8 ${section.color} group-hover:text-slate-800 transition-colors duration-300`} />
          <div>
            <h2 className="text-xl font-semibold text-slate-800 group-hover:text-slate-900">
              {section.title}
            </h2>
            <p className="text-slate-500">{section.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (newSection) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveSection(newSection);
    }
  };

  const handleBackClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveSection('home');
    }
  };

  const renderContent = () => {
    if (activeSection === 'home') {
      return (
        <motion.div {...fadeInUp} className="w-full flex flex-col items-center pt-24">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 text-slate-800">
              Marcus Huynh
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Developer • Learner • Innovator
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            {sections.map((section) => (
              <NavigationCard
                key={section.id}
                section={section}
                onClick={() => handleSectionChange(section.id)}
              />
            ))}
          </div>
        </motion.div>
      );
    }

    const CurrentComponent = sections.find(s => s.id === activeSection)?.component;
    return CurrentComponent ? <CurrentComponent /> : null;
  };

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] flex flex-col pt-20 p-8">
      <AnimatePresence mode="wait">
        {activeSection !== 'home' && (
          <motion.div
            {...fadeInDown}
            className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 relative">
              <button
                onClick={handleBackClick}
                disabled={isTransitioning}
                className="absolute left-4 text-slate-600 hover:text-slate-900 transition-colors disabled:opacity-50"
              >
                ← Back to Home
              </button>
              <h2 className="text-xl font-semibold text-slate-800 text-center">
                {sections.find(s => s.id === activeSection)?.title}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence 
        mode="wait" 
        onExitComplete={() => setIsTransitioning(false)}
      >
        <motion.div
          key={activeSection}
          {...fadeInUp}
          className="w-full"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomePage;