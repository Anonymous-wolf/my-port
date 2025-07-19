import React from 'react';
import { Users, Crown, Target, Lightbulb, Award, TrendingUp } from 'lucide-react';

const Leadership = () => {
  const roles = [
    {
      title: 'IEEE SMC Vice Chair',
      organization: 'IEEE Systems, Man, and Cybernetics Society',
      period: '2024 - Present',
      description: 'Leading technical initiatives and member engagement for one of IEEE\'s largest societies, focusing on systems engineering and cybernetics.',
      responsibilities: [
        'Coordinate technical events and workshops',
        'Manage member relations and engagement',
        'Lead strategic planning initiatives',
        'Mentor emerging professionals'
      ],
      achievements: [
        'Increased membership by 30%',
        'Organized 5+ technical seminars',
        'Led cross-functional teams of 15+ members'
      ],
      icon: <Crown className="w-8 h-8" />,
      color: 'purple',
      badgeIcon: '👑'
    },
    {
      title: 'IIT Bombay E-Cell Ambassador',
      organization: 'Entrepreneurship Cell, IIT Bombay',
      period: '2023 - 2024',
      description: 'Representing IIT Bombay\'s entrepreneurship ecosystem, promoting innovation and startup culture among students and professionals.',
      responsibilities: [
        'Promote entrepreneurship programs',
        'Connect startups with mentors',
        'Organize startup competitions',
        'Build innovation communities'
      ],
      achievements: [
        'Connected 50+ startups with mentors',
        'Organized 3 major startup events',
        'Built network of 200+ entrepreneurs'
      ],
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'teal',
      badgeIcon: '🚀'
    },
    {
      title: 'Business Crafter Lead',
      organization: 'Professional Development Initiative',
      period: '2023 - Present',
      description: 'Developing business strategy frameworks and leading teams in creating innovative solutions for real-world business challenges.',
      responsibilities: [
        'Design business strategy workshops',
        'Lead project teams',
        'Mentor business development',
        'Create strategic frameworks'
      ],
      achievements: [
        'Delivered 10+ business solutions',
        'Trained 100+ professionals',
        'Achieved 95% client satisfaction'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'blue',
      badgeIcon: '📈'
    }
  ];

  const leadershipStats = [
    { label: 'Teams Led', value: '8+', icon: <Users className="w-6 h-6" /> },
    { label: 'Members Mentored', value: '50+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Events Organized', value: '15+', icon: <Award className="w-6 h-6" /> },
    { label: 'Impact Reach', value: '500+', icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-teal-900/10 to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-10 h-10 text-purple-400 mr-3" />
            <Users className="w-8 h-8 text-teal-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Leadership & Influence
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Driving innovation and empowering teams through strategic leadership and mentorship
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="space-y-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`leadership-card group relative`}
            >
              <div className={`p-8 rounded-2xl bg-gray-800/70 border border-gray-700 hover:border-${role.color}-500 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-${role.color}-500/20`}>
                {/* Badge */}
                <div className="absolute -top-4 -right-4">
                  <div className={`w-12 h-12 bg-${role.color}-500 rounded-full flex items-center justify-center text-2xl shadow-lg animate-pulse`}>
                    {role.badgeIcon}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start mb-6">
                      <div className={`p-3 bg-${role.color}-500/20 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`text-${role.color}-400`}>
                          {role.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold text-white group-hover:text-${role.color}-400 transition-colors duration-300 mb-2`}>
                          {role.title}
                        </h3>
                        <p className={`text-${role.color}-400 font-semibold mb-1`}>
                          {role.organization}
                        </p>
                        <p className="text-gray-500 text-sm">{role.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{role.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Responsibilities:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {role.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-center">
                            <div className={`w-2 h-2 bg-${role.color}-500 rounded-full mr-3`}></div>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">Impact & Achievements:</h4>
                    {role.achievements.map((achievement, i) => (
                      <div key={i} className={`p-4 bg-${role.color}-500/10 rounded-lg border border-${role.color}-500/20 hover:border-${role.color}-500/40 transition-colors duration-300`}>
                        <div className="flex items-center">
                          <Award className={`w-5 h-5 text-${role.color}-400 mr-3`} />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${role.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Leadership Philosophy</h3>
            <p className="text-lg text-gray-300 mb-6">
              "Leadership is not about being in charge. It's about taking care of those in your charge and empowering them to achieve their full potential."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Empowerment', description: 'Enabling others to excel', icon: '💪' },
                { title: 'Innovation', description: 'Driving creative solutions', icon: '💡' },
                { title: 'Collaboration', description: 'Building strong teams', icon: '🤝' }
              ].map((principle, index) => (
                <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-teal-500 transition-colors duration-300">
                  <div className="text-3xl mb-2">{principle.icon}</div>
                  <h4 className="font-semibold text-teal-400 mb-1">{principle.title}</h4>
                  <p className="text-sm text-gray-400">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {leadershipStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300 group">
              <div className="text-purple-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;