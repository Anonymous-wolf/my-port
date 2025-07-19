import React, { useState } from 'react';
import { ExternalLink, Github, Play, Star, Image, Video, FileText } from 'lucide-react';

const Projects = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
    {
      title: 'TRAFFIX - COP FRIENDLY APP-ESEVA',
      subtitle: 'Police Connect Application',
      description: 'Built a police connect app reducing violation registrations and response time by 60% using real-time alerting and streamlined grievance handling.',
      detailedDescription: 'Comprehensive police connect application featuring real-time violation reporting, streamlined grievance handling, and efficient response management system.',
      technologies: [
        'React.js', 'React Router DOM', 'Tailwind CSS', 'Axios', 'React Hook Form', 
        'React Toastify', 'Heroicons', 'Web Geolocation API', 'Node.js', 'Express.js', 
        'Mongoose', 'MongoDB', 'JWT', 'bcryptjs', 'CORS', 'Multer'
      ],
      image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg',
      github: 'https://github.com/Anonymous-wolf/',
      demo: '#',
      features: [
        'Real-time violation reporting',
        'Streamlined grievance handling',
        '60% reduction in response time',
        'Geolocation-based services'
      ],
      metrics: {
        efficiency: '60%',
        violations: '1000+',
        response: '2min'
      },
      hasImage: true,
      hasVideo: true,
      hasCode: true
    },
    {
      title: 'Campus Network Design',
      subtitle: 'Secure Network Infrastructure',
      description: 'Designed a secure, scalable campus network using VLANs, RIPv2, ACLs, and Kali Linux, improving segmentation and threat isolation by 40%.',
      detailedDescription: 'Comprehensive campus network infrastructure featuring advanced security protocols, scalable architecture, and efficient threat isolation mechanisms.',
      technologies: ['VLANs', 'RIPv2', 'ACLs', 'Kali Linux', 'Network Security', 'Cisco', 'Network Topology'],
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
      github: '#',
      demo: '#',
      features: [
        'Secure network segmentation',
        'Advanced threat isolation',
        '40% improvement in security',
        'Scalable infrastructure design'
      ],
      metrics: {
        security: '40%',
        uptime: '99.9%',
        users: '5000+'
      },
      hasImage: true,
      hasVideo: false,
      hasCode: false,
      hasCertificate: true
    },
    {
      title: 'Smart AI Resume Analyzer',
      subtitle: 'ML-Powered Recruitment Tool',
      description: 'Advanced resume screening system using NLP and machine learning for automated candidate evaluation and matching.',
      detailedDescription: 'Intelligent recruitment platform that analyzes resumes, extracts key information, matches candidates to roles, and provides detailed scoring based on job requirements.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'React', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg',
      github: 'https://github.com/Anonymous-wolf/',
      demo: '#',
      features: [
        'Automated resume parsing',
        'AI-powered candidate matching',
        'Detailed scoring system',
        'Real-time analysis'
      ],
      metrics: {
        accuracy: '94%',
        time_saved: '80%',
        resumes: '1000+'
      },
      hasImage: true,
      hasVideo: true,
      hasCode: true
    },
    {
      title: 'Hydraulic Transient Analysis',
      subtitle: 'Hydropower Safety System',
      description: 'Simulated surge effects in pumped hydro systems to enhance safety and cut pressure-induced failures by 60%. Smart India Hackathon 2024 Finalist.',
      detailedDescription: 'Advanced simulation system for hydropower plants focusing on surge analysis, safety enhancement, and failure prevention in pumped storage systems.',
      technologies: ['Simulation', 'Hydraulic Analysis', 'Python', 'Data Analytics', 'Safety Systems'],
      image: 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg',
      github: '#',
      demo: '#',
      features: [
        'Surge effect simulation',
        'Safety enhancement protocols',
        '60% reduction in failures',
        'Real-time monitoring'
      ],
      metrics: {
        safety: '60%',
        efficiency: '85%',
        systems: '12'
      },
      hasImage: true,
      hasVideo: false,
      hasCode: false,
      isHackathonProject: true
    },
    {
      title: 'AI-based Generative Design',
      subtitle: 'Hydropower Plant Optimization',
      description: 'Cut material usage in hydropower structures by 25% using AI generative design, minimizing environmental disruption.',
      detailedDescription: 'Revolutionary AI system that generates optimized hydropower plant designs, reducing material consumption while maintaining structural integrity and performance.',
      technologies: ['AI/ML', 'Generative Design', 'Python', 'Optimization Algorithms', 'Environmental Analysis'],
      image: 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg',
      github: '#',
      demo: '#',
      features: [
        'AI-powered design generation',
        '25% material reduction',
        'Environmental impact minimization',
        'Structural optimization'
      ],
      metrics: {
        material_saved: '25%',
        efficiency: '90%',
        environmental_score: '95%'
      },
      hasImage: true,
      hasVideo: false,
      hasCode: false,
      isPatent: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-pulse">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative solutions that showcase cutting-edge technology and real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="project-card relative h-96 perspective-1000 hover:animate-pulse"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className={`card-inner ${flippedCard === index ? 'flipped' : ''} transition-all duration-700 hover:scale-105`}>
                {/* Front Side */}
                <div className="card-front absolute inset-0 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 group hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/20">
                  <div className="relative h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent group-hover:from-gray-900/90"></div>
                    </div>
                    
                    {/* Media Badges */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.hasImage && (
                        <div className="w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center">
                          <Image className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {project.hasVideo && (
                        <div className="w-8 h-8 bg-red-500/80 rounded-full flex items-center justify-center">
                          <Video className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {project.hasCode && (
                        <div className="w-8 h-8 bg-green-500/80 rounded-full flex items-center justify-center">
                          <Github className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {project.hasCertificate && (
                        <div className="w-8 h-8 bg-yellow-500/80 rounded-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Special Badges */}
                    {project.isHackathonProject && (
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-orange-500 rounded-full text-xs font-bold text-white">
                          SIH 2024 Finalist
                        </div>
                      </div>
                    )}
                    {project.isPatent && (
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-purple-500 rounded-full text-xs font-bold text-white">
                          Patent Published
                        </div>
                      </div>
                    )}
                    
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-sm text-gray-300">Featured Project</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-teal-400 text-sm font-semibold mb-3">
                        {project.subtitle}
                      </p>
                      
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs border border-teal-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 group/btn"
                        >
                          <Github className="w-4 h-4 text-gray-400 group-hover/btn:text-white" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors duration-300 group/btn"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-back absolute inset-0 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-teal-500 p-6">
                  <div className="h-full flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    
                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                      {project.detailedDescription}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-xs text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-teal-400">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-sm"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors duration-300 text-sm"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;