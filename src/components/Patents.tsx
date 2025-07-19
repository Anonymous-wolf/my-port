import React from 'react';
import { Brain, Zap, Lightbulb, Award, FileText } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      title: 'Solar Powered Automated Multitasking Agri System',
      subtitle: 'Smart Agricultural Innovation',
      description: 'AI-powered solar agricultural monitoring system with IoT sensors for optimal crop management and energy efficiency.',
      details: 'Revolutionary farming solution combining renewable energy with precision agriculture, featuring automated irrigation, soil monitoring, and crop health analysis.',
      technologies: ['IoT Sensors', 'Solar Panels', 'AI/ML', 'Cloud Computing', 'Mobile App'],
      status: 'Patent Published',
      applicationNumber: 'IN-2024-0123456',
      features: [
        'Autonomous solar-powered operation',
        'Real-time crop health monitoring',
        'Weather prediction integration',
        'Automated irrigation control',
        'Mobile dashboard for farmers'
      ],
      impact: {
        efficiency: '+40%',
        waterSaving: '60%',
        energyReduction: '80%'
      },
      icon: <Brain className="w-8 h-8" />,
      hasProductImage: true,
      hasPatentProof: true
    },
    {
      title: 'AI-based Generative Design of Hydropower Plants',
      subtitle: 'Renewable Energy Optimization',
      description: 'Cut material usage in hydropower structures by 25% using AI generative design, minimizing environmental disruption.',
      details: 'Advanced AI system that optimizes hydropower plant design parameters considering water flow patterns, environmental impact, and energy generation efficiency.',
      technologies: ['Machine Learning', 'Generative Design', 'Optimization', 'Python', 'Environmental Analysis'],
      status: 'Patent Published',
      applicationNumber: 'IN-2024-0789012',
      features: [
        'AI-powered design generation',
        'Material usage optimization',
        'Environmental impact assessment',
        'Structural integrity analysis',
        'Cost-effective solutions'
      ],
      impact: {
        materialReduction: '25%',
        costSaving: '30%',
        environmentalScore: '95%'
      },
      icon: <Zap className="w-8 h-8" />,
      hasProductImage: true,
      hasPatentProof: true,
      isColabProject: true
    }
  ];

  return (
    <section id="patents" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-teal-900/10 to-blue-900/10"></div>
        {/* Holographic Grid Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="w-8 h-8 text-teal-400 mr-3" />
            <Award className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Innovation Patents
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pioneering AI and IoT solutions for sustainable technology and environmental impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {patents.map((patent, index) => (
            <div
              key={index}
              className="patent-card group"
            >
              <div className="relative p-8 rounded-2xl bg-gray-900/70 border border-gray-700 hover:border-teal-500 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-teal-500/20">
                {/* Holographic Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Patent Status Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-xs font-semibold text-white shadow-lg">
                    {patent.status}
                  </div>
                </div>

                {/* Media Badges */}
                <div className="absolute -top-3 -left-3 flex space-x-2">
                  {patent.hasProductImage && (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {patent.hasPatentProof && (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {patent.isColabProject && (
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-orange-500 rounded-full text-xs font-bold text-white">
                      Google Colab Project
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-teal-400">
                          {patent.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                          {patent.title}
                        </h3>
                        <p className="text-purple-400 font-semibold">
                          {patent.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Application Number */}
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                    <span className="text-xs text-gray-400">Application Number:</span>
                    <p className="text-sm font-mono text-teal-400">{patent.applicationNumber}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{patent.description}</p>
                  <p className="text-gray-400 text-sm mb-6">{patent.details}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Core Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {patent.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Innovations:</h4>
                    <ul className="space-y-2">
                      {patent.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(patent.impact).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-teal-500 transition-colors duration-300">
                        <div className="text-lg font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 bg-clip-border animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Patent Process Timeline */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Innovation Process</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {['Research', 'Prototype', 'Testing', 'Patent Filing', 'Published'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-400 font-bold bg-gray-800 ${index <= 4 ? 'bg-teal-500 text-white' : ''}`}>
                  {index + 1}
                </div>
                <span className="ml-3 text-gray-400">{step}</span>
                {index < 4 && (
                  <div className="hidden md:block w-8 h-px bg-gray-600 ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patents;