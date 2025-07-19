import React from 'react';
import { Heart, Palette, Users, Smile, HandHeart, Star, Image } from 'lucide-react';

const Volunteering = () => {
  const activities = [
    {
      title: 'Elders Care Community',
      organization: 'Local Community Center',
      type: 'Community Service',
      description: 'Dedicated volunteer work providing support and care for elderly community members through technology education and companionship.',
      details: 'Regular volunteer service helping with daily activities, educational support, and community development initiatives. Focus on empowering elderly individuals through technology education and life skills.',
      duration: '2022 - Present',
      frequency: 'Weekly',
      impact: {
        people: '100+',
        hours: '200+',
        programs: '8'
      },
      activities: [
        'Technology education for seniors',
        'Basic computer literacy programs',
        'Community event organization',
        'Mentorship and companionship',
        'Digital inclusion initiatives'
      ],
      icon: <Heart className="w-8 h-8" />,
      color: 'red',
      emoji: '❤️',
      hasImages: true
    },
    {
      title: 'Cisco Chennai\'s Community Impact',
      organization: 'Cisco Systems',
      type: 'Corporate Social Responsibility',
      description: 'Participated in Cisco Chennai\'s community impact initiatives, bringing positive change to underserved neighborhoods.',
      details: 'Collaborative community impact project aimed at supporting local communities while building team spirit and giving back to society. Combined technology skills with social impact.',
      duration: '2024',
      frequency: 'Multiple Events',
      impact: {
        events: '5',
        volunteers: '50+',
        communities: '3'
      },
      activities: [
        'Community development programs',
        'Technology awareness sessions',
        'Engaging with local residents',
        'Team building activities',
        'Social impact initiatives'
      ],
      icon: <Palette className="w-8 h-8" />,
      color: 'purple',
      emoji: '🤝',
      hasImages: true
    }
  ];

  const values = [
    {
      title: 'Empathy',
      description: 'Understanding and sharing the feelings of others',
      icon: <Heart className="w-6 h-6" />,
      color: 'red'
    },
    {
      title: 'Impact',
      description: 'Creating meaningful change in communities',
      icon: <Star className="w-6 h-6" />,
      color: 'yellow'
    },
    {
      title: 'Collaboration',
      description: 'Working together for common goals',
      icon: <Users className="w-6 h-6" />,
      color: 'blue'
    },
    {
      title: 'Joy',
      description: 'Spreading happiness through service',
      icon: <Smile className="w-6 h-6" />,
      color: 'green'
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-purple-900/10 to-pink-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HandHeart className="w-10 h-10 text-red-400 mr-3 animate-pulse hover:animate-bounce" />
            <Heart className="w-8 h-8 text-purple-400 animate-ping hover:animate-spin" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse hover:animate-bounce">
            Community Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Giving back to the community through meaningful volunteer work and social initiatives
          </p>
        </div>

        {/* Volunteering Activities */}
        <div className="space-y-12 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`volunteer-card group relative p-8 rounded-2xl bg-gray-900/70 border border-gray-700 hover:border-${activity.color}-500 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-${activity.color}-500/30 hover:animate-pulse`}
            >
              {/* Activity Badge */}
              <div className="absolute -top-4 -right-4">
                <div className={`w-12 h-12 bg-${activity.color}-500 rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce`}>
                  {activity.emoji}
                </div>
              </div>

              {/* Media Badge */}
              {activity.hasImages && (
                <div className="absolute -top-3 -left-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Image className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Content */}
                <div>
                  <div className="flex items-start mb-6">
                    <div className={`p-3 bg-${activity.color}-500/20 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-${activity.color}-400`}>
                        {activity.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-white group-hover:text-${activity.color}-400 transition-colors duration-300 mb-2`}>
                        {activity.title}
                      </h3>
                      <p className={`text-${activity.color}-400 font-semibold mb-1`}>
                        {activity.organization}
                      </p>
                      <p className="text-gray-500 text-sm">{activity.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{activity.description}</p>
                  <p className="text-gray-400 text-sm mb-6">{activity.details}</p>

                  {/* Duration and Frequency */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className={`px-4 py-2 bg-${activity.color}-500/20 rounded-full border border-${activity.color}-500/30`}>
                      <span className="text-xs text-gray-400">Duration: </span>
                      <span className={`text-sm font-semibold text-${activity.color}-400`}>{activity.duration}</span>
                    </div>
                    <div className={`px-4 py-2 bg-${activity.color}-500/20 rounded-full border border-${activity.color}-500/30`}>
                      <span className="text-xs text-gray-400">Frequency: </span>
                      <span className={`text-sm font-semibold text-${activity.color}-400`}>{activity.frequency}</span>
                    </div>
                  </div>

                  {/* Activities List */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {activity.activities.map((act, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <div className={`w-2 h-2 bg-${activity.color}-500 rounded-full mr-3`}></div>
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-300">Community Impact:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(activity.impact).map(([key, value]) => (
                      <div key={key} className={`p-6 bg-${activity.color}-500/10 rounded-xl border border-${activity.color}-500/20 hover:border-${activity.color}-500/40 transition-colors duration-300 text-center`}>
                        <div className={`text-3xl font-bold text-${activity.color}-400 mb-2`}>{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className={`p-6 bg-gray-800/50 rounded-xl border border-${activity.color}-500/20`}>
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 bg-${activity.color}-500 rounded-full flex items-center justify-center mr-3`}>
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-300">Community Feedback</span>
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      "Vaishnavi's dedication and enthusiasm have made a tremendous impact on our community. Her technical skills and compassionate approach have helped bridge the digital divide."
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${activity.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Volunteer Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className={`p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-${value.color}-500 transition-all duration-300 hover:scale-105 transform group`}>
                <div className={`text-${value.color}-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className={`font-semibold text-${value.color}-400 mb-2`}>{value.title}</h4>
                <p className="text-xs text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Join the Impact</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Passionate about making a difference? Let's collaborate on meaningful community projects and create positive change together.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 glow-button">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;