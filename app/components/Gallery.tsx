'use client';

import React, { useState, useEffect, memo, useCallback } from 'react';
import Image from 'next/image';

const Gallery = memo(() => {
  const [selectedDestination, setSelectedDestination] = useState('BALI');
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const destinations = [
    'BALI',
    'VIETNAM', 
    'SINGAPORE',
    'THAILAND',
    'MALAYSIA',
    'DUBAI',
    'MALDIVES',
    'ANDAMANS'
  ];

  // Destination data with images for each destination
  const destinationData = {
    'BALI': {
      main: {
        name: 'Bali',
        image: '/Destination/Bali.jpeg',
        description: 'Island of the Gods'
      },
      related: [
        {
          name: 'Tanah Lot',
          image: '/Destination/bali/Bali1.jpg',
          description: 'Iconic sea temple'
        },
        {
          name: 'Nusa Penida',
          image: '/Destination/bali/Bali2.jpg',
          description: 'Adventure island'
        },
        {
          name: 'Ubud Temple',
          image: '/Destination/bali/Bali3.jpg',
          description: 'Cultural heart of Bali'
        },
        {
          name: 'Rice Terraces',
          image: '/Destination/bali/Bali4.jpg',
          description: 'Tegallalang beauty'
        },
        {
          name: 'Mount Batur',
          image: '/Destination/bali/Bali5.jpg',
          description: 'Volcanic sunrise trek'
        },
        {
          name: 'Beach Paradise',
          image: '/Destination/bali/Bali6.jpg',
          description: 'Crystal clear waters'
        }
      ]
    },
    'VIETNAM': {
      main: {
        name: 'Vietnam',
        image: '/Destination/vietnam/Halong Bay.jpg',
        description: 'Land of the Ascending Dragon'
      },
      related: [
        {
          name: 'Ha Long Bay',
          image: '/Destination/vietnam/Halong Bay.jpg',
          description: 'Limestone islands and caves'
        },
        {
          name: 'Hoi An',
          image: '/Destination/vietnam/Hoi An Lantern.jpg',
          description: 'Ancient trading port'
        },
        {
          name: 'Hanoi',
          image: '/Destination/vietnam/hoan kiem lake.avif',
          description: 'Historic capital'
        },
        {
          name: 'Ho Chi Minh City',
          image: '/Destination/vietnam/notre dame cathedral.jpg',
          description: 'Modern metropolis'
        },
        {
          name: 'Sapa',
          image: '/Destination/vietnam/ninh binh.avif',
          description: 'Mountain trekking'
        },
        {
          name: 'Mekong Delta',
          image: '/Destination/vietnam/mekong delta.avif',
          description: 'Floating markets'
        }
      ]
    },
    'SINGAPORE': {
      main: {
        name: 'Singapore',
        image: '/Destination/singapore/marina bay sands.avif',
        description: 'Lion City'
      },
      related: [
        {
          name: 'Marina Bay',
          image: '/Destination/singapore/marina bay sands.avif',
          description: 'Iconic skyline'
        },
        {
          name: 'Sentosa',
          image: '/Destination/singapore/universal studios.avif',
          description: 'Island resort'
        },
        {
          name: 'Gardens by the Bay',
          image: '/Destination/singapore/supertree.avif',
          description: 'Supertree Grove'
        },
        {
          name: 'Chinatown',
          image: '/Destination/singapore/Chinatown.jpg',
          description: 'Cultural heritage'
        },
        {
          name: 'Little India',
          image: '/Destination/singapore/helix brigde.avif',
          description: 'Vibrant district'
        },
        {
          name: 'Orchard Road',
          image: '/Destination/singapore/singapore flyer.avif',
          description: 'Shopping paradise'
        }
      ]
    },
    'THAILAND': {
      main: {
        name: 'Thailand',
        image: '/Destination/thailand/grand palace.avif',
        description: 'Land of Smiles'
      },
      related: [
        {
          name: 'Bangkok',
          image: '/Destination/thailand/grand palace.avif',
          description: 'Capital city'
        },
        {
          name: 'Phuket',
          image: '/Destination/thailand/railay beach.avif',
          description: 'Pearl of the Andaman'
        },
        {
          name: 'Chiang Mai',
          image: '/Destination/thailand/doi suthep temple.avif',
          description: 'Old city temples'
        },
        {
          name: 'Koh Samui',
          image: '/Destination/thailand/krabi.avif',
          description: 'Tropical island'
        },
        {
          name: 'Ayutthaya',
          image: '/Destination/thailand/wat arun temple.avif',
          description: 'Ancient ruins'
        },
        {
          name: 'Phi Phi Islands',
          image: '/Destination/thailand/phi phi island.avif',
          description: 'Crystal clear waters'
        }
      ]
    },
    'MALAYSIA': {
      main: {
        name: 'Malaysia',
        image: '/Destination/malaysia/Petronas Twin Towers (Kuala Lumpur) – Iconic twin skyscrapers..jpg',
        description: 'Truly Asia'
      },
      related: [
        {
          name: 'Kuala Lumpur',
          image: '/Destination/malaysia/Petronas Twin Towers (Kuala Lumpur) – Iconic twin skyscrapers..jpg',
          description: 'Modern metropolis'
        },
        {
          name: 'Langkawi',
          image: '/Destination/malaysia/Tioman Island – A paradise for divers..jpg',
          description: 'Island paradise'
        },
        {
          name: 'Penang',
          image: '/Destination/malaysia/Ipoh (Perak) – Colonial charm, cave temples, and street art.jpg',
          description: 'Cultural heritage'
        },
        {
          name: 'Cameron Highlands',
          image: '/Destination/malaysia/Cameron Highlands.webp',
          description: 'Tea plantations'
        },
        {
          name: 'Batu Caves',
          image: '/Destination/malaysia/Batu Caves (Selangor).jpg',
          description: 'Hindu temple complex'
        },
        {
          name: 'Malacca',
          image: '/Destination/malaysia/Malacca (Melaka).jpg',
          description: 'UNESCO heritage site'
        }
      ]
    },
    'DUBAI': {
      main: {
        name: 'Dubai',
        image: '/Destination/dubai/Dubai1.jpg',
        description: 'City of Gold'
      },
      related: [
        {
          name: 'Burj Khalifa',
          image: '/Destination/dubai/Dubai2.jpg',
          description: 'World\'s tallest building'
        },
        {
          name: 'Palm Jumeirah',
          image: '/Destination/dubai/Dubai3.jpg',
          description: 'Artificial island'
        },
        {
          name: 'Dubai Mall',
          image: '/Destination/dubai/image.jpg',
          description: 'Shopping paradise'
        },
        {
          name: 'Desert Safari',
          image: '/Destination/dubai/image2.jpg',
          description: 'Dune bashing adventure'
        },
        {
          name: 'Dubai Frame',
          image: '/Destination/dubai/image3.jpg',
          description: 'Golden frame monument'
        },
        {
          name: 'Dubai Marina',
          image: '/Destination/dubai/image4.jpg',
          description: 'Waterfront district'
        }
      ]
    },
    'MALDIVES': {
      main: {
        name: 'Maldives',
        image: '/Destination/maldives/Conrad Maldives Rangali Island.jpg',
        description: 'Tropical paradise'
      },
      related: [
        {
          name: 'Male',
          image: '/Destination/MaldivesHero/Malé Atoll.jpg',
          description: 'Capital island'
        },
        {
          name: 'Overwater Villas',
          image: '/Destination/maldives/Conrad Maldives Rangali Island.jpg',
          description: 'Luxury accommodation'
        },
        {
          name: 'Coral Reefs',
          image: '/Destination/MaldivesHero/Hanifaru Bay.jpg',
          description: 'Snorkeling paradise'
        },
        {
          name: 'Water Sports',
          image: '/Destination/MaldivesHero/Gulhi Falhu.jpg',
          description: 'Adventure activities'
        },
        {
          name: 'Spa Retreats',
          image: '/Destination/maldives/Ari Atoll –.jpg',
          description: 'Wellness and relaxation'
        },
        {
          name: 'Sunset Cruises',
          image: '/Destination/maldives/Meedhoo, Raa Atoll,.jpg',
          description: 'Romantic boat rides'
        }
      ]
    },
    'ANDAMANS': {
      main: {
        name: 'Andamans',
        image: '/Destination/andamans/Havelock Island (Swaraj Dweep).webp',
        description: 'Island archipelago'
      },
      related: [
        {
          name: 'Havelock Island',
          image: '/Destination/andamans/Havelock Island (Swaraj Dweep).webp',
          description: 'Radhanagar Beach'
        },
        {
          name: 'Port Blair',
          image: '/Destination/andamans/Cellular Jail (Port Blair).jpeg',
          description: 'Cellular Jail'
        },
        {
          name: 'Neil Island',
          image: '/Destination/andamans/Neil Island (Shaheed Dweep).jpg',
          description: 'Laxmanpur Beach'
        },
        {
          name: 'Baratang Island',
          image: '/Destination/andamans/Baratang Island.webp',
          description: 'Limestone caves'
        },
        {
          name: 'Ross Island',
          image: '/Destination/andamans/Ross Island (Netaji Subhash Chandra Bose Island).jpg',
          description: 'British colonial ruins'
        },
        {
          name: 'North Bay Island',
          image: '/Destination/andamans/North Bay Island.jpg',
          description: 'Water sports hub'
        }
      ]
    }
  };

  // Get current destination data
  const currentDestination = destinationData[selectedDestination as keyof typeof destinationData];

  // Navigation functions for destination buttons - memoized for performance
  const nextButtons = useCallback(() => {
    if (currentButtonIndex + 4 < destinations.length) {
      setCurrentButtonIndex(prev => prev + 4);
    }
  }, [currentButtonIndex, destinations.length]);

  const prevButtons = useCallback(() => {
    if (currentButtonIndex > 0) {
      setCurrentButtonIndex(prev => prev - 4);
    }
  }, [currentButtonIndex]);

  // Get current 4 buttons to display
  const currentButtons = destinations.slice(currentButtonIndex, currentButtonIndex + 4);

  // Auto-carousel effect for small images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const totalImages = currentDestination.related.length;
        // Move to next pair of images, showing 2 at a time
        const nextIndex = prev + 2;
        if (nextIndex >= totalImages) {
          return 0; // Reset to beginning
        }
        return nextIndex;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [currentDestination.related.length, selectedDestination]);

  // Reset image index when destination changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedDestination]);

  // Get current 2 images to display
  const currentImages = currentDestination.related.slice(currentImageIndex, currentImageIndex + 2);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Section - Large Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-t-[100px] sm:rounded-t-[150px] md:rounded-t-[200px] lg:rounded-t-[250px] overflow-hidden">
                <Image
                  src={currentDestination.main.image}
                  alt={currentDestination.main.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Text overlay at bottom of image */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg font-limelight">
                    {currentDestination.main.name}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium drop-shadow-lg">
                    {currentDestination.main.description}
                  </p>
                </div>
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Section - Title, Navigation, and Smaller Images */}
          <div className="order-1 lg:order-2">
            {/* Main Title */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-cursive font-medium text-orange-600 mb-2 font-limelight">
                Travel Gallery
              </h2>
              <div className="relative">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-limelight">
                  Explorer's Journey
                </h1>
                {/* Ghosted text effect - hidden on very small screens */}
                <h1 className="hidden sm:block absolute top-0 left-0 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 -z-10 font-limelight">
                  Explorer's Journey
                </h1>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-4 mb-4">
                {/* Left Arrow */}
                <button 
                  onClick={prevButtons}
                  disabled={currentButtonIndex === 0}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full  flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Destination Buttons - Show only 4 at a time */}
                <div className="flex gap-2 sm:gap-3 flex-1 justify-center min-w-0">
                  {currentButtons.map((destination) => (
                    <button
                      key={destination}
                      onClick={() => setSelectedDestination(destination)}
                      className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                        selectedDestination === destination
                          ? 'bg-blue-800 text-white shadow-lg'
                          : 'border-2 border-gray-800 text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      {destination}
                    </button>
                  ))}
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={nextButtons}
                  disabled={currentButtonIndex + 4 >= destinations.length}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full  flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center">
                <div className="flex space-x-1 sm:space-x-2">
                  {Array.from({ length: Math.ceil(destinations.length / 4) }, (_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        i === Math.floor(currentButtonIndex / 4) ? 'bg-blue-800 scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Smaller Image Cards - Auto Carousel */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
              {currentImages.map((destination, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-24 sm:h-28 md:h-32 lg:h-40 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                  <div className="mt-2 sm:mt-3 text-center">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 font-limelight">
                      {destination.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {destination.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Small Image Carousel Progress */}
            <div className="flex justify-center">
              <div className="flex space-x-1 sm:space-x-2">
                {Array.from({ length: Math.ceil(currentDestination.related.length / 2) }, (_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      i === Math.floor(currentImageIndex / 2) ? 'bg-orange-500 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Gallery.displayName = 'Gallery';

export default Gallery;
 