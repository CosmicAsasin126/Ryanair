import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Michael O\'Sullivan',
      position: 'Chief Executive Officer',
      experience: '15 years in aviation',
      bio: 'Leading SkyWings with a vision for sustainable growth and exceptional customer service. Former VP at British Airways.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['Forbes 40 Under 40', 'Aviation Leader Award 2022'],
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Operating Officer',
      experience: '18 years in operations',
      bio: 'Ensuring operational excellence across our entire network. Expert in airline operations and fleet management.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['Operations Excellence Award', 'Women in Aviation Pioneer'],
    },
    {
      name: 'David Rodriguez',
      position: 'Chief Financial Officer',
      experience: '12 years in finance',
      bio: 'Driving financial strategy and sustainable growth. Previously CFO at major European transport companies.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['Finance Leader of the Year', 'CPA Excellence Award'],
    },
    {
      name: 'Emma Thompson',
      position: 'Chief Marketing Officer',
      experience: '10 years in marketing',
      bio: 'Building our brand across Europe and creating memorable customer experiences. Digital marketing innovator.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievements: ['Marketing Innovation Award', 'Brand Builder 2023'],
    },
  ];

  const departments = [
    {
      title: 'Flight Operations',
      count: '2,400+',
      description: 'Pilots, cabin crew, and operations specialists ensuring safe flights',
      icon: '✈️',
    },
    {
      title: 'Ground Operations',
      count: '1,800+',
      description: 'Ground handling, maintenance, and airport operations teams',
      icon: '🔧',
    },
    {
      title: 'Customer Service',
      count: '900+',
      description: 'Dedicated support agents helping passengers worldwide',
      icon: '🎧',
    },
    {
      title: 'Corporate',
      count: '600+',
      description: 'Finance, HR, IT, and administrative professionals',
      icon: '💼',
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every successful flight is a dedicated team of professionals committed to 
            excellence, safety, and customer satisfaction. Get to know the leaders driving SkyWings forward.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of aviation expertise to guide SkyWings' continued success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-blue-600 font-semibold">{leader.position}</p>
                        <p className="text-sm text-gray-500">{leader.experience}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                          <Linkedin className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                          <Mail className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                    
                    <div className="space-y-2">
                      {leader.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team by Numbers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our People
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With over 5,700 dedicated professionals across Europe, we're proud of our diverse, 
              talented team that makes SkyWings possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-3">{dept.count}</div>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-blue-600 text-white p-8 md:p-12 rounded-xl mb-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              At SkyWings, we believe our people are our greatest asset. We foster an inclusive, 
              innovative culture where every team member can grow, contribute, and thrive. 
              Ready to take your career to new heights?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">40+</div>
                <div className="text-yellow-300">Nationalities</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">45%</div>
                <div className="text-yellow-300">Female Leadership</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.2★</div>
                <div className="text-yellow-300">Employee Rating</div>
              </div>
            </div>
            
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              View Open Positions
            </button>
          </div>
        </div>

        {/* Values in Action */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              Committed to reducing our environmental impact through modern aircraft, 
              efficient operations, and sustainable practices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              Supporting local communities through partnerships, charitable initiatives, 
              and economic development across our network.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Development</h3>
            <p className="text-gray-600">
              Investing in our people through continuous learning, training programs, 
              and career advancement opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;