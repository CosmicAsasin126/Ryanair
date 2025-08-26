import React from 'react';
import { Plane,  Clock, PlaneLanding, MapPin, Wrench, ShieldBan, Trophy, BadgeCheck } from 'lucide-react';
import B737 from '../Images/B737.png';
import Buzz from '../Images/Buzz.png';

const Fleet = () => {
  const aircraft = [
    {
      model: 'Boeing 737-800',
      quantity: '10-15min',
      capacity: 189,
      range: 'Anywhere in Project Flight',
      age: '50+',
      card: 'Butter Approved',
      features: ['Winglets', 'Hardest Landings', 'Fastest in the Industry'],
      image: B737,
    },
    {
      model: 'Buzz',
      quantity: '10-15 min',
      capacity: 197,
      range: 'Anywhere in Project Flight',
      card: 'Part of the Ryanair Group',
      age: '20+',
      features: ['Ryanair Group', 'Newest in the biz', 'Fly in Class'],
      image: Buzz,
    },
  ];

  const stats = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Reliable Aircrafts',
      subtitle: 'Aircraft in Fleet',
      description: 'One of Project Flight\'s most versatile fleet',
    },
    {
      icon: <PlaneLanding className="h-8 w-8" />,
      title: '99.5%',
      subtitle: 'Fleet Reliability',
      description: 'Industry-leading dispatch reliability',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Best in Class',
      subtitle: 'Fleet Reliability',
      description: 'With over 100+ flightlogs, our fleet is among the youngest in the industry',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Smooth Transitions',
      subtitle: 'Fastest in the Industry',
      description: 'Our aircrafts are designed for quick turnarounds and efficient boarding processes',
    },
 
  ];
  const Safety = [
    {
      icon: <ShieldBan className="h-8 w-8" />,
      title: 'Safety First',
      subtitle: 'Top Priority',
      description: 'We maintain the highest safety standards in the aviation industry',
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: '24/7 Maintenance',
      subtitle: 'Around the Clock',
      description: 'Our aircraft undergo rigorous maintenance checks',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Experienced Pilots',
      subtitle: 'Highly Trained',
      description: 'Our pilots are among the best in the industry with extensive training and experience',
    },
  ]

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Modern Fleet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience fast, reliable and the youngest fleet in the industry with Ryanair Virtual.
             Our aircrafts are equipped with the latest technology and designed for minimum transition wait time and efficiency.
          </p>
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</div>
              <div className="text-lg font-semibold text-blue-600 mb-2">{stat.subtitle}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Aircraft Cards */}
        <div className="space-y-8">
          {aircraft.map((plane, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={plane.image}
                    alt={plane.model}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{plane.model}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {plane.card}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-gray-600 text-sm">Passenger Capacity</div>
                      <div className="text-xl font-bold text-gray-900">{plane.capacity} seats</div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Flight Range</div>
                      <div className="text-xl font-bold text-gray-900">{plane.range}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Flights</div>
                      <div className="text-xl font-bold text-gray-900">{plane.age}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Transition Speed</div>
                      <div className="text-xl font-bold text-gray-900">{plane.quantity}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-600 text-sm mb-2">Key Features</div>
                    <div className="flex flex-wrap gap-2">
                      {plane.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Section */}
        <div className="mt-16 bg-blue-600 text-white p-8 rounded-xl">
          <div className="text-center mb-8">
            {/* ShieldBan icon as image above the title */}
            <div className="flex justify-center mb-4">
              <BadgeCheck className="h-20 w-20 text-white" />
            </div>
            <span className="block text-2xl font-bold mb-2">
              Safety is Our Top Priority
            </span>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our aircraft undergo rigorous maintenance checks and are operated by highly trained pilots. 
              We maintain the highest safety standards in the aviation industry with regular inspections, 
              advanced technology, and comprehensive crew training programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Safety.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <div className="text-xl font-bold mb-2">{item.title}</div>
                <div className="text-yellow-300 mb-2">{item.subtitle}</div>
                <div className="text-white">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;