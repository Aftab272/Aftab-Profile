import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Users } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Creative Stack Agency */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Creative Stack Agency</h3>
                <p className="text-primary font-medium">Founder & Owner</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              As the Founder & Owner, I lead a creative team focused on delivering high-quality digital solutions for clients worldwide. I oversee project planning, client communication, branding strategies, and software development. Visit our agency at <a href="https://creative-stack-agency-phi.vercel.app/" target="_blank" rel="noreferrer" className="text-primary hover:underline">creative-stack-agency-phi.vercel.app</a>.
            </p>
            
            <div>
              <h4 className="font-semibold mb-3">Key Services:</h4>
              <div className="flex flex-wrap gap-2">
                {["MERN Stack", "UI/UX Design", "Graphic Design", "WordPress", "Shopify", "Digital Marketing", "YouTube Automation", "SEO"].map((service, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded-md text-gray-700 dark:text-gray-300">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team4Stack */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Team4Stack</h3>
                <p className="text-blue-500 font-medium">Team Member</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I collaborate with talented developers to build modern, scalable, and responsive web applications using the latest technologies. Visit us at <a href="http://www.team4stack.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">team4stack.com</a>.
            </p>
            
            <div>
              <h4 className="font-semibold mb-3">Responsibilities:</h4>
              <div className="flex flex-wrap gap-2">
                {["Full Stack Web Dev", "React/Next.js", "Node/Express", "REST APIs", "MongoDB", "Git/GitHub Collaboration"].map((task, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded-md text-gray-700 dark:text-gray-300">
                    {task}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto border-t-4 border-t-primary"
        >
          <Target className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">My Mission</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
            "My mission is to create modern, scalable, and impactful digital solutions while continuously improving my skills in software engineering, graphic design, and emerging technologies. I strive to help businesses grow through innovative web applications, creative branding, and user-focused experiences."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
