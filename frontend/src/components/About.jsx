import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, MonitorPlay } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              A Dedicated Software Engineering Student & Creative Professional
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am currently pursuing a BS in Computer Science (Software Engineering) at COMSATS University Islamabad. With practical experience in frontend and backend development using the MERN Stack, I have successfully delivered multiple web applications and creative design projects.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Beyond coding, I specialize in graphic designing, branding, Canva, social media content creation, and YouTube automation. I enjoy solving real-world problems through technology and am deeply committed to continuously improving my development and design skills to create digital solutions that are both functional and visually stunning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-6 glass rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <Code className="text-primary w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">MERN Stack</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Building scalable web applications using MongoDB, Express, React, and Node.js.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{...fadeIn, hidden: { opacity: 0, y: 30, transition: { delay: 0.2 } }}}
              className="p-6 glass rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <Palette className="text-purple-500 w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Graphic Design</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Creating impactful branding, logos, and social media designs.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{...fadeIn, hidden: { opacity: 0, y: 30, transition: { delay: 0.4 } }}}
              className="p-6 glass rounded-2xl hover:-translate-y-2 transition-transform duration-300 sm:col-span-2 md:col-span-1"
            >
              <MonitorPlay className="text-red-500 w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">YouTube Automation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Managing channels, creating content strategies, and optimizing for SEO.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
