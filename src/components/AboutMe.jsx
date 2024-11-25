import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Heart, Rocket, Gamepad2, Download } from 'lucide-react';

const AboutMe = () => {
  const interests = [
    {
      icon: CheckSquare,
      title: 'Perfectionist',
      description: 'As cliche as it sounds, I\'m a perfectionist at heart. Whatever I happen to be working on at the moment, whether it\'s a personal project, class assignment, or my in-game character, it has to be absolutely perfect. I guess you can say it\'s almost a flaw as much as it is a strength!',
      color: 'text-slate-600'
    },
    {
      icon: Heart,
      title: 'Some Interesting Hobbies',
      description: 'When nothing else can keep my ADHD in check, juggling is my go-to. The focus it requires to precisely track and place each object is exhilirating to say the least. Plus, it\'s a cool party trick. But when I\'m not practicing new patterns, I\'m deep into the mechanical keyboard world, constantly modifying keyboards to find new ways to switch up my typing experience.',
      color: 'text-slate-600'
    },
    {
      icon: Gamepad2,
      title: 'When I\'m Not Coding',
      description: 'Like many others out there, I love to play video games. That special feeling of logging on to the console and kicking back after a long day of work is truly unmatched. But as much as I love coding and gaming, life\'s too short to be stuck behind a screen. That\'s why I love staying fit and exercising when I can, and you might catch me at the local gym or basketball court lifting weights and getting shots up.',
      color: 'text-slate-600'
    },
    {
      icon: Rocket,
      title: 'My Goals',
      description: 'To say I\'m an ambitious person would be an understatement. I\'m always finding ways to push my boundaries and limits to the absolute maximum, crushing any goals I set for myself along my career. Whether it\'s making a difference as an employee, or starting my own company someday, you can bet I will put in my best effort.',
      color: 'text-slate-600'
    }
  ];

  return (
    <div className="max-w-4xl w-full mx-auto py-8">
      {/* About Me Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-6 text-slate-800">About Me</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Hey there! As you probably already know by now, I'm Marcus. 
          I'm currently studying Computer Science at Virginia Tech on an accelerated (4+1) pathway to earn my Master of Engineering degree.
        </p>
      </motion.div>

      {/* Resume Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 text-center"
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </motion.div>

      {/* Bio Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gray-50 border border-slate-200 rounded-lg p-8 mb-12 shadow-sm"
      >
        <p className="text-lg text-slate-600 leading-relaxed">
          My resume and other parts of my website have tons of information about my past experiences, projects, and other details 
          you can use to draw conclusions on the type of worker I am, so I figured I'll use this page to go into more of my personal life
          and who I really am as a person. 
        </p>
      </motion.div>

      {/* Interests Grid */}
      <div className="grid grid-cols-1 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-50 border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <Icon className={`w-10 h-10 ${interest.color} group-hover:text-slate-800 transition-colors duration-300 flex-shrink-0 mt-1`} />
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-800 group-hover:text-slate-900 mb-3">
                      {interest.title}
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;