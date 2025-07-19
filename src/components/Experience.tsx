import React, { useEffect, useState } from 'react';
import { Building, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(0);

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: '8QUEENS SOFTWARE TECHNOLOGIES PVT LTD',
      location: 'Remote',
      period: 'Jan 2025 – Feb 2025',
      description: 'Interned as a Full-Stack Developer; built an AI-based Resume Analyzer using React, Node.js, MongoDB & Python, boosting website speed by 30%, developed and deployed REST APIs, enhancing data retrieval efficiency by 40% and implemented CI/CD pipelines with GitHub Actions.',
      achievements: [
        'Built AI-based Resume Analyzer',
        'Boosted website speed by 30%',
        'Enhanced data retrieval efficiency by 40%',
        'Implemented CI/CD pipelines with GitHub Actions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'GitHub Actions'],
      color: 'teal',
      side: 'left',
      hasCertificate: true
    },
    {
      title: 'CyberSecurity Intern',
      company: 'Cisco Virtual Internship (AICTE)',
      location: 'Virtual',
      period: 'Apr 2023 – May 2023',
      description: 'Delivered a simulated yet scalable campus networking blueprint that supports real-time administrative and academic operations with secured internal and external communication. Strengthened network security by 40% using firewalls, IDS, and authentication mechanisms.',
      achievements: [
        'Strengthened network security by 40%',
        'Analyzed network topology and implemented security measures',
        'Conducted penetration testing and vulnerability assessments',
        'Ensured secured infrastructure based on CIA principles'
      ],
      technologies: ['Network Security', 'Firewalls', 'IDS', 'Penetration Testing', 'Kali Linux'],
      color: 'purple',
      side: 'right',
      hasCertificate: true
    },
    {
      title: 'C++ Technical Trainer',
      company: 'Cybernaut Edutech Platform',
      location: 'Remote',
      period: 'Jan 2022 – Sep 2022',
      description: 'Interned in the R&D team and later trained 100+ students in C++ with a 100% course completion rate; created hands-on coding tasks to enhance logic and problem-solving skills.',
      achievements: [
        'Trained 100+ students in C++',
        'Achieved 100% course completion rate',
        'Created hands-on coding tasks',
        'Enhanced logic and problem-solving skills'
      ],
      technologies: ['C++', 'Training', 'Curriculum Development', 'Problem Solving'],
      color: 'blue',
      side: 'left',
      hasCertificate: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            if (count < experiences.length) {
              setVisibleItems(count + 1);
              count++;
            } else {
              clearInterval(interval);
            }
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [experiences.length]);

  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions and leading teams across diverse technology landscapes
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 via-purple-500 to-blue-500 opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item ${index < visibleItems ? 'animate-slide-in-' + exp.side : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`md:flex items-center ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block relative z-10">
                    <div className={`w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-gray-800 shadow-lg glow-${exp.color}`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${exp.side === 'right' ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`p-6 rounded-xl bg-gray-900/70 border border-gray-700 hover:border-${exp.color}-500 transition-all duration-300 hover:scale-105 transform group backdrop-blur-sm`}>
                      {/* Certificate Badge */}
                      {exp.hasCertificate && (
                        <div className="absolute -top-2 -right-2">
                          <div className={`w-8 h-8 bg-${exp.color}-500 rounded-full flex items-center justify-center shadow-lg`}>
                            <Award className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-gray-400 mt-1">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors duration-300" />
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-center">
                              <div className={`w-1.5 h-1.5 bg-${exp.color}-500 rounded-full mr-2`}></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 bg-${exp.color}-500/20 text-${exp.color}-400 rounded-full text-xs border border-${exp.color}-500/30`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;