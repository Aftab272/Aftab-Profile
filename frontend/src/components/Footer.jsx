import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/ranaaftabakram982", label: "GitHub" }, // Add actual link
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aftab-akram-3a297b407", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1Ef1cWSsJ4/", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/creativestackagency", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter (X)" }, // X link not provided in prompt
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" }, // Youtube link not provided
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-poppins font-bold text-primary mb-4 block">
              MA<span className="text-gray-900 dark:text-white">.</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed max-w-xs mx-auto md:mx-0">
              A passionate MERN Stack Developer and Graphic Designer dedicated to building modern, scalable digital solutions.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>COMSATS University Islamabad</li>
              <li>Multan, Pakistan</li>
              <li><a href="mailto:ranaaftabakram982@gmail.com" className="hover:text-primary transition-colors">ranaaftabakram982@gmail.com</a></li>
              <li><a href="https://wa.me/923027434569" className="hover:text-primary transition-colors">+92 302 7434569</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Muhammad Aftab Akram. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
