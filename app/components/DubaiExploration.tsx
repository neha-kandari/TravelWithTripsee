'use client';

import React from 'react';
import Image from 'next/image';

const DubaiExploration = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 font-limelight">
            Explore Dubai
          </h2>
          <p className="text-orange-600 text-lg md:text-xl lg:text-2xl font-medium font-merienda">
            Desert Majesty
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6">
          {/* Left Side - Large top image + 2 small side-by-side below */}
          <div className="col-span-1 row-span-1 md:row-span-2 flex flex-col gap-4">
            {/* Top - Dubai1 (Large horizontal) */}
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/Dubai/image.jpg"
                alt="Dubai Skyline"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                Dubai Skyline
              </div>
            </div>

            {/* Bottom - 2 small images side by side */}
            <div className="flex gap-4">
              {/* Dubai2 */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/Dubai/Dubai2.jpg"
                  alt="Dubai Architecture"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Dubai Architecture
                </div>
              </div>

              {/* Dubai3 */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/Dubai/Dubai3.jpg"
                  alt="Dubai Luxury"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Dubai Luxury
                </div>
              </div>
            </div>
          </div>

          {/* Center Large - image.jpg */}
          <div className="col-span-1 row-span-1 md:row-span-2">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/Dubai/Dubai1.jpg"
                alt="Dubai Iconic Landmark"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-base md:text-lg font-semibold font-limelight">Dubai Iconic Landmark</h3>
                <p className="text-xs md:text-sm opacity-90">Modern architectural marvel</p>
              </div>
            </div>
          </div>

          {/* Right Side - Large top image + 2 small side-by-side below */}
          <div className="col-span-1 row-span-1 md:row-span-2 flex flex-col gap-4">
            {/* Top - image2.jpg (Large horizontal) */}
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/Dubai/image2.jpg"
                alt="Dubai Adventure"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                Dubai Adventure
              </div>
            </div>

            {/* Bottom - 2 small images side by side */}
            <div className="flex gap-4">
              {/* image3.jpg */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/Dubai/image3.jpg"
                  alt="Dubai Culture"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Dubai Culture
                </div>
              </div>

              {/* image4.jpg */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/Dubai/image4.jpg"
                  alt="Dubai Experience"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Dubai Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DubaiExploration; 