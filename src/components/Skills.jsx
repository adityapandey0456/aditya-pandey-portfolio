import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Cpu, Layout } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const iconMap = {
  "Languages": <Code2 className="text-accent-blue" />,
  "Frontend": <Layout className="text-accent-cyan" />,
  "Backend": <Database className="text-accent-purple" />,
  "Cloud & DevOps": <Cloud className="text-accent-blue" />,
  "ML & AI": <Cpu className="text-accent-cyan" />
};

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
        Technical Toolkit <span className="h-1 flex-grow bg-white/10 rounded-full"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-accent-blue/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4 text-xl font-semibold">
              {iconMap[skillGroup.category]}
              {skillGroup.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;