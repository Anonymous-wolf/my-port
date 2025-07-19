import React from 'react';
import { Shield, Cloud, Code, Database, Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      category: 'Cloud Computing',
      icon: <Cloud className="w-6 h-6" />,
      color: 'blue',
      level: 'Fundamental',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Pricing'],
      credentialId: 'AZ-900-2024-001',
      year: '2024'
    },
    {
      title: 'Cisco CCNA',
      issuer: 'Cisco Systems',
      category: 'Networking',
      icon: <Shield className="w-6 h-6" />,
      color: 'indigo',
      level: 'Associate',
      skills: ['Network Fundamentals', 'Routing', 'Switching', 'Security'],
      credentialId: 'CCNA-2024-002',
      year: '2024'
    },
    {
      title: 'HackerRank Problem Solving',
      issuer: 'HackerRank',
      category: 'Programming',
      icon: <Code className="w-6 h-6" />,
      color: 'green',
      level: 'Expert',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving', 'Optimization'],
      credentialId: 'HR-PS-2023-001',
      year: '2023'
    },
    {
      title: 'NPTEL Programming',
      issuer: 'IIT/NPTEL',
      category: 'Academic',
      icon: <Database className="w-6 h-6" />,
      color: 'purple',
      level: 'Advanced',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'Statistics'],
      credentialId: 'NPTEL-2023-002',
      year: '2023'
    },
    {
      title: 'OPSWAT Security',
      issuer: 'OPSWAT',
      category: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      color: 'red',
      level: 'Professional',
      skills: ['Threat Detection', 'Malware Analysis', 'Security Protocols', 'Risk Assessment'],
      credentialId: 'OPSWAT-2024-001',
      year: '2024'
    },
    {
      title: 'Celonis Process Mining',
      issuer: 'Celonis',
      category: 'Process Analytics',
      icon: <Award className="w-6 h-6" />,
      color: 'teal',
      level: 'Certified',
      skills: ['Process Mining', 'Data Analysis', 'Business Intelligence', 'Workflow Optimization'],
      credentialId: 'CEL-PM-2024-001',
      year: '2024'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'fundamental': return 'blue';
      case 'associate': return 'green';
      case 'professional': return 'purple';
      case 'expert': return 'red';
      case 'advanced': return 'indigo';
      case 'certified': return 'teal';
      default: return 'gray';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-teal-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-blue-400 mr-3 animate-spin hover:animate-bounce" />
            <CheckCircle className="w-8 h-8 text-green-400 animate-pulse hover:animate-ping" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-pulse hover:animate-bounce">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuously expanding expertise through industry-recognized certifications and specialized training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card group relative p-6 rounded-xl bg-gray-900/70 border border-gray-700 hover:border-${cert.color}-500 transition-all duration-500 hover:scale-110 transform backdrop-blur-sm hover:shadow-2xl hover:shadow-${cert.color}-500/30 hover:animate-pulse`}
            >
              {/* Certificate Badge */}
              <div className="absolute -top-3 -right-3">
                <div className={`w-8 h-8 bg-${cert.color}-500 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:animate-spin`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Verification Badge */}
              <div className="absolute -top-2 -left-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse hover:animate-ping">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start mb-4">
                  <div className={`p-3 bg-${cert.color}-500/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-${cert.color}-400`}>
                      {cert.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`px-2 py-1 bg-${getLevelColor(cert.level)}-500/20 text-${getLevelColor(cert.level)}-400 rounded text-xs font-semibold`}>
                        {cert.level}
                      </span>
                      <span className="text-xs text-gray-500">{cert.year}</span>
                    </div>
                    <h3 className={`text-lg font-bold text-white group-hover:text-${cert.color}-400 transition-colors duration-300`}>
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Issuer */}
                <div className="mb-4">
                  <p className={`text-${cert.color}-400 font-semibold text-sm`}>{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.category}</p>
                </div>

                {/* Credential ID */}
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                  <span className="text-xs text-gray-400">Credential ID:</span>
                  <p className="text-xs font-mono text-gray-300">{cert.credentialId}</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 bg-${cert.color}-500/10 text-${cert.color}-400 rounded text-xs border border-${cert.color}-500/20`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Link */}
                <button className={`w-full mt-4 px-4 py-2 bg-${cert.color}-500/20 hover:bg-${cert.color}-500/30 border border-${cert.color}-500/30 hover:border-${cert.color}-500/50 rounded-lg transition-all duration-300 text-${cert.color}-400 text-sm font-semibold`}>
                  Verify Certificate
                </button>
              </div>

              {/* Animated Glow */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${cert.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Certifications', value: '6+', color: 'blue' },
              { label: 'Tech Domains', value: '4', color: 'purple' },
              { label: 'Industry Leaders', value: '5', color: 'teal' },
              { label: 'Continuous Learning', value: '2024', color: 'green' }
            ].map((stat, index) => (
              <div key={index} className={`p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-${stat.color}-500 transition-colors duration-300`}>
                <div className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-300 mb-8">Continuous Learning Journey</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            {['Foundation', 'Specialization', 'Expertise', 'Innovation'].map((stage, index) => (
              <div key={stage} className="flex items-center">
                <div className={`w-12 h-12 rounded-full border-2 ${index <= 2 ? 'border-teal-500 bg-teal-500' : 'border-gray-600 bg-gray-800'} flex items-center justify-center text-white font-bold`}>
                  {index + 1}
                </div>
                <span className="ml-3 text-gray-400">{stage}</span>
                {index < 3 && (
                  <div className="hidden md:block w-8 h-px bg-gray-600 ml-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;