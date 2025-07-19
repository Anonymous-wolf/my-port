import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Patents', href: '#patents' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-teal-500/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Vaishnavi S
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Anonymous-wolf/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:scale-110 transform">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vaishnavi-s-486736229/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href="https://wa.me/918248272707" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform">
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-teal-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Anonymous-wolf/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vaishnavi-s-486736229/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://wa.me/918248272707" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;