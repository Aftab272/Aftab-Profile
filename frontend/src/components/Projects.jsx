import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Hardcoded beautiful projects
    setProjects([
      { 
        id: 1, 
        name: "Creative Stack Agency", 
        description: "A modern, premium agency website with stunning animations and responsive design.", 
        language: "React + Vite", 
        html_url: "https://github.com/", 
        homepage: "https://creative-stack-agency-phi.vercel.app/",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
      },
      { 
        id: 2, 
        name: "E-Commerce Clothing Store", 
        description: "Full-stack MERN e-commerce platform with payment gateway and admin dashboard.", 
        language: "MERN Stack", 
        html_url: "https://github.com/", 
        homepage: "#",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
      },
      { 
        id: 3, 
        name: "YouTube Analytics Pro", 
        description: "Dashboard for YouTube automation experts to track channel growth and SEO metrics.", 
        language: "Next.js", 
        html_url: "https://github.com/", 
        homepage: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      { 
        id: 4, 
        name: "Real Estate Portal", 
        description: "Property listing platform with advanced filtering and map integration.", 
        language: "React + Firebase", 
        html_url: "https://github.com/", 
        homepage: "#",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
      },
      { 
        id: 5, 
        name: "AI Content Generator", 
        description: "SaaS application generating SEO-optimized articles using OpenAI API.", 
        language: "React + Node", 
        html_url: "https://github.com/", 
        homepage: "#",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
      },
      { 
        id: 6, 
        name: "Graphic Design Showcase", 
        description: "Interactive portfolio displaying branding, logos, and social media designs.", 
        language: "Framer Motion", 
        html_url: "https://github.com/", 
        homepage: "#",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
      }
    ]);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works fetched directly from GitHub.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={project.image || `https://picsum.photos/seed/${project.id}/800/600`} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 truncate" title={project.name}>
                    {project.name.replace(/[-_]/g, ' ')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                    {project.description || "No description provided for this repository."}
                  </p>
                  
                  {project.language && (
                    <div className="mb-4">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                        {project.language}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex gap-3 text-gray-500">
                      {project.stargazers_count !== undefined && (
                        <span className="flex items-center gap-1 text-sm"><Star size={14} /> {project.stargazers_count}</span>
                      )}
                      {project.forks_count !== undefined && (
                        <span className="flex items-center gap-1 text-sm"><GitFork size={14} /> {project.forks_count}</span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <a href={project.html_url} target="_blank" rel="noreferrer" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:text-primary transition-colors" title="GitHub Repo">
                        <Github size={18} />
                      </a>
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noreferrer" className="p-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors" title="Live Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
