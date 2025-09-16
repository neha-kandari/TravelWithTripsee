'use client';

import React from 'react';
import Image from 'next/image';

const BaliExploration = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 font-limelight">
            Explore Bali
          </h2>
          <p className="text-orange-600 text-lg md:text-xl lg:text-2xl font-medium font-merienda">
            Island Bliss
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6">
          {/* Left Side - Large top image + 2 small side-by-side below */}
          <div className="col-span-1 row-span-1 md:row-span-2 flex flex-col gap-4">
            {/* Top - Bali1 (Large horizontal) */}
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/bali/Bali1.jpg"
                alt="Bali Paradise"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                Bali Paradise
              </div>
            </div>

            {/* Bottom - 2 small images side by side */}
            <div className="flex gap-4">
              {/* Bali2 */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/Bali2.jpg"
                  alt="Bali Culture"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Bali Culture
                </div>
              </div>

              {/* Bali3 */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/Bali8.jpg"
                  alt="Bali Nature"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Bali Nature
                </div>
              </div>
            </div>
          </div>

          {/* Center Large - Bali4 */}
          <div className="col-span-1 row-span-1 md:row-span-2">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/bali/Bali4.jpg"
                alt="Bali Temple"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-base md:text-lg font-semibold font-limelight">Bali Temple</h3>
                <p className="text-xs md:text-sm opacity-90">Sacred spiritual sites</p>
              </div>
            </div>
          </div>

          {/* Right Side - Large top image + 2 small side-by-side below */}
          <div className="col-span-1 row-span-1 md:row-span-2 flex flex-col gap-4">
            {/* Top - Bali5 (Large horizontal) */}
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/bali/Bali5.jpg"
                alt="Bali Adventure"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                Bali Adventure
              </div>
            </div>

            {/* Bottom - 2 small images side by side */}
            <div className="flex gap-4">
              {/* Bali6 */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/Bali6.jpg"
                  alt="Bali Beach"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Bali Beach
                </div>
              </div>

              {/* Bali7 */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/Bali7.jpg"
                  alt="Bali Sunset"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Bali Sunset
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaliExploration;
