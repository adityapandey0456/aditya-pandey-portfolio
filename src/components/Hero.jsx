import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative pt-10 pb-20">
      
      {/* Profile Picture - Extra Large & Premium Glow */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-12"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-cyan-400 animate-spin-slow blur-md opacity-75" style={{ padding: '10px' }}></div>
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
          <img 
            src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Aditya Pandey"
        
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=Aditya+Pandey&background=0D1117&color=fff&size=512"}
          />
        </div>
      </motion.div>

      {/* Name and Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-4">
          {resumeData.profile.name}
        </h1>
        
        <p className="text-xl md:text-3xl font-light text-cyan-400/90 tracking-[0.2em] uppercase mb-10">
          Full Stack Developer | Cloud & ML Enthusiast
        </p>
      </motion.div>

      {/* Social Links */}
      <div className="flex gap-6 mb-12">
  {[
    { 
      Icon: Github, 
      href: "https://github.com/adityapandey0456",
      color: "hover:text-white",
      external: true
    },
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/aditya-pandey-2442b7244",
      color: "hover:text-blue-400",
      external: true
    },
    { 
      Icon: Mail, 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=adityapandey0456@gmail.com",
      color: "hover:text-red-400",
      external: true
    }
  ].map((item, i) => (
    <motion.a
      key={i}
      whileHover={{ y: -5, scale: 1.1 }}
      href={item.href}
      target={item.external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`
        p-4 
        bg-white/5 
        rounded-2xl 
        border border-white/10 
        backdrop-blur-md 
        transition-all 
        ${item.color}
      `}
    >
      <item.Icon size={28} />
    </motion.a>
  ))}
</div>

      {/* Download Resume Button */}
      <motion.a 
        href="/resume.pdf" 
        download="Aditya_Pandey_Resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group px-12 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2 no-underline"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Download size={22} /> Download Resume
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.a>

      {/* Stats Bar - Filling the empty space professionally */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 w-full max-w-4xl mx-auto border-t border-white/5 pt-12"
      >
        {[
          { label: "Years Experience", value: "1" },
          { label: "Projects Completed", value: "30+" },
          { label: "Major Internships", value: "2" },
          { label: "Specialization", value: "ML & Cloud" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center group">
            <span className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mt-2 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Hero;