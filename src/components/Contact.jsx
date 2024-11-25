import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </motion.a>
);

const Contact = () => {
  return (
    <div className="max-w-4xl w-full mx-auto pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-8"
      >
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Feel free to reach out! You can find me on these platforms.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-50 border border-slate-200 rounded-lg p-6 shadow-sm w-full max-w-md">
            <div className="space-y-4">
              <SocialLink
                href="mailto:marcusj.huynh@gmail.com"
                icon={Mail}
                label="marcusj.huynh@gmail.com"
              />
              <SocialLink
                href="https://github.com/marcush123"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/mjhuynh/"
                icon={Linkedin}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;