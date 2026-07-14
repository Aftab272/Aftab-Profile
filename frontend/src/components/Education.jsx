import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "BS Computer Science (Software Engineering)",
      institution: "COMSATS University Islamabad",
      period: "2024 – 2029",
      details: "Current Semester: 5th",
      icon: <GraduationCap size={24} className="text-primary" />
    },
    {
      degree: "FSC (Pre-Medical)",
      institution: "Muslim College Multan (Adda Billi Wala)",
      period: "Completed",
      details: "Higher Secondary Education",
      icon: <BookOpen size={24} className="text-blue-500" />
    },
    {
      degree: "Matriculation",
      institution: "Government High School Dokota",
      period: "Completed",
      details: "Secondary Education",
      icon: <Award size={24} className="text-purple-500" />
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1 w-10 h-10 rounded-full glass flex items-center justify-center bg-white dark:bg-darkNavy border-2 border-primary shadow-lg shadow-primary/20">
                  {edu.icon}
                </div>
                
                <div className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-primary mb-2">{edu.institution}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">{edu.period}</span>
                    <span>{edu.details}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
