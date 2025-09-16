'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const travelBanners = [
  {
    id: 1,
    title: 'Family Vacation',
    background: '/TravelVibes/Family.jpeg',
    buttonText: 'Book Trip →',
    position: 'top-left'
  },
  {
    id: 2,
    title: 'Honey Moon',
    background: '/TravelVibes/honeyMoon.jpeg',
    buttonText: 'Book Trip →',
    position: 'top-right'
  },
  {
    id: 3,
    title: 'BEACH HOLIDAY',
    background: '/TravelVibes/BeachHoliday.jpeg',
    buttonText: 'Book Trip →',
    position: 'bottom-left'
  },
  {
    id: 4,
    title: 'Hill Station',
    background: '/TravelVibes/HillStation.jpeg',
    buttonText: 'Book Trip →',
    position: 'bottom-middle'
  },
  {
    id: 5,
    title: 'ADVENTURE',
    background: '/TravelVibes/Adventure.jpeg',
    buttonText: 'Book Trip →',
    position: 'bottom-right'
  }
];

const TypewriterHeading = ({ words, speed = 100 }: { words: string[]; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      // Deleting characters
      if (currentCharIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timer);
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      // Typing characters
      if (currentCharIndex < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Wait before starting to delete
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentCharIndex, currentWordIndex, isDeleting, words, speed]);

  return (
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-limelight">
      ✨ Choose Your {displayText} ✨
      <span className="animate-pulse">|</span>
    </h2>
  );
};

const TravelVibes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-limelight">
            Travel Vibes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover curated getaways crafted to match your travel vibe
          </p>
        </div>

        {/* Travel Banners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Top Row - 2 Banners */}
          <div className="lg:col-span-2">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={travelBanners[0].background}
                alt="Camping Night Sky"
                fill
                className="object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-white">
                  <h3 className="text-2xl font-light italic mb-4 font-limelight">
                    Adventure Awaits
                  </h3>
                </div>
                <div>
                                  <a 
                  href="https://wa.me/918595682910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                    {travelBanners[0].buttonText}
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={travelBanners[1].background}
                alt="Hiking Adventure"
                fill
                className="object-cover"
              />
              {/* Light overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-right">
                  <h3 className="text-2xl font-light italic text-white mb-4 font-limelight">
                    Cultural Immersion
                  </h3>
                </div>
                <div className="text-right">
                                  <a 
                  href="https://wa.me/918595682910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                    {travelBanners[1].buttonText}
                </a>
                </div>
              </div>
              </div>
            </div>

          {/* Bottom Row - 3 Banners */}
          <div className="lg:col-span-2">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                src={travelBanners[2].background}
                alt="Tropical Beach"
                      fill
                className="object-cover"
                    />
                    
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-light italic text-white mb-4 font-limelight">
                    Nature's Beauty
                  </h3>
                    </div>
                    
                <div>
                                  <a 
                  href="https://wa.me/918595682910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                    {travelBanners[2].buttonText}
                </a>
                          </div>
                          </div>
                      </div>
                    </div>
                    
          <div className="lg:col-span-1">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={travelBanners[3].background}
                alt="Mountain View"
                fill
                className="object-cover"
              />
              {/* Light overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-light italic text-white mb-4 font-limelight">
                    Urban Exploration
                  </h3>
                  </div>
                  
                <div className="text-center">
                  <a 
                    href="https://wa.me/918595682910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    {travelBanners[3].buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={travelBanners[4].background}
                alt="Boat Relaxation"
                fill
                className="object-cover"
              />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-light italic text-white mb-4 font-limelight">
                    Relaxation & Wellness
                  </h3>
            </div>

                <div className="text-center">
                  <a 
                    href="https://wa.me/918595682910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    {travelBanners[4].buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelVibes; 