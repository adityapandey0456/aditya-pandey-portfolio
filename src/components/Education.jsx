import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Education = () => {
  const certifications = [
    "SQL - HackerRank", "Software Engineer Intern - HackerRank",
    "Full Stack Web Development - RCPL", "C with Data Structures - RCPL",
    "Python Basic to Advance - Udemy"
  ];

  return (
    <section className="py-20" id="education">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Side */}
        <div>
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <GraduationCap className="text-accent-blue" /> Education
          </h2>
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">B.Tech in CS & Engineering</h3>
              <p className="text-accent-cyan">Hindustan College of Science and Technology</p>
              <p className="text-gray-500 text-sm">2022 - 2026</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400">Class XII (CBSE)</p>
                <p className="text-lg font-bold text-white">80%</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400">Class X (CBSE)</p>
                <p className="text-lg font-bold text-white">81%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Side */}
        <div>
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <Award className="text-accent-purple" /> Certifications
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {certifications.map((cert, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 group"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-accent-cyan" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;