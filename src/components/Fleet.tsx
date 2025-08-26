import React from 'react';
import { Plane, Users, Fuel, Calendar } from 'lucide-react';

const Fleet = () => {
  const aircraft = [
    {
      model: 'Boeing 737-800',
      quantity: 450,
      capacity: 189,
      range: '5,765 km',
      age: '8.2 years',
      features: ['WiFi Available', 'Extra Legroom Options', 'Fuel Efficient'],
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      model: 'Boeing 737 MAX 8',
      quantity: 75,
      capacity: 197,
      range: '6,570 km',
      age: '2.1 years',
      features: ['Latest Technology', 'Enhanced Comfort', '20% More Fuel Efficient'],
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      model: 'Airbus A320',
      quantity: 25,
      capacity: 180,
      range: '6,150 km',
      age: '12.5 years',
      features: ['Reliable Performance', 'Proven Safety Record', 'Cost Effective'],
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const stats = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: '550+',
      subtitle: 'Aircraft in Fleet',
      description: 'One of Europe\'s largest airline fleets',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '6.2 Years',
      subtitle: 'Average Fleet Age',
      description: 'Modern, well-maintained aircraft',
    },
    {
      icon: <Fuel className="h-8 w-8" />,
      title: '25%',
      subtitle: 'Lower CO2 Emissions',
      description: 'Compared to industry average',
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: '99.5%',
      subtitle: 'Fleet Reliability',
      description: 'Industry-leading dispatch reliability',
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Modern Fleet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience comfort and reliability with our state-of-the-art aircraft. 
            Our modern fleet ensures safety, efficiency, and an exceptional flying experience.
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
                      {plane.quantity} Aircraft
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
                      <div className="text-gray-600 text-sm">Average Age</div>
                      <div className="text-xl font-bold text-gray-900">{plane.age}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Fleet Size</div>
                      <div className="text-xl font-bold text-gray-900">{plane.quantity} units</div>
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
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safety is Our Top Priority
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our aircraft undergo rigorous maintenance checks and are operated by highly trained pilots. 
              We maintain the highest safety standards in the aviation industry with regular inspections, 
              advanced technology, and comprehensive crew training programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-yellow-300">Maintenance Operations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-yellow-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-yellow-300">Compromise on Safety</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;