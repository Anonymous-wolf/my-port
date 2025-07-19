import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const [isHeartBeating, setIsHeartBeating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'vaishusmile0931@gmail.com',
      href: 'mailto:vaishusmile0931@gmail.com',
      color: 'teal'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 8248272707',
      href: 'tel:+918248272707',
      color: 'purple'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Chennai, India',
      href: '#',
      color: 'blue'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/Anonymous-wolf/',
      color: 'gray'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vaishnavi-s-486736229/',
      color: 'blue'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      href: 'https://wa.me/918248272707',
      color: 'green'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Patents', href: '#patents' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="relative bg-gray-900 border-t border-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-purple-900/10 to-blue-900/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="floating-particles"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Vaishnavi S
                </h3>
                <p className="text-gray-400 text-lg mb-4">
                  Tech Strategist & Business Crafter
                </p>
                <p className="text-gray-500 max-w-md">
                  Passionate about creating secure, innovative solutions at the intersection of technology and creativity. 
                  Always ready to tackle new challenges and drive meaningful impact.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className={`flex items-center space-x-3 text-gray-400 hover:text-${contact.color}-400 transition-colors duration-300 group`}
                  >
                    <div className={`p-2 bg-gray-800 rounded-lg group-hover:bg-${contact.color}-500/20 transition-colors duration-300`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{contact.label}</div>
                      <div className="text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-teal-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-teal-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-teal-500 resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg hover:scale-105 transform transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 hover:bg-${social.color}-500/20 border border-gray-700 hover:border-${social.color}-500 rounded-lg transition-all duration-300 hover:scale-110 transform group`}
                      title={social.label}
                    >
                      <div className={`text-gray-400 group-hover:text-${social.color}-400`}>
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">Built with</span>
              <button
                onMouseEnter={() => setIsHeartBeating(true)}
                onMouseLeave={() => setIsHeartBeating(false)}
                className="focus:outline-none"
              >
                <Heart
                  className={`w-5 h-5 text-red-400 ${isHeartBeating ? 'animate-pulse scale-125' : ''} transition-all duration-300`}
                  fill="currentColor"
                />
              </button>
              <span className="text-gray-400 text-sm">by</span>
              <span className="text-teal-400 font-semibold">Vaishnavi</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Vaishnavi S. All rights reserved.</span>
              <button
                onClick={scrollToTop}
                className="px-4 py-2 bg-gray-800 hover:bg-teal-500/20 border border-gray-700 hover:border-teal-500 rounded-lg transition-all duration-300 hover:scale-105 transform"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        <a
          href="mailto:vaishusmile0931@gmail.com"
          className="block p-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 glow-button group"
          title="Send Email"
        >
          <Mail className="w-6 h-6 text-white group-hover:scale-110 transform transition-transform duration-300" />
        </a>
        <a
          href="https://wa.me/918248272707"
          className="block p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 glow-button group"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transform transition-transform duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;