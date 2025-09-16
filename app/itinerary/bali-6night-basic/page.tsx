'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from '../../components/Accordion';
import HotelCard from '../../components/HotelCard';
import { Limelight, Lalezar } from 'next/font/google';

const limelight = Limelight({ 
  weight: '400',
  subsets: ['latin'] 
});

const lalezar = Lalezar({ 
  weight: '400',
  subsets: ['latin'] 
});

const Bali6NightBasic = () => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedHotelIndex, setExpandedHotelIndex] = useState(-1);

  // Function to handle hotel card toggle with proper accordion behavior
  const handleHotelToggle = (index: number) => {
    if (expandedHotelIndex === index) {
      // If clicking the same card, collapse it
      setExpandedHotelIndex(-1);
    } else if (expandedHotelIndex === -1) {
      // If no card is expanded, expand this one
      setExpandedHotelIndex(index);
    }
    // If another card is already expanded, do nothing (prevent multiple cards)
  };

  const sliderImages = [
    {
      src: "/Destination/BaliHero/Tirta Empul Temple.jpg",
      alt: "Tirta Empul Temple",
      title: "Sacred Temples",
      subtitle: "Where Ancient Spirits Meet Divine Architecture",
      description: "Experience the spiritual beauty of ancient Balinese temples set against stunning natural backdrops."
    },
    {
      src: "/Destination/BaliHero/Pura Ulun Danu.jpg", 
      alt: "Pura Ulun Danu",
      title: "Lake Temples",
      subtitle: "Paradise Reimagined in Ultimate Serenity",
      description: "Discover the iconic floating temple on Lake Bratan, a masterpiece of Balinese architecture."
    },
    {
      src: "/Destination/BaliHero/Kelingking Beach.jpg",
      alt: "Kelingking Beach",
      title: "Pristine Beaches",
      subtitle: "Where Emerald Cliffs Touch Azure Waters",
      description: "Marvel at the dramatic coastal beauty and crystal-clear waters of Nusa Penida."
    },
    {
      src: "/Destination/BaliHero/Handara Gate.jpg",
      alt: "Handara Gate",
      title: "Cultural Heritage",
      subtitle: "Timeless Traditions in Modern Harmony",
      description: "Walk through the iconic gates that frame Bali's magnificent mountain landscapes."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const packageDetails = {
    title: "BASIC PACKAGE 6 NIGHTS",
    duration: "6N / 7D",
    location: "Kuta & Ubud, Bali",
    rating: "3-4",
    price: "₹76,396/- For a Couple",
    excludes: "Excluding Flight"
  };

  const hotels = [
    {
      name: "Bedrock Hotel",
      nights: "4 Nights",
      roomType: "Deluxe Room",
      location: "Kuta, Bali",
      rating: 4,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&crop=center",
      link: "https://bedrockbali.com/",
      benefits: []
    },
    {
      name: "Kori Maharani Villa",
      nights: "2 Nights",
      roomType: "One Bedroom Pool Villa",
      location: "Ubud, Bali",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center",
      link: "https://www.korimaharanibali.com/en/",
      benefits: [
        "Private pool villa experience",
        "Garden view",
        "Daily breakfast",
        "Free WiFi"
      ]
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Romance",
      activities: ["Arrival in Bali", "Romantic Candle Light Dinner"],
      highlight: "Welcome to Paradise"
    },
    {
      day: 2,
      title: "Water Adventures & Culture", 
      activities: [
        "Watersports (Banana Boat, Jet Ski, Parasailing)",
        "1 Hour Balinese Massage",
        "Uluwatu Temple",
        "Kecak Dance Performance"
      ],
      highlight: "Adventure & Wellness"
    },
    {
      day: 3,
      title: "West Nusa Penida Island Tour",
      activities: [
        "Broken Beach",
        "Angel Billabong", 
        "Kelingking Beach",
        "Bubu Beach",
        "Local Lunch",
        "Snorkelling"
      ],
      highlight: "Island Paradise"
    },
    {
      day: 4,
      title: "Temple Trail",
      activities: [
        "Ulun Danu Temple",
        "Handara Gate",
        "Tanah Lot Temple"
      ],
      highlight: "Sacred Journey"
    },
    {
      day: 5,
      title: "Ubud Nature Experience",
      activities: [
        "Kintamani Volcano View",
        "Ubud Market",
        "Tegenungan Waterfall",
        "Tegallalang Rice Terrace",
        "Ubud Jungle Swing",
        "Inter Hotel Transfer"
      ],
      highlight: "Nature & Culture"
    },
    {
      day: 6,
      title: "Leisure Day",
      activities: [
        "Day free at leisure",
        "Enjoy in pool villa"
      ],
      highlight: "Relaxation"
    },
    {
      day: 7,
      title: "Departure",
      activities: ["Check-out", "Departure Transfer"],
      highlight: "Farewell Bali"
    }
  ];

  const packageHighlights = [
    "Budget-Friendly Bali Experience",
    "Pool Villa in Ubud",
    "Water Sports Activities", 
    "Temple Tours & Cultural Shows",
    "Nusa Penida Island Adventure",
    "Romantic Dinner Experience"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative h-screen">
        <div className="relative h-full">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <h1 className={`${limelight.className} text-6xl md:text-7xl lg:text-8xl mb-4 drop-shadow-2xl`}>
                    {image.title.toUpperCase()}
                  </h1>
                  <p className={`${lalezar.className} text-xl md:text-2xl lg:text-3xl mb-6 drop-shadow-xl`}>
                    {image.subtitle}
                  </p>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Dot Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex space-x-3">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => router.push('/destination/bali')}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Bali Packages</span>
          </button>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-lg max-h-screen overflow-y-auto">
              
              <div className="mb-6 pb-6 border-b">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Section - Package Title & Duration */}
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">{packageDetails.title}</h2>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold text-rose-500">6 Days</p>
                      <p className="text-3xl font-bold text-gray-400">5 Nights</p>
                    </div>
                  </div>
                  
                  {/* Right Section - Price & Details */}
                  <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                    <p className="text-2xl font-bold text-green-600 mb-2">{packageDetails.price}</p>
                    <p className="text-sm text-gray-500">{packageDetails.excludes}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">🏨 Hotel Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotels.map((hotel, index) => (
                    <HotelCard
                      key={index}
                      name={hotel.name}
                      image={hotel.image}
                      rating={hotel.rating}
                      location={hotel.location}
                      nights={hotel.nights}
                      roomType={hotel.roomType}
                      link={hotel.link}
                      benefits={hotel.benefits}
                      isExpanded={expandedHotelIndex === index}
                      onToggle={() => handleHotelToggle(index)}
                      isAnyCardExpanded={expandedHotelIndex !== -1}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">📅 Day-wise Itinerary</h3>
                <Accordion 
                  items={itinerary.map((day, index) => ({
                    title: day.title,
                    content: (
                      <div className="relative">
                        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                        <div className="space-y-3 pl-6">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="relative">
                              <div className="absolute -left-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                              <div className="text-gray-700 text-sm leading-relaxed">{activity}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                    highlight: day.highlight,
                    dayNumber: day.day
                  }))}
                  allowMultiple={true}
                />
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">✨ Package Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                                      {packageHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg sticky top-4">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Book This Package</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>2 Adults</option>
                        <option>1 Adult</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>0 Children</option>
                        <option>1 Child</option>
                        <option>2 Children</option>
                        <option>3 Children</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                    <textarea 
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Any special requests or requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Contact Info</h4>
                  <p className="text-sm text-gray-600">📧 info@tripsee.com</p>
                  <p className="text-sm text-gray-600">📞 +91 9876543210</p>
                  <p className="text-sm text-gray-600">💬 WhatsApp Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bali6NightBasic; 