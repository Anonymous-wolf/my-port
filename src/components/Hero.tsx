import React from 'react';
import { ChevronDown, Github, Linkedin, MessageCircle, Download } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#skills');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-teal-900/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="circuit-pattern"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-teal-400 rounded-full glow"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-teal-400 via-purple-500 to-blue-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl">
                👩‍💻
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
          </div>

          {/* Name and Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Vaishnavi S
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Engineer. Innovator. Leader.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Tech Strategist and Business crafter crafting secure, innovative solutions 
            at the intersection of technology and creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 glow-button">
              View My Work
            </button>
            <a 
              href="https://drive.google.com/file/d/1pUjFYH_5nBLnvxjFTU7aglrg7ucq5L0O/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-500 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-delay-4">
            <a href="https://github.com/Anonymous-wolf/" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-gray-800/50 hover:bg-teal-500/20 border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:scale-110 transform group">
              <Github size={24} className="text-gray-400 group-hover:text-teal-400" />
            </a>
            <a href="https://www.linkedin.com/in/vaishnavi-s-486736229/" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-gray-800/50 hover:bg-purple-500/20 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 transform group">
              <Linkedin size={24} className="text-gray-400 group-hover:text-purple-400" />
            </a>
            <a href="https://wa.me/918248272707" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-gray-800/50 hover:bg-green-500/20 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-110 transform group">
              <MessageCircle size={24} className="text-gray-400 group-hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-teal-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;