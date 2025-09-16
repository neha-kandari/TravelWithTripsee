'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Destination {
  name: string;
  image: string;
  packages: Package[];
  topDestinations: Array<{
    name: string;
    description: string;
    image: string;
  }>;
}

interface Package {
  id: string;
  title: string;
  days: string;
  location: string;
  price: string;
  type: string;
  hotelRating: number;
  features: string[];
  highlights: string;
  image: string;
  destination: string;
}

const PopularPackages = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('BALI');
  const [showTopDestinations, setShowTopDestinations] = useState(true);
  const [currentDestinationsIndex, setCurrentDestinationsIndex] = useState(0);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to convert page URLs to direct image URLs or fallback
  const convertImageUrl = (url: string): string => {
    // Handle Unsplash page URLs
    if (url.includes('unsplash.com/photos/')) {
      return '/Destination/Bali.jpeg';
    }
    
    // Handle iStock Photo page URLs
    if (url.includes('istockphoto.com/photo/')) {
      return '/Destination/Bali.jpeg';
    }
    
    // Handle other page URLs that might not work with Next.js Image
    if (url.includes('/photo/') && (url.includes('istockphoto.com') || url.includes('shutterstock.com') || url.includes('gettyimages.com'))) {
      return '/Destination/Bali.jpeg';
    }
    
    return url;
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch('/api/home-content');
      if (response.ok) {
        const data = await response.json();
        setDestinations(data.popularPackages?.destinations || []);
        if (data.popularPackages?.destinations?.length > 0) {
          setSelectedDestination(data.popularPackages.destinations[0].name);
        }
      } else {
        // Fallback to default destinations if API fails
        setDestinations([
    {
      name: 'BALI',
      image: '/Destination/Bali.jpeg',
      packages: [],
      topDestinations: [
        {
          name: 'Handara Gate',
          description: 'Iconic temple gate entrance',
          image: '/Destination/BaliHero/Handara Gate.jpg'
        },
        {
          name: 'Kelingking Beach',
          description: 'Dramatic cliff formations',
          image: '/Destination/BaliHero/Kelingking Beach.jpg'
        },
        {
          name: 'Pura Ulun Danu',
          description: 'Lake temple serenity',
          image: '/Destination/BaliHero/Pura Ulun Danu.jpg'
        },
        {
          name: 'Tirta Empul Temple',
          description: 'Sacred water purification',
          image: '/Destination/BaliHero/Tirta Empul Temple.jpg'
        },
        {
          name: 'Gates of Heaven',
          description: 'Lempuyang Temple entrance',
          image: '/Destination/Bali_images/Gates of Heaven.jpg'
        },
        {
          name: 'Pura Penataran Agung',
          description: 'Besakih Mother Temple',
          image: '/Destination/Bali_images/Pura Penataran Agung.jpg'
        },
        {
          name: 'Tirta Empul Temple',
          description: 'Sacred water purification',
          image: '/Destination/Bali_images/Tirta Empul Temple.jpg'
        },
        {
          name: 'Pura Ulun Danu',
          description: 'Lake temple serenity',
          image: '/Destination/Bali_images/Pura Ulun Danu.jpg'
        }
      ]
    },
    {
      name: 'VIETNAM',
      image: '/Destination/Vietnam/Halong Bay.jpg',
      packages: [],
      topDestinations: [
        {
          name: 'Ha Long Bay',
          description: 'Limestone islands and caves',
          image: '/Destination/Vietnam/Halong Bay.jpg'
        },
        {
          name: 'Hoi An',
          description: 'Ancient trading port',
          image: '/Destination/Vietnam/photo-1533497394934-b33cd9695ba9.avif'
        },
        {
          name: 'Mekong Delta',
          description: 'Floating markets',
          image: '/Destination/Vietnam/mekong delta.avif'
        },
        {
          name: 'Ninh Binh',
          description: 'Terraced rice fields',
          image: '/Destination/Vietnam/ninh binh.avif'
        },
        {
          name: 'Hoan Kiem Lake',
          description: 'Historic city center',
          image: '/Destination/Vietnam/hoan kiem lake.avif'
        },
        {
          name: 'Golden Bridge',
          description: 'Iconic architectural marvel',
          image: '/Destination/Vietnam/golden bridge.avif'
        },
        {
          name: 'Ngoc Son Temple',
          description: 'Sacred temple on the lake',
          image: '/Destination/Vietnam/ngoc sun temple.avif'
        },
        {
          name: 'Phu Quoc Beaches',
          description: 'Pristine island paradise',
          image: '/Destination/Vietnam/phu quoc beaches.avif'
        }
      ]
    },
    {
      name: 'SINGAPORE',
      image: '/Destination/Singapore.jpeg',
      packages: [],
      topDestinations: [
        {
          name: 'Marina Bay Sands',
          description: 'Iconic hotel and skyline',
          image: '/Destination/Singapore/marina bay sands.avif'
        },
        {
          name: 'Supertree Grove',
          description: 'Gardens by the Bay',
          image: '/Destination/Singapore/supertree.avif'
        },
        {
          name: 'Universal Studios',
          description: 'Sentosa Island adventure',
          image: '/Destination/Singapore/universal studios.avif'
        },
        {
          name: 'Chinatown',
          description: 'Cultural heritage district',
          image: '/Destination/Singapore/Chinatown.jpg'
        },
        {
          name: 'Singapore Flyer',
          description: 'Giant observation wheel',
          image: '/Destination/Singapore/singapore flyer.avif'
        },
        {
          name: 'Helix Bridge',
          description: 'Iconic pedestrian bridge',
          image: '/Destination/Singapore/helix brigde.avif'
        },
        {
          name: 'Cloud Forest',
          description: 'Misty mountain ecosystem',
          image: '/Destination/Singapore/cloud forest.avif'
        },
        {
          name: 'Art Science Museum',
          description: 'Marina Bay waterfront',
          image: '/Destination/Singapore/art science museum and marina bay stands.avif'
        }
      ]
    },
    {
      name: 'THAILAND',
      image: '/Destination/Thailand.jpeg',
      packages: [],
      topDestinations: [
        {
          name: 'Grand Palace',
          description: 'Royal palace complex',
          image: '/Destination/Thailand/grand palace.avif'
        },
        {
          name: 'Wat Pho',
          description: 'Reclining Buddha temple',
          image: '/Destination/Thailand/wat pho.avif'
        },
        {
          name: 'Wat Arun',
          description: 'Temple of Dawn',
          image: '/Destination/Thailand/wat arun temple.avif'
        },
        {
          name: 'Doi Suthep',
          description: 'Mountain temple in Chiang Mai',
          image: '/Destination/Thailand/doi suthep temple.avif'
        },
        {
          name: 'Phi Phi Islands',
          description: 'Crystal clear waters',
                image: '/Destination/Thailand/phi phi island.avif'
        },
        {
                name: 'Ayutthaya',
                description: 'Ancient capital ruins',
                image: '/Destination/Thailand/grand palace.avif'
        },
        {
                name: 'Chiang Mai Night Bazaar',
                description: 'Cultural market experience',
                image: '/Destination/Thailand/chiang mai night bazaar.avif'
        },
        {
                name: 'Railay Beach',
                description: 'Rock climbing paradise',
                image: '/Destination/Thailand/railay beach.avif'
        }
      ]
    },
    {
      name: 'MALAYSIA',
      image: '/Destination/Malasia.jpeg',
      packages: [],
      topDestinations: [
        {
          name: 'Petronas Twin Towers',
          description: 'Iconic twin skyscrapers in KL',
          image: '/Destination/Malaysia/Petronas Twin Towers (Kuala Lumpur) – Iconic twin skyscrapers..jpg'
        },
        {
          name: 'Batu Caves',
          description: 'Hindu temple complex in Selangor',
          image: '/Destination/Malaysia/Batu Caves (Selangor).jpg'
        },
        {
          name: 'Cameron Highlands',
          description: 'Tea plantations and cool climate',
          image: '/Destination/Malaysia/Cameron Highlands.webp'
        },
        {
          name: 'Malacca',
          description: 'UNESCO heritage site',
          image: '/Destination/Malaysia/Malacca (Melaka).jpg'
        },
        {
          name: 'Tioman Island',
          description: 'Paradise for divers',
          image: '/Destination/Malaysia/Tioman Island – A paradise for divers..jpg'
        },
        {
          name: 'Kapas Island',
          description: 'Terengganu island beauty',
          image: '/Destination/Malaysia/Kapas Island (Terengganu).jpg'
        },
        {
          name: 'Manukan Island',
          description: 'Sabah island paradise',
          image: '/Destination/Malaysia/Manukan Island (Sabah).jpg'
        },
        {
          name: 'Ipoh',
          description: 'Colonial charm and cave temples',
          image: '/Destination/Malaysia/Ipoh (Perak) – Colonial charm, cave temples, and street art.jpg'
        }
      ]
    },
    {
      name: 'DUBAI',
      image: '/Destination/Dubai.jpeg',
      packages: [],
      topDestinations: [
        {
          name: 'Burj Khalifa',
          description: 'World\'s tallest building',
          image: '/Destination/Dubai_images/Burj Khalifa.jpg'
        },
        {
          name: 'Burj Al Arab Jumeirah',
          description: 'Luxury sail-shaped hotel',
          image: '/Destination/Dubai_images/Burj AI Arab Jumeirah.jpg'
        },
        {
          name: 'Dubai Mall',
          description: 'Shopping paradise',
          image: '/Destination/Dubai_images/Dubai Mall.webp'
        },
        {
          name: 'Desert Safari',
          description: 'Dune bashing adventure',
          image: '/Destination/Dubai_images/Desert Safari.jpg'
        },
        {
          name: 'Dubai Frame',
          description: 'Golden frame monument',
          image: '/Destination/Dubai_images/Dubai Frame.jpg'
        },
        {
          name: 'Dubai Skyline',
          description: 'Iconic city panorama',
          image: '/Destination/Dubai_images/Dubai Skyline.jpg'
        },
        {
          name: 'Dubai Fountain',
          description: 'World\'s largest choreographed fountain',
          image: '/Destination/Dubai_images/Dubai Fountain.jpg'
        },
        {
          name: 'Ain Dubai',
          description: 'World\'s largest observation wheel',
          image: '/Destination/Dubai_images/Ain Dubai.jpg'
        }
      ]
    },
    {
      name: 'MALDIVES',
      image: '/Destination/Maldives.jpeg',
      packages: [],
      topDestinations: [
        {
          name: 'Conrad Maldives Rangali Island',
          description: 'Luxury overwater resort',
          image: '/Destination/Maldives/Conrad Maldives Rangali Island.jpg'
        },
        {
          name: 'Gulhi Falhu',
          description: 'Pristine island paradise',
          image: '/Destination/MaldivesHero/Gulhi Falhu.jpg'
        },
        {
          name: 'Meedhoo, Raa Atoll',
          description: 'Remote island beauty',
          image: '/Destination/Maldives/Meedhoo, Raa Atoll,.jpg'
        },
        {
          name: 'Hanifaru Bay',
          description: 'Baa Atoll whale shark haven',
          image: '/Destination/MaldivesHero/Hanifaru Bay.jpg'
        },
        {
          name: 'North Malé Atoll',
          description: 'Crystal clear waters',
          image: '/Destination/Maldives/North Malé Atoll.webp'
        },
        {
          name: 'Ari Atoll',
          description: 'Diving and snorkeling paradise',
          image: '/Destination/Maldives/Ari Atoll –.jpg'
        },
        {
          name: 'Baa Atoll',
          description: 'UNESCO Biosphere Reserve',
          image: '/Destination/Maldives/Baa Atoll (UNESCO Biosphere Reserve).jpg'
        },
        {
          name: 'Malé Atoll',
          description: 'Kaafu Atoll capital region',
          image: '/Destination/MaldivesHero/Malé Atoll.jpg'
        }
      ]
    },
    {
      name: 'ANDAMANS',
      image: '/Destination/andaman.jpeg',
      packages: [],
      topDestinations: [
        {
          name: 'Havelock Island',
          description: 'Swaraj Dweep paradise',
          image: '/Destination/Andamans/Havelock Island (Swaraj Dweep).webp'
        },
        {
          name: 'Neil Island',
          description: 'Shaheed Dweep beauty',
          image: '/Destination/Andamans/Neil Island (Shaheed Dweep).jpg'
        },
        {
          name: 'Baratang Island',
          description: 'Limestone caves and mud volcanoes',
          image: '/Destination/Andamans/Baratang Island.webp'
        },
        {
          name: 'Ross Island',
          description: 'Netaji Subhash Chandra Bose Island',
          image: '/Destination/Andamans/Ross Island (Netaji Subhash Chandra Bose Island).jpg'
        },
        {
          name: 'North Bay Island',
          description: 'Water sports and coral reefs',
          image: '/Destination/Andamans/North Bay Island.jpg'
        },
        {
          name: 'Cinque Island',
          description: 'Pristine island getaway',
          image: '/Destination/Andamans/Cinque Island.jpg'
        },
        {
          name: 'Cellular Jail',
          description: 'Port Blair historical landmark',
          image: '/Destination/Andamans/Cellular Jail (Port Blair).jpeg'
        },
        {
          name: 'Samudrika Marine Museum',
          description: 'Marine life exhibition',
          image: '/Destination/Andamans/Samudrika Marine Museum (Port Blair).jpg'
        }
      ]
    }
        ]);
      }
    } catch (error) {
      console.error('Error fetching destinations:', error);
      // Fallback to default destinations
      setDestinations([
        {
          name: 'BALI',
          image: '/Destination/Bali.jpeg',
          packages: [],
          topDestinations: [
            {
              name: 'Tanah Lot Temple',
              description: 'Iconic temple on the sea',
              image: '/Destination/Bali_images/Tanah Lot Temple.avif'
            },
            {
              name: 'Nusa Penida',
              description: 'Island paradise adventure',
              image: '/Destination/Bali_images/Nusa Penida.avif'
            },
            {
              name: 'Seminyak Beach',
              description: 'Luxury beach destination',
              image: '/Destination/Bali_images/Seminyak Beach.jpg'
            },
            {
              name: 'Kelingking Beach',
              description: 'Dramatic cliff formations',
              image: '/Destination/Bali_images/Kelingking Beach.jpg'
            },
            {
              name: 'Gates of Heaven',
              description: 'Lempuyang Temple entrance',
              image: '/Destination/Bali_images/Gates of Heaven.jpg'
            },
            {
              name: 'Pura Penataran Agung',
              description: 'Besakih Mother Temple',
              image: '/Destination/Bali_images/Pura Penataran Agung.jpg'
            },
            {
              name: 'Tirta Empul Temple',
              description: 'Sacred water purification',
              image: '/Destination/Bali_images/Tirta Empul Temple.jpg'
            },
            {
              name: 'Pura Ulun Danu',
              description: 'Lake temple serenity',
              image: '/Destination/Bali_images/Pura Ulun Danu.jpg'
            }
          ]
        },
        {
          name: 'VIETNAM',
          image: '/Destination/Vietnam/haloang bay.avif',
          packages: [],
          topDestinations: [
            {
              name: 'Ha Long Bay',
              description: 'Limestone islands and caves',
              image: '/Destination/Vietnam/haloang bay.avif'
            },
            {
              name: 'Hoi An',
              description: 'Ancient trading port',
              image: '/Destination/Vietnam/photo-1533497394934-b33cd9695ba9.avif'
            },
            {
              name: 'Mekong Delta',
              description: 'Floating markets',
              image: '/Destination/Vietnam/mekong delta.avif'
            },
            {
              name: 'Ninh Binh',
              description: 'Terraced rice fields',
              image: '/Destination/Vietnam/ninh binh.avif'
            },
            {
              name: 'Hoan Kiem Lake',
              description: 'Historic city center',
              image: '/Destination/Vietnam/hoan kiem lake.avif'
            },
            {
              name: 'Golden Bridge',
              description: 'Iconic architectural marvel',
              image: '/Destination/Vietnam/golden bridge.avif'
            },
            {
              name: 'Ngoc Son Temple',
              description: 'Sacred temple on the lake',
              image: '/Destination/Vietnam/ngoc sun temple.avif'
            },
            {
              name: 'Phu Quoc Beaches',
              description: 'Pristine island paradise',
              image: '/Destination/Vietnam/phu quoc beaches.avif'
            }
          ]
        },
        {
          name: 'SINGAPORE',
          image: '/Destination/Singapore.jpeg',
          packages: [],
          topDestinations: [
            {
              name: 'Marina Bay Sands',
              description: 'Iconic hotel and skyline',
              image: '/Destination/Singapore/marina bay sands.avif'
            },
            {
              name: 'Supertree Grove',
              description: 'Gardens by the Bay',
              image: '/Destination/Singapore/supertree.avif'
            },
            {
              name: 'Universal Studios',
              description: 'Sentosa Island adventure',
              image: '/Destination/Singapore/universal studios.avif'
            },
            {
              name: 'Chinatown',
              description: 'Cultural heritage district',
              image: '/Destination/Singapore/Chinatown.jpg'
            },
            {
              name: 'Singapore Flyer',
              description: 'Giant observation wheel',
              image: '/Destination/Singapore/singapore flyer.avif'
            },
            {
              name: 'Helix Bridge',
              description: 'Iconic pedestrian bridge',
              image: '/Destination/Singapore/helix brigde.avif'
            },
            {
              name: 'Cloud Forest',
              description: 'Misty mountain ecosystem',
              image: '/Destination/Singapore/cloud forest.avif'
            },
            {
              name: 'Art Science Museum',
              description: 'Marina Bay waterfront',
              image: '/Destination/Singapore/art science museum and marina bay stands.avif'
            }
          ]
        },
        {
          name: 'THAILAND',
          image: '/Destination/Thailand.jpeg',
          packages: [],
          topDestinations: [
            {
              name: 'Grand Palace',
              description: 'Royal palace complex',
              image: '/Destination/Thailand/grand palace.avif'
            },
            {
              name: 'Wat Pho',
              description: 'Reclining Buddha temple',
              image: '/Destination/Thailand/wat pho.avif'
            },
            {
              name: 'Wat Arun',
              description: 'Temple of Dawn',
              image: '/Destination/Thailand/wat arun temple.avif'
            },
            {
              name: 'Doi Suthep',
              description: 'Mountain temple in Chiang Mai',
              image: '/Destination/Thailand/doi suthep temple.avif'
            },
            {
              name: 'Phi Phi Islands',
              description: 'Crystal clear waters',
              image: '/Destination/Thailand/phi phi island.avif'
            },
            {
              name: 'Ayutthaya',
              description: 'Ancient capital ruins',
              image: '/Destination/Thailand/grand palace.avif'
            },
            {
              name: 'Chiang Mai Night Bazaar',
              description: 'Cultural market experience',
              image: '/Destination/Thailand/chiang mai night bazaar.avif'
            },
            {
              name: 'Railay Beach',
              description: 'Rock climbing paradise',
              image: '/Destination/Thailand/railay beach.avif'
            }
          ]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading popular packages...</p>
          </div>
        </div>
      </section>
    );
  }

  // Real packages from destination pages
  const getPackagesForDestination = (destinationName: string) => {
    const destination = destinations.find(d => d.name === destinationName);
    return destination?.packages || [];
  };

  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination.name);
    setShowTopDestinations(true);
    setCurrentDestinationsIndex(0); // Reset to first page when changing destination
  };

  const nextDestinations = () => {
    const currentDest = destinations.find(d => d.name === selectedDestination);
    if (currentDest && currentDestinationsIndex + 4 < currentDest.topDestinations.length) {
      setCurrentDestinationsIndex(prev => prev + 4);
    }
  };

  const prevDestinations = () => {
    if (currentDestinationsIndex > 0) {
      setCurrentDestinationsIndex(prev => prev - 4);
    }
  };


  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-limelight tracking-wide">
              Popular Packages
            </h2>
          </div>

          {/* Destination Images Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mb-12">
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => handleDestinationClick(destination)}
              >
                {/* Circular Image */}
                <div className={`relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-3 ${
                  selectedDestination === destination.name ? 'ring-2 ring-orange-500 ring-offset-2' : ''
                }`}>
                  <Image
                    src={convertImageUrl(destination.image) || '/Destination/Bali.jpeg'}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300"
                    priority={index < 4} // Priority for first 4 destinations
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    style={{
                      objectPosition: 'center'
                    }}
                    onError={(e) => {
                      console.error('Destination image failed to load:', destination.image);
                      // Only set fallback if we haven't already tried it
                      if (!e.currentTarget.dataset.fallbackUsed) {
                        e.currentTarget.src = '/Destination/Bali.jpeg';
                        e.currentTarget.dataset.fallbackUsed = 'true';
                      }
                    }}
                  />
                </div>
                {/* Destination Name */}
                <p className="text-xs md:text-sm font-bold text-gray-800 text-center font-libre-franklin tracking-wide">
                  {destination.name}
                </p>
              </div>
            ))}
          </div>

          {/* Package Cards - Show packages for selected destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {getPackagesForDestination(selectedDestination).map((pkg, index) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Mobile: Stacked layout, Desktop: Horizontal layout */}
                <div className="flex flex-col md:flex-row h-auto md:h-56">
                  {/* Image Section */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <Image
                      src={convertImageUrl(pkg.image) || '/Destination/Bali.jpeg'}
                      alt={pkg.title || 'destination package'}
                      fill
                      className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                      priority={index < 2} // Priority for first 2 packages
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      quality={85}
                      loading={index < 2 ? "eager" : "lazy"}
                      onError={(e) => {
                        console.error('Image failed to load:', pkg.image);
                        // Only set fallback if we haven't already tried it
                        if (!e.currentTarget.dataset.fallbackUsed) {
                          e.currentTarget.src = '/Destination/Bali.jpeg';
                          e.currentTarget.dataset.fallbackUsed = 'true';
                        }
                      }}
                    />
                  </div>

                  {/* Details Section */}
                  <div className="w-full md:w-3/5 p-3 md:p-3 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-800 mb-1 font-limelight tracking-wide">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-1 font-libre-franklin font-medium">
                        {pkg.days}
                      </p>
                      <p className="text-xs text-gray-500 mb-2 font-libre-franklin">
                        {pkg.location}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                      <div className="text-base font-bold text-orange-600 font-libre-franklin">
                        {pkg.price}
                      </div>
                      <a
                        href={`https://wa.me/918595682910?text=Hi! I'm interested in the ${pkg.title} package for ${pkg.days} at ${pkg.location}. Price: ${pkg.price}. Please provide more details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-32 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 font-libre-franklin whitespace-nowrap text-center inline-block"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top  Destinations Section - Shows when destination is clicked */}
          {showTopDestinations && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-limelight tracking-wide">
                Top Destinations in {selectedDestination}
              </h3>
              <div className="relative overflow-hidden">
                {/* Viewport Container - Shows exactly 4 destinations */}
                <div className="w-full overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${(currentDestinationsIndex / 4) * 100}%)`,
                      width: `${Math.ceil((destinations.find(d => d.name === selectedDestination)?.topDestinations.length || 0) / 4) * 100}%`
                    }}
                  >
                    {(() => {
                      const currentDest = destinations.find(d => d.name === selectedDestination);
                      if (!currentDest) return null;
                      
                      // Create groups of 4 destinations
                      const groups = [];
                      for (let i = 0; i < currentDest.topDestinations.length; i += 4) {
                        groups.push(currentDest.topDestinations.slice(i, i + 4));
                      }
                      
                      return groups.map((group, groupIndex) => (
                        <div key={groupIndex} className="flex-shrink-0 w-full">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                            {group.map((dest, index) => (
                              <div
                                key={index}
                                className="w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
                              >
                                <div className="relative h-64">
                                  <Image
                                    src={convertImageUrl(dest.image) || '/Destination/Bali.jpeg'}
                                    alt={dest.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                                    quality={85}
                                    loading="lazy"
                                    onError={(e) => {
                                      console.error('Top destination image failed to load:', dest.image);
                                      // Only set fallback if we haven't already tried it
                                      if (!e.currentTarget.dataset.fallbackUsed) {
                                        e.currentTarget.src = '/Destination/Bali.jpeg';
                                        e.currentTarget.dataset.fallbackUsed = 'true';
                                      }
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                  <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="text-lg font-semibold mb-1 font-limelight tracking-wide">
                                      {dest.name}
                                    </h4>
                                    <p className="text-sm opacity-90 font-merienda">
                                      {dest.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </div>
              {/* Carousel Navigation */}
              <div className="flex flex-col items-center mt-6 space-y-4">
                {/* Navigation Buttons */}
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={prevDestinations}
                    className="w-12 h-12 bg-orange-200 text-white rounded-full shadow-sm hover:bg-orange-300 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                    disabled={currentDestinationsIndex === 0}
                  >
                    <span className="text-lg font-light">‹</span>
                  </button>
                  
                  <button
                    onClick={nextDestinations}
                    className="w-12 h-12 bg-orange-200 text-white rounded-full shadow-sm hover:bg-orange-300 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                    disabled={currentDestinationsIndex + 4 >= (destinations.find(d => d.name === selectedDestination)?.topDestinations.length || 0)}
                  >
                    <span className="text-lg font-light">›</span>
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="w-32 h-1 bg-orange-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-500 transition-all duration-500 ease-in-out rounded-full"
                    style={{
                      width: `${(() => {
                        const currentDest = destinations.find(d => d.name === selectedDestination);
                        const totalPages = currentDest ? Math.ceil(currentDest.topDestinations.length / 4) : 0;
                        const currentPage = Math.floor(currentDestinationsIndex / 4);
                        return totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;
                      })()}%`
                    }}
                  />
                </div>
                
                {/* Pagination Dots */}
                <div className="flex space-x-2">
                  {(() => {
                    const currentDest = destinations.find(d => d.name === selectedDestination);
                    const totalPages = currentDest ? Math.ceil(currentDest.topDestinations.length / 4) : 0;
                    const currentPage = Math.floor(currentDestinationsIndex / 4);
                    
                    return Array.from({ length: totalPages }, (_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                          i === currentPage ? 'bg-orange-500 scale-125' : 'bg-orange-300'
                        }`}
                        onClick={() => setCurrentDestinationsIndex(i * 4)}
                      />
                    ));
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* See More Link */}
          <div className="text-center">
            {/* <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300 font-libre-franklin text-lg tracking-wide"
            >
              See more
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages; 