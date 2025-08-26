import React from 'react';
import { Calendar, Globe, Users, Award, PlaneLanding } from 'lucide-react';
import StarBorder from '../StarBoarder/StarBorder.tsx';
import Logo from '../Images/Logo.svg';

const About = () => {
  const milestones = [
    {
      year: 'April 2025',
      title: 'Company Founded',
      description: 'Started with the founder and a big dream',
    },
    {
      year: 'May 2025',
      title: 'Expansion onto Project Flight',
      description: 'Launched operations on Project Flight with our first flight to Gatwick.',
    },
    {
      year: 'June 2025',
      title: '100 Pilots',
      description: 'Reached our first major member milestone.',
    },
    {
      year: 'July 2025',
      title: 'Improvement of Services',
      description: 'Introduced new routes and enhanced pilot service.',
    },
    {
      year: 'August 2025',
      title: 'ATC Expansion',
      description: 'Expanded our ATC services to cover more regions.',
    },
    {
      year: 'August 2025',
      title: 'Leading Low-Cost Airline',
      description: 'Became Project Flight\'s leading low-cost airline with over 100+ members and a growing fleet.',
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Experience First',
      description: 'We put our employees and potential passengers first, valuing their feedback and continuously improving our services.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Leading the skies with top-notch service, punctuality, and a modern fleet.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Our intuitive planning and short departure times set us apart in the industry.',
    },
    {
      icon: <PlaneLanding className="h-8 w-8" />,
      title: 'Reliability',
      description: 'We are committed to getting you to your destination on time, every time.',
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Ryanair
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since our founding on April 2025, Ryanair Virtual has grown to become Project Flight's most notorious airline with over 
            100+ members and a fleet destined for the skies. 
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-600 text-white p-8 md:p-12 rounded-xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              To democratize air travel across Project Flight by providing safe, reliable, and affordable flights 
              that connect people to the opportunities, experiences, and relationships that matter most to them. Our mission is to always provide affordable travel for passengers across and 
              our pilots, a journey of a lifetime.
              We believe that everyone should have the freedom to explore the world.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="text-blue-600 flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to Europe's most popular airline - discover our key milestones.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2 px-4">
                  <StarBorder
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="5s"
                  >
                    <div className= "shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white-900">{milestone.title}</h3>
                      </div>
                      <p className="text-white-600">{milestone.description}</p>
                    </div>
                  </StarBorder>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-yellow-50 p-8 md:p-12 rounded-xl">
          <div className="text-center mb-8">
            <img src={Logo} alt="Ryanair Logo" className="h-20 w-20 mx-auto mb-4" />
            <span className="block text-3xl md:text-4xl font-bold mb-2">
              Ryanair at its Numbers
            </span>
            <p className="text-lg text-gray-600">
              Our achievements speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150M+</div>
              <div className="text-lg font-semibold text-gray-900">Annual Passengers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-lg font-semibold text-gray-900">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">550+</div>
              <div className="text-lg font-semibold text-gray-900">Aircraft Fleet</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">90%+</div>
              <div className="text-lg font-semibold text-gray-900">On-Time Performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;