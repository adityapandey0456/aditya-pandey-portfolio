import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData.json';

const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-12 border-l-2 border-white/10 ml-4">
        {resumeData.experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
            <h3 className="text-2xl font-bold">{exp.role}</h3>
            <p className="text-blue-400 font-medium mb-4">{exp.company} | {exp.duration}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {exp.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;