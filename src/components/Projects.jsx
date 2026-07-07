import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-5xl font-black mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -12 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <Github className="text-gray-600" size={24} />
              </div>
              
              <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-6 pt-4 border-t border-white/5">
              <a 
                href={project.github || "https://github.com/adityapandey0456"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-all group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" /> 
                Source Code
              </a>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-all group"
                >
                  <ExternalLink size={18} className="group-hover:scale-110 transition-transform" /> 
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;