import { motion } from 'framer-motion';
import { Github, ArrowRight, Database, Linkedin } from 'lucide-react'; // Added Linkedin

import profilePic from '../assets/Images/KunalV2.jpg'; 

export const Hero = () => {
  const nameReveal = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
        
        <div className="flex-1 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 bg-white/5 px-4 py-2 rounded-full border border-primary/20"
          >
            <Database size={16} className="text-primary" />
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              MERN Stack Developer
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="block text-white mb-2"
            >
              Hi, I'm
            </motion.span>
            
            <motion.span 
              variants={nameReveal}
              initial="hidden"
              animate="visible"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-accent pb-2"
            >
              Kunal Petare
            </motion.span>
          </h1>

          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Build it clean. Scale it up.
          </motion.h2>

          <motion.p 
            className="text-secondary text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A Full Stack developer specializing in <strong className="text-white">MongoDB, Express, React, and Node.js</strong>. 
            I build scalable web applications with clean architecture and modern performance.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#projects" className="flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
              View Work <ArrowRight size={20} />
            </a>
            
            {/* GITHUB BUTTON */}
            <a href="https://github.com/Nexo-0" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-4 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              <Github size={20} />
            </a>

            {/* NEW LINKEDIN BUTTON */}
            <a href="https://www.linkedin.com/in/kunal-petare" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 px-6 py-4 rounded-full font-bold hover:bg-blue-500/20 transition-all hover:scale-105 active:scale-95">
              <Linkedin size={20} />
            </a>

          </motion.div>
        </div>

        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px] group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-accent rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-surface/50 backdrop-blur-sm shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 opacity-40"></div>
               <img 
                 src={profilePic} 
                 alt="Kunal Petare" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-surface border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-sm font-bold text-white">Full Stack Dev</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};