import React from 'react';
import { Linkedin, Mail, Award, Plane, Wrench, Headset, Briefcase, Globe, Handshake, GraduationCap} from 'lucide-react';
import Hud from '../Team/Hud.webp';
import Amaan from '../Team/Amaan.webp';
import Batele from '../Team/Jack.webp';
import Jake from '../Team/CraftyJake.webp';
import Vertzy from '../Team/Vertzy.webp';
import Travis from '../Team/Mr.Travis.webp';
import Kylar from '../Team/Kylar.webp';
import Discord from '../Team/discord.svg';

const Team = () => {
  const leadership = [
    {
      name: 'Hud4328',
      position: 'Founder',
      experience: 'Made and developed Ryanair Virtual',
      bio: 'Leading the vision and strategy of Ryanair Virtual. Passionate about aviation and delivering exceptional service.',
      image: Hud,
      achievements: ['Made the Server', 'Always Available'],
      discord: 'https://discord.com/users/1185355704744296600', // Add Discord profile link
    },
    {
      name: 'Vertzy',
      position: 'Chief Executive Officer',
      experience: 'Handles day-to-day operations',
      bio: 'Driving operational excellence and growth. Previously Staff member at major VA/s',
      image: Vertzy,
      achievements: ['Photography', 'Leading Development'],
      discord: 'https://discord.com/users/836538316001247252',
    },
    {
      name: 'Amaan',
      position: 'Board of Directors',
      experience: 'Makes all major decisions',
      bio: 'My goal and dream and aspiration is to become a pilot!',
      image: Amaan,
      achievements: ['Board of Directors', 'Future Pilot'],
      discord: 'https://discord.com/users/1361749375239585925',
    },
    {
      name: 'Travis',
      position: 'Chief Development Officer',
      experience: 'Well versed in coding bots',
      bio: 'Always trust in Allah.',
      image: Travis,
      achievements: ['Bot Developer', 'Ryanair Virtual Staff'],
      discord: 'https://discord.com/users/766048055983865926',
    },
    {
      name: 'Gamer1320',
      position: 'Director of Operations',
      experience: 'Newest member of the team',
      bio: 'Excited to contribute to Ryanair\'s growth and success.',
      image: Kylar,
      achievements: ['ARCV CEO', 'Ryanair Virtual Staff'],
      discord: 'https://discord.com/users/1134935202091765800',
    },
    {
      name: 'Jakey Boi',
      position: 'Chief ATC Manager',
      experience: 'ATC Manager of Ryanair Virtual',
      bio: 'Keeping our skies safe with top-notch ATC services. Passionate about aviation and community building.',
      image: Jake,
      achievements: ['Operations Excellence Award', 'Top ATC Manager'],
      discord: 'https://discord.com/users/921087306469867581',
    },
    {
      name: 'Batele Jack',
      position: 'Server Moderator',
      experience: 'Newest Moderator of the team',
      bio: 'Ensuring our community remains welcoming and safe for all members.',
      image: Batele,
      achievements: ['Moderator', 'Community Champion'],
      discord: 'https://discord.com/users/984192677232934959',
    }
  ];

  const departments = [
    {
      title: 'Flight Operations',
      count: '2,400+',
      description: 'Pilots, cabin crew, and operations specialists ensuring safe flights',
      icon: <Plane className="h-8 w-8 mx-auto" />,
    },
    {
      title: 'Ground Operations',
      count: '1,800+',
      description: 'Ground handling, maintenance, and airport operations teams',
      icon: <Wrench className="h-8 w-8 mx-auto" />,
    },
    {
      title: 'Customer Service',
      count: '900+',
      description: 'Dedicated support agents helping passengers worldwide',
      icon: <Headset className="h-8 w-8 mx-auto" />,
    },
    {
      title: 'Corporate',
      count: '600+',
      description: 'Finance, HR, IT, and administrative professionals',
      icon: <Briefcase className="h-8 w-8 mx-auto" />,
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
            excellence, safety, and customer satisfaction. Get to know the leaders driving Ryanair forward.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of aviation expertise to guide Ryanair's continued success.
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
                        <a
                          href={leader.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                        >
                          <img src={Discord} alt="Discord" className="h-5 w-5" />
                        </a>
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
              With every destination in Project Flight, we're proud of our diverse, 
              talented team that makes Ryanair possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-4">{dept.icon}</div>
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
              At Ryanair, we believe our people are our greatest asset. We foster an inclusive, 
              innovative culture where every team member can grow, contribute, and thrive. 
              Ready to take your career to new heights?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">Wide</div>
                <div className="text-yellow-300">Team Diversity</div>
              </div>
              <div>
                <div className="text-3xl font-bo>Satisfactiond mb-2">100%</div>
                <div className="text-yellow-300">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.2★</div>
                <div className="text-yellow-300">Employee Rating</div>
              </div>
            </div>
            <button>
              <a
                href="https://discord.gg/UfnNwBPt43"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Join Our Team
              </a>
            </button>
          </div>
        </div>
        {/* Values in Action */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="mb-4 flex justify-center">
              <Globe className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              Committed to reducing our environmental impact through modern aircraft, 
              efficient operations, and sustainable practices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="mb-4 flex justify-center">
              <Handshake className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              Supporting local communities through partnerships, charitable initiatives, 
              and economic development across our network.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="mb-4 flex justify-center">
              <GraduationCap className="h-10 w-10 text-blue-600" />
            </div>
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