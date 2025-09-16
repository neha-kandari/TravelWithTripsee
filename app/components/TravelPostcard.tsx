'use client';

import React, { useState, useEffect, memo, useCallback } from 'react';

const testimonials = [
  {
    name: '',
    destination: 'Bali',
    video: '/Feedback/WhatsApp Video 2024-02-21 at 16.23.19_fd0537da.mp4',
    fallbackVideo: '/Feedback/WhatsApp Video 2024-02-21 at 16.23.19_fd0537da.mp4'
  },
  {
    name: '',
    destination: 'Thailand',
    video: '/Feedback/WhatsApp Video 2024-12-23 at 6.27.27 PM.mp4',
    fallbackVideo: '/Feedback/WhatsApp Video 2024-12-23 at 6.27.27 PM.mp4'
  },
  {
    name: '',
    destination: 'Bali',
    video: '/Feedback/WhatsApp Video 2024-01-11 at 17.30.52.mp4',
    fallbackVideo: '/Feedback/WhatsApp Video 2024-01-11 at 17.30.52.mp4'
  },
  {
    name: '',
    destination: 'Vietnam',
    video: '/Feedback/WhatsApp Video 2025-07-21 at 4.08.19 PM.mp4',
    fallbackVideo: '/Feedback/WhatsApp Video 2025-07-21 at 4.08.19 PM.mp4'
  }
];

const TravelPostcard = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>({});
  const [videoErrors, setVideoErrors] = useState<{ [key: number]: boolean }>({});
  const [videoLoading, setVideoLoading] = useState<{ [key: number]: boolean }>({});

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const toggleMute = useCallback((index: number) => {
    setMutedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);

  const handleVideoError = (index: number) => {
    console.error(`Video failed to load for index ${index}`);
    setVideoErrors(prev => ({
      ...prev,
      [index]: true
    }));
    setVideoLoading(prev => ({
      ...prev,
      [index]: false
    }));
  };

  const handleVideoLoad = (index: number) => {
    setVideoLoading(prev => ({
      ...prev,
      [index]: false
    }));
  };

  const handleVideoLoadStart = (index: number) => {
    setVideoLoading(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <div className="relative">
      <div className="h-50"></div> {/* Spacer div */}
      <section className="py-8 md:py-12 lg:py-16 bg-yellow-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <span className="text-pink-500 text-2xl">❤️</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-600 font-limelight">
                  Travel Postcard
                </h2>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                A message from the heart ❤️
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-lg md:text-xl font-semibold text-pink-600">
                  Dream honeymoons crafted perfectly
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  Let your journeys inspire the world ✨
                </p>
              </div>
            </div>

            {/* Right Side - Video Testimonials */}
            <div className="relative w-full">
              {/* Mobile: Scrollable horizontal layout */}
              <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-4 w-full justify-start lg:hidden scrollbar-hide">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-40 sm:w-48 h-72 sm:h-85 bg-white rounded-xl shadow-lg border-2 relative transition-transform duration-300 ${
                      index === currentIndex 
                        ? 'border-red-500 scale-105 z-10 order-first' 
                        : (index === (currentIndex + 1) % testimonials.length || index === (currentIndex + 2) % testimonials.length) 
                          ? 'border-gray-300 scale-95 opacity-70' 
                          : 'hidden'
                    }`}
                  >
                    {/* Video */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      {videoErrors[index] ? (
                        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-red-200 flex items-center justify-center">
                          <div className="text-center text-gray-600">
                            <div className="text-4xl mb-2">📹</div>
                            <div className="text-sm">Video unavailable</div>
                          </div>
                        </div>
                      ) : (
                        <>
                          {videoLoading[index] && (
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
                            </div>
                          )}
                          <video
                            src={testimonial.video}
                            className="w-full h-full object-cover"
                            muted={mutedStates[index] !== false}
                            loop
                            playsInline
                            autoPlay
                            onError={() => handleVideoError(index)}
                            onLoadStart={() => handleVideoLoadStart(index)}
                            onLoadedData={() => handleVideoLoad(index)}
                            preload="metadata"
                          />
                        </>
                      )}
                      
                      {/* Overlay with gradient */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600/80 to-transparent p-3 md:p-4">
                        {/* Reaction Icons */}
                        <div className="flex space-x-1 md:space-x-2 mb-2">
                          <span className="text-pink-400 text-sm md:text-lg">❤️</span>
                          <span className="text-orange-400 text-sm md:text-lg">👍</span>
                          <span className="text-orange-400 text-sm md:text-lg">👍</span>
                          <span className="text-orange-400 text-sm md:text-lg">👍</span>
                          <span className="text-yellow-400 text-sm md:text-lg">😍</span>
                        </div>
                        
                        {/* Customer Info */}
                        <div className="text-white">
                          <p className="font-semibold text-base md:text-lg">{testimonial.name}</p>
                          <div className="flex items-center space-x-1">
                            <span className="text-white">📍</span>
                            <span className="text-sm md:text-base">{testimonial.destination}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tripsee Logo */}
                      <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/80 rounded-full p-1.5 md:p-2">
                        <span className="text-red-500 font-bold text-xs md:text-sm">Tripsee</span>
                      </div>
                      
                      {/* Speaker Icon */}
                      <button 
                        onClick={() => toggleMute(index)}
                        className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 rounded-full p-1.5 md:p-2 hover:bg-white transition-colors cursor-pointer"
                      >
                        <span className="text-gray-600 text-sm md:text-base">
                          {mutedStates[index] !== false ? '🔇' : '🔊'}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Carousel layout with 3 videos visible */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="flex space-x-8 justify-center items-center transition-all duration-500 ease-in-out">
                    {testimonials.map((testimonial, index) => {
                      // Show only 3 videos at a time based on currentIndex
                      const isVisible = index === currentIndex || 
                                      index === (currentIndex + 1) % testimonials.length || 
                                      index === (currentIndex + 2) % testimonials.length;
                      
                      if (!isVisible) return null;
                      
                      return (
                        <div
                          key={index}
                          className={`flex-shrink-0 bg-white rounded-xl shadow-lg border-2 relative transition-all duration-500 ease-in-out ${
                            index === currentIndex 
                              ? 'border-red-500 scale-105 z-10 shadow-2xl' 
                              : 'border-gray-300 scale-95 opacity-80 shadow-lg'
                          }`}
                          style={{ width: '280px', height: '500px' }}
                        >
                          {/* Video */}
                          <div className="relative w-full h-full rounded-xl overflow-hidden">
                            {videoErrors[index] ? (
                              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-red-200 flex items-center justify-center">
                                <div className="text-center text-gray-600">
                                  <div className="text-4xl mb-2">📹</div>
                                  <div className="text-sm">Video unavailable</div>
                                </div>
                              </div>
                            ) : (
                              <>
                                {videoLoading[index] && (
                                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
                                  </div>
                                )}
                                <video
                                  src={testimonial.video}
                                  className="w-full h-full object-cover"
                                  muted={mutedStates[index] !== false}
                                  loop
                                  playsInline
                                  autoPlay
                                  onError={() => handleVideoError(index)}
                                  onLoadStart={() => handleVideoLoadStart(index)}
                                  onLoadedData={() => handleVideoLoad(index)}
                                  preload="none"
                                  poster="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />
                              </>
                            )}
                            
                            {/* Overlay with gradient */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600/80 to-transparent p-4">
                              {/* Reaction Icons */}
                              <div className="flex space-x-2 mb-2">
                                <span className="text-pink-400 text-lg">❤️</span>
                                <span className="text-orange-400 text-lg">👍</span>
                                <span className="text-orange-400 text-lg">👍</span>
                                <span className="text-orange-400 text-lg">👍</span>
                                <span className="text-yellow-400 text-lg">😍</span>
                              </div>
                              
                              {/* Customer Info */}
                              <div className="text-white">
                                <p className="font-semibold text-lg">{testimonial.name}</p>
                                <div className="flex items-center space-x-1">
                                  <span className="text-white">📍</span>
                                  <span className="text-base">{testimonial.destination}</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Tripsee Logo */}
                            <div className="absolute top-4 left-4 bg-white/80 rounded-full p-2">
                              <span className="text-red-500 font-bold text-sm">Tripsee</span>
                            </div>
                            
                            {/* Speaker Icon */}
                            <button 
                              onClick={() => toggleMute(index)}
                              className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors cursor-pointer"
                            >
                              <span className="text-gray-600 text-base">
                                {mutedStates[index] !== false ? '🔇' : '🔊'}
                              </span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Desktop Carousel Navigation */}
                  <div className="flex justify-center items-center space-x-4 mt-6">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-lg font-bold"
                    >
                      ←
                    </button>
                    
                    {/* Pagination Dots */}
                    <div className="flex space-x-2">
                      {Array.from({ length: testimonials.length }, (_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            i === currentIndex ? 'bg-red-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-lg font-bold"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Controls */}
              <div className="lg:hidden flex justify-center items-center space-x-3 md:space-x-4 mt-4 md:mt-6">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  ←
                </button>
                
                {/* Pagination Dots */}
                <div className="flex space-x-1.5 md:space-x-2">
                  {Array.from({ length: testimonials.length }, (_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                        i === currentIndex ? 'bg-red-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

TravelPostcard.displayName = 'TravelPostcard';

export default TravelPostcard; 