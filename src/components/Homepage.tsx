import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, MapPin, Users, Shield, Clock } from 'lucide-react';
import HomepageImage from '../Images/Homepage.png';
import Logo from '../Images/Logo.svg';

const Homepage = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Every Destination',
      description: 'Connect all Project FLight destinations with affordable flights, from major cities to hidden gems.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '100+ Pilots',
      description: 'Join our community of over 100 pilots flying for Ryanair, sharing experiences and adventures.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety First',
      description: 'Committed to the highest safety standards with modern aircraft and expert crew.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'On-Time Performance',
      description: 'We prioritize punctuality, ensuring you reach your destination on time, every time.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative text-white py-24 bg-center bg-cover"
        style={{ backgroundImage: `url(${HomepageImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
            <img src= {Logo} alt="Allegiant Logo" className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Project Flight's Leading Low-Cost Airline
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover amazing destinations across Project Flight and beyond with our affordable flights, 
              exceptional service, and modern fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ryanair?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional value and service to make your journey memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 overflow-hidden bg-blue-700">
        {/* CTA Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Logo at the top */}
          <div className="flex justify-center mb-6">
            <img
              src= {Logo}
              alt="Ryanair Logo"
              className="h-20 w-20 "
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore the World?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of travelers who trust Ryanair for their Project Flight adventures. 
            Book your next flight today or fly as a pilot with us!
          </p>
          <Link
            to='https:discord.gg/UfnNwBPt43'
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Our Server
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;