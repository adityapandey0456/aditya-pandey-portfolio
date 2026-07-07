import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-gray-400 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-accent-blue/10 rounded-lg text-accent-blue"><Mail size={20}/></div>
              {resumeData.profile.email}
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-accent-cyan/10 rounded-lg text-accent-cyan"><Phone size={20}/></div>
              {resumeData.profile.phone}
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-accent-purple/10 rounded-lg text-accent-purple"><MapPin size={20}/></div>
              {resumeData.profile.location}
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue outline-none transition-all" />
          <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue outline-none transition-all" />
          <textarea placeholder="Message" rows="4" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue outline-none transition-all"></textarea>
          <button className="w-full py-4 bg-accent-blue hover:bg-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;