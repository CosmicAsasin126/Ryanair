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
import Canariesi from '../Aerodrome/Canaries.png';


const Destinations = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (val: boolean) => void }) => {
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
      image: Canariesi,
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
    <div className={darkMode ? "min-h-screen py-12 bg-gray-900 text-white" : "min-h-screen py-12 bg-gray-50"}>
      {/* Dark Mode Toggle Button (synced with homepage) */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg font-bold shadow-lg transition-colors duration-200 ${
            darkMode
              ? "bg-yellow-500 text-blue-900 hover:bg-yellow-600"
              : "bg-blue-700 text-white hover:bg-blue-800"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={darkMode ? "text-4xl md:text-5xl font-bold text-white mb-4" : "text-4xl md:text-5xl font-bold text-gray-900 mb-4"}>
            Popular Destinations
          </h1>
          <p className={darkMode ? "text-xl text-gray-300 max-w-2xl mx-auto" : "text-xl text-gray-600 max-w-2xl mx-auto"}>
            Discover amazing Project Flight destinations with our affordable 
            flights and exceptional service.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={darkMode
                ? "bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                : "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                {hoveredIndex === index && destination.video ? (
                  <video
                    src={destination.video}
                    className="absolute z-0 w-full h-48 object-cover"
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
                  {/* ... */}
                </div>
              </div>
              
              <div className="p-6">
                <div className={darkMode ? "flex items-center gap-2 text-gray-300 mb-2" : "flex items-center gap-2 text-gray-600 mb-2"}>
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.country}</span>
                </div>
                
                <h3 className={darkMode ? "text-xl font-bold text-white mb-3" : "text-xl font-bold text-gray-900 mb-3"}>{destination.city}</h3>
                
                {destination.showHouse && destination.house && (
                  <div className={darkMode ? "flex items-center gap-2 text-gray-300 mb-4" : "flex items-center gap-2 text-gray-600 mb-4"}>
                    <PlaneTakeoff className="h-4 w-4" />
                    <span className="text-sm">{destination.house}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;