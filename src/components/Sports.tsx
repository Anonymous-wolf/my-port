import React from 'react';
import { Trophy, Target, Users, Award, Medal, Star } from 'lucide-react';

const Sports = () => {
  const sportsAchievements = [
    {
      title: 'Ball Badminton Team Winner',
      level: 'Anna University Competition',
      achievement: '2nd Prize',
      description: 'Secured second place as a team in the prestigious Anna University ball badminton tournament, demonstrating exceptional teamwork and strategy.',
      year: '2024',
      category: 'Team Sport',
      skills: ['Teamwork', 'Strategic Thinking', 'Hand-eye Coordination', 'Mental Resilience'],
      icon: <Medal className="w-8 h-8" />,
      color: 'silver',
      emoji: '🏸'
    }
  ];

  const otherActivities = [
    {
      title: 'Freelance Pitch Deck Designer',
      type: 'Creative Services',
      description: 'Creating compelling pitch decks and presentations for startups and businesses, combining design excellence with strategic storytelling.',
      services: [
        'Startup pitch deck design',
        'Business presentation creation',
        'Visual storytelling',
        'Brand identity integration',
        'Investor-ready materials'
      ],
      achievements: [
        '25+ successful pitch decks',
        '90% client satisfaction rate',
        'Helped raise $2M+ in funding'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'blue',
      emoji: '📊'
    },
    {
      title: 'Inter-College Fest Winner',
      type: 'Cultural Competition',
      description: 'Multiple wins in inter-college cultural festivals, showcasing versatility in both technical and creative domains.',
      categories: [
        'Technical presentations',
        'Innovation showcases',
        'Project demonstrations',
        'Creative competitions',
        'Leadership challenges'
      ],
      achievements: [
        '5+ first place wins',
        'Best innovation award',
        'Outstanding presentation recognition'
      ],
      icon: <Star className="w-8 h-8" />,
      color: 'purple',
      emoji: '🎯'
    }
  ];

  const personalQualities = [
    {
      title: 'Team Spirit',
      description: 'Excellent collaboration and team dynamics',
      icon: <Users className="w-6 h-6" />,
      color: 'blue'
    },
    {
      title: 'Competitive Excellence',
      description: 'Thrives under pressure and embraces challenges',
      icon: <Trophy className="w-6 h-6" />,
      color: 'yellow'
    },
    {
      title: 'Strategic Thinking',
      description: 'Analytical approach to problem-solving',
      icon: <Target className="w-6 h-6" />,
      color: 'green'
    },
    {
      title: 'Creative Excellence',
      description: 'Innovation in both technical and artistic domains',
      icon: <Award className="w-6 h-6" />,
      color: 'purple'
    }
  ];

  return (
    <section id="sports" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10 text-yellow-400 mr-3 animate-bounce hover:animate-spin" />
            <Medal className="w-8 h-8 text-blue-400 animate-pulse hover:animate-ping" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse hover:animate-bounce">
            Beyond Technology
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Excellence in sports, creative endeavors, and diverse competitions showcasing well-rounded capabilities
          </p>
        </div>

        {/* Sports Achievement */}
        <div className="mb-16">
          {sportsAchievements.map((sport, index) => (
            <div key={index} className={`sport-card group relative p-8 rounded-2xl bg-gray-800/70 border border-gray-700 hover:border-${sport.color === 'silver' ? 'gray' : sport.color}-500 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-${sport.color === 'silver' ? 'gray' : sport.color}-500/20`}>
              <div className={`sport-card group relative p-8 rounded-2xl bg-gray-800/70 border border-gray-700 hover:border-${sport.color === 'silver' ? 'gray' : sport.color}-500 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-${sport.color === 'silver' ? 'gray' : sport.color}-500/30 hover:animate-pulse`}>
                {/* Medal Badge */}
                <div className="absolute -top-4 -right-4">
                  <div className={`w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-3xl shadow-2xl animate-pulse hover:animate-bounce`}>
                    {sport.emoji}
                  </div>
                </div>

                {/* Winner Ribbon */}
                <div className="absolute -top-2 -left-2">
                  <div className="w-8 h-16 bg-gradient-to-b from-gray-400 to-gray-600 transform -rotate-12 rounded-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900 transform rotate-90">2nd</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start mb-6">
                      <div className={`p-4 bg-gray-500/20 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`text-gray-400`}>
                          {sport.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold text-white group-hover:text-gray-400 transition-colors duration-300 mb-2`}>
                          {sport.title}
                        </h3>
                        <p className={`text-gray-400 font-semibold mb-1`}>
                          {sport.level}
                        </p>
                        <p className="text-gray-500 text-sm">{sport.category} • {sport.year}</p>
                      </div>
                    </div>

                    <div className={`inline-block px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full mb-6`}>
                      <span className="text-white font-bold text-lg">{sport.achievement}</span>
                    </div>

                    <p className="text-gray-300 mb-6">{sport.description}</p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {sport.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm border border-gray-500/30`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className={`relative p-8 bg-gradient-to-br from-gray-500/10 to-transparent rounded-2xl border border-gray-500/20`}>
                      <div className="text-center">
                        <div className={`text-6xl mb-4`}>🥈</div>
                        <div className={`text-4xl font-bold text-gray-400 mb-2`}>2nd</div>
                        <div className="text-lg text-gray-300 font-semibold">Place</div>
                        <div className="text-sm text-gray-400 mt-2">Team Winner</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {otherActivities.map((activity, index) => (
            <div key={index} className={`activity-card group p-8 rounded-2xl bg-gray-800/70 border border-gray-700 hover:border-${activity.color}-500 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-${activity.color}-500/20`}>
              {/* Activity Badge */}
              <div className="absolute -top-3 -right-3">
                <div className={`w-10 h-10 bg-${activity.color}-500 rounded-full flex items-center justify-center text-xl shadow-lg`}>
                  {activity.emoji}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className={`p-3 bg-${activity.color}-500/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-${activity.color}-400`}>
                      {activity.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-white group-hover:text-${activity.color}-400 transition-colors duration-300 mb-1`}>
                      {activity.title}
                    </h3>
                    <p className={`text-${activity.color}-400 text-sm font-semibold`}>
                      {activity.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{activity.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    {activity.services ? 'Services Offered:' : 'Competition Categories:'}
                  </h4>
                  <ul className="space-y-2">
                    {(activity.services || activity.categories)?.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center">
                        <div className={`w-1.5 h-1.5 bg-${activity.color}-500 rounded-full mr-3`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {activity.achievements.map((achievement, i) => (
                      <div key={i} className={`p-3 bg-${activity.color}-500/10 rounded-lg border border-${activity.color}-500/20`}>
                        <div className="flex items-center">
                          <Award className={`w-4 h-4 text-${activity.color}-400 mr-2`} />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${activity.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Personal Qualities */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Personal Qualities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {personalQualities.map((quality, index) => (
              <div key={index} className={`p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-${quality.color}-500 transition-all duration-300 hover:scale-105 transform group`}>
                <div className={`text-${quality.color}-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {quality.icon}
                </div>
                <h4 className={`font-semibold text-${quality.color}-400 mb-2 text-sm`}>{quality.title}</h4>
                <p className="text-xs text-gray-400">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Balance Message */}
        <div className="text-center p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Well-Rounded Excellence</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Success in technology is enhanced by diverse experiences. Sports, creative projects, and competitions have shaped my approach to problem-solving, teamwork, and innovation. This balanced foundation drives excellence in every endeavor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sports;