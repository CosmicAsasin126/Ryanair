import React, { useState } from 'react';
import { MapPin, Star, Clock, PlaneTakeoff } from 'lucide-react';
// Video Imports
import Southampton from '../Videos/Southampton.mp4';
import Kittila from '../Videos/Kittila.mp4';
import Canaries from '../Videos/Canaries.mp4'
import Menorca from '../Videos/Menorca.mp4';
import PuntaCana from '../Videos/Punta Cana.mp4';
import Cibao from '../Videos/Cibao.mp4';
import Larnaca from '../Videos/Larnaka.mp4';
import Paphos from '../Videos/Pafos.mp4';
//Aerodrome
import Gatwick from '../Aerodrome/Gatwick.png';
import Southamptonia from '../Aerodrome/Southampton.png';
import Kittilia from '../Aerodrome/Kittila.png';
import Menorcia from '../Aerodrome/Menorca.png';
import PuntaCania from '../Aerodrome/Punta.png';
import Cibaoa from '../Aerodrome/Cibao.png'; 
import Larnacaa from '../Aerodrome/Larnaka.png';
import Paphosa from '../Aerodrome/Pafos.png';


const Destinations = () => {
  const destinations = [
    {
      city: 'Gatwick',
      country: 'United Kingdom',
      house: 'Our Hub',
      showHouse: false,
      image: Gatwick, 
      video : undefined,
      popular: true,
    },
    {
      city: 'Southampton',
      country: 'United Kingdom',
      image: Southamptonia,
      video : Southampton,
      popular: true,
      showHouse: false,
    },
    {
      city: 'Kittilä',
      country: 'Finland',
      image: Kittilia,
      video : Kittila,
      popular: true,
      showHouse: true,
    },
    {
      city: 'Gran Canaria',
      country: 'Spain',
      image: undefined,
      video : Canaries,
      popular: false,
      showHouse: false,
    },
    {
      city: 'Menorca',
      country: 'Spain',
      image: Menorcia,
      video : Menorca,
      popular: false,
      showHouse: false,
    },
    {
      city: 'Punta Cana',
      country: 'Dominican Republic',
      image: PuntaCania,
      video : PuntaCana,
      popular: true,
      showHouse: false,
    },
    {
      city: 'Cibao',
      country: 'Dominican Republic',
      image: Cibaoa,
      video : Cibao,
      popular: false,
      showHouse: false,
    },
    {
      city: 'Larnaca',
      country: 'Cyprus',
      image: Larnacaa,
      video: Larnaca,
      popular: true,
      showHouse: false,
    },
    {
      city: 'Paphos',
      country: 'Cyprus',
      image: Paphosa,
      video: Paphos,
      popular: false,
      showHouse: false,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing Project Flight destinations with our affordable 
            flights and exceptional service.
          </p>
        </div>

      
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                {hoveredIndex === index && destination.video ? (
                  <video
                    src={destination.video}
                    className="abosulute index-0 w-full h-48 object-cover "
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-48 object-cover"
                  />
                )}
                {destination.popular && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-blue-900 px-3 py-1 rounded-md font-bold">
                  
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.country}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{destination.city}</h3>
                
                {destination.showHouse && destination.house && (
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <PlaneTakeoff className="h-4 w-4" />
                    <span className="text-sm">{destination.house}</span>
                  </div>
                )}
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Can't Find Your Destination?
            </h2>
            <p className="text-lg mb-6">
              We fly to over 200 destinations across Europe and beyond. 
              Use our route map to discover all available flights.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              View Route Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;