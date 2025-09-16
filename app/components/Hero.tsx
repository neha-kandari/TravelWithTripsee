'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = memo(() => {
  const destinations = [
    { name: 'Bali', icon: '/icons/Bali.png', href: '/destination/bali' },
    { name: 'Vietnam', icon: '/icons/Veitnam.png', href: '/destination/vietnam' },
    { name: 'Singapore', icon: '/icons/Singapore.png', href: '/destination/singapore' },
    { name: 'Thailand', icon: '/icons/Thailand.png', href: '/destination/thailand' },
    { name: 'Malaysia', icon: '/icons/malaysia.png', href: '/destination/malaysia' },
    { name: 'Dubai', icon: '/icons/Dubai.png', href: '/destination/dubai' },
    { name: 'Maldives', icon: '/icons/Maldives.png', href: '/destination/maldives' },
    { name: 'Andamans', icon: '/icons/Andaman.png', href: '/destination/andaman' }
  ];

  return (
    <section className="relative min-h-screen mt-0 pt-0">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/tripsee.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Main Content Area with Animated Heading */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white">
            {/* Animated Heading */}
            {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="block animate-slide-in-left">Welcome to</span>
              <span className="block animate-slide-in-right bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Tripsee
              </span>
            </h1> */}
            
            {/* Animated Subtext */}
            {/* <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up-delay max-w-2xl mx-auto leading-relaxed">
              Discover amazing destinations and create unforgettable memories with our curated travel experiences
            </p> */}
            
            {/* Animated Call to Action */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
                Explore Destinations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
                View Packages
              </button>
            </div> */}
          </div>
        </div>

        {/* Destination Icons at Bottom */}
        <div className="relative z-20 pb-4 md:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile: Grid layout for better mobile experience */}
            <div className="grid grid-cols-4 gap-4 md:hidden">
              {destinations.map((destination) => (
                <Link key={destination.name} href={destination.href} aria-label={destination.name} className="group cursor-pointer transform hover:scale-110 transition-all duration-300 flex flex-col items-center">
                  <div className="relative">
                    <Image
                      src={destination.icon}
                      alt={destination.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 filter drop-shadow-lg"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    {/* Gradient overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-white text-xs font-medium leading-tight">
                      {destination.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Tablet and Desktop: Horizontal layout with responsive spacing */}
            <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12 xl:space-x-16">
              {destinations.map((destination) => (
                <Link key={destination.name} href={destination.href} aria-label={destination.name} className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={destination.icon}
                      alt={destination.name}
                      width={48}
                      height={48}
                      className="w-14 h-14 lg:w-16 lg:h-16 filter drop-shadow-lg"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    {/* Gradient overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-white text-sm lg:text-base font-medium">
                      {destination.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero; 