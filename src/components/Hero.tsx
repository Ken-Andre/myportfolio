"use client"; // Required for Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Je transforme la data en solutions intelligentes.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8"
      >
        Data Scientist & Développeur Full-Stack spécialisé en ML et IA.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
        >
          Me contacter <ArrowRight size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
