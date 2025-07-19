import React, { useEffect, useState } from 'react';
import { Code, Database, Server, Shield, Cloud, Github as Git } from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(0);

  const skills = [
    { name: 'React', icon: '⚛️', category: 'Frontend', level: 90 },
    { name: 'Spring Boot', icon: '🍃', category: 'Backend', level: 85 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', level: 80 },
    { name: 'Docker', icon: '🐳', category: 'DevOps', level: 75 },
    { name: 'Java', icon: '☕', category: 'Language', level: 90 },
    { name: 'AWS', icon: '☁️', category: 'Cloud', level: 80 },
    { name: 'Python', icon: '🐍', category: 'Language', level: 85 },
    { name: 'SQL', icon: '🗃️', category: 'Database', level: 85 },
    { name: 'C++', icon: '⚡', category: 'Language', level: 80 },
    { name: 'Git', icon: '📦', category: 'Tools', level: 90 },
  ];

  const skillCategories = [
    { name: 'Frontend', icon: <Code className="w-6 h-6" />, color: 'teal' },
    { name: 'Backend', icon: <Server className="w-6 h-6" />, color: 'purple' },
    { name: 'Database', icon: <Database className="w-6 h-6" />, color: 'blue' },
    { name: 'Security', icon: <Shield className="w-6 h-6" />, color: 'green' },
    { name: 'Cloud', icon: <Cloud className="w-6 h-6" />, color: 'indigo' },
    { name: 'Tools', icon: <Git className="w-6 h-6" />, color: 'pink' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            if (count < skills.length) {
              setVisibleSkills(count + 1);
              count++;
            } else {
              clearInterval(interval);
            }
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [skills.length]);

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern digital experiences
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-${category.color}-500 transition-all duration-300 hover:scale-105 transform group`}
            >
              <div className={`text-${category.color}-400 mb-2 group-hover:scale-110 transform transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-300">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card ${index < visibleSkills ? 'animate-skill-appear' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:scale-105 transform group text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transform transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{skill.category}</p>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: index < visibleSkills ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                <span className="text-xs text-teal-400 font-semibold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-300 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Kubernetes', 'Jenkins', 'GraphQL', 'Next.js', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/70 rounded-full text-sm text-gray-300 border border-gray-600 hover:border-teal-500 hover:text-teal-400 transition-all duration-300 hover:scale-105 transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;