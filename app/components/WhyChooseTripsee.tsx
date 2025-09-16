'use client';

import React, { useState, useEffect, useRef } from 'react';



const WhyChooseTripsee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-16 bg-white">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-limelight">
            Why Choose Tripsee?
          </h2>
          <p className="text-xl text-orange-500 max-w-3xl mx-auto font-merienda">
            The best booking platform you can trust
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Local Offices */}
          <div className="bg-orange-50/20 backdrop-blur-lg border border-orange-200/40 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 font-limelight">
              Personalized Service
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Dedicated offices in Vietnam & Bali for personalized service and local expertise.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
              Learn More →
            </a>
          </div>

          {/* Card 2 - Experience */}
          <div className="bg-orange-50/20 backdrop-blur-lg border border-orange-200/40 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 font-limelight">
              Expert Guidance
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Trusted travel expertise since 2008 with proven track record of excellence.
            </p>
            <a href="#" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
              Learn More →
            </a>
          </div>

          {/* Card 3 - Customer Satisfaction */}
          <div className="bg-orange-50/20 backdrop-blur-lg border border-orange-200/40 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4">
              <span className="text-2xl">👥</span>
                </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 font-limelight">
              Quality Assurance
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Join thousands of satisfied travelers who trust us with their journeys.
                </p>
            <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm">
              Learn More →
            </a>
              </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTripsee; 