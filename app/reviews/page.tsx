'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Limelight, Lalezar } from 'next/font/google';

const limelight = Limelight({ 
  weight: '400',
  subsets: ['latin'] 
});

const lalezar = Lalezar({ 
  weight: '400',
  subsets: ['latin'] 
});

const ReviewsPage = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [videoErrors, setVideoErrors] = useState<{[key: string]: boolean}>({});

  // Customer reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      location: "Maldives Honeymoon",
      rating: 5,
      date: "December 2023",
      review: "Our honeymoon in Maldives was absolutely magical! The overwater villa was stunning, and the candlelit dinner on the beach was unforgettable. Tripsee made everything perfect from start to finish. The attention to detail and personalized service exceeded all our expectations.",
      image: "/assets/gallery/IMG_1.JPG"
    },
    {
      id: 2,
      name: "Priya & Arjun Sharma",
      location: "Bali Romantic Escape",
      rating: 5,
      date: "November 2023",
      review: "Bali was a dream come true! The private pool villa in Ubud was surrounded by lush rice terraces. The floating breakfast and couple's spa treatments were highlights. Tripsee's local guides showed us hidden gems we never would have found on our own.",
      image: "/assets/gallery/IMG_2.jpg"
    },
    {
      id: 3,
      name: "David & Emma Wilson",
      location: "Dubai Proposal Package",
      rating: 5,
      date: "October 2023",
      review: "The proposal setup at Burj Khalifa was beyond our wildest dreams! Emma said YES with the most incredible backdrop. The professional photography captured every emotion perfectly. Thank you Tripsee for making this the most important moment of our lives so special.",
      image: "/assets/gallery/IMG_3.jpg"
    },
    {
      id: 4,
      name: "Ravi & Meera Patel",
      location: "Thailand Beach Romance",
      rating: 5,
      date: "September 2023",
      review: "Thailand exceeded every expectation! The islands were pristine, the food was incredible, and the sunset cruise was magical. Our resort in Phuket was perfect, and the staff treated us like royalty. Tripsee planned every detail flawlessly.",
      image: "/assets/gallery/IMG_4.jpg"
    },
    {
      id: 5,
      name: "Alex & Lisa Rodriguez",
      location: "Andaman Paradise",
      rating: 5,
      date: "August 2023",
      review: "Andaman Islands were absolutely breathtaking! The crystal-clear waters at Radhanagar Beach and the snorkeling at Elephant Beach were incredible. The candlelit dinner under the stars was the most romantic evening of our lives. Highly recommend Tripsee!",
      image: "/assets/gallery/IMG_5.JPG"
    },
    {
      id: 6,
      name: "Karan & Anjali Gupta",
      location: "Singapore City Romance",
      rating: 5,
      date: "July 2023",
      review: "Singapore was the perfect romantic getaway! The infinity pool at Marina Bay Sands with the city skyline was spectacular. Gardens by the Bay at night was like a fairy tale. Tripsee's itinerary was perfectly balanced between romance and adventure.",
      image: "/assets/gallery/IMG_1.JPG"
    }
  ];

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    currentReviewIndex * reviewsPerPage,
    (currentReviewIndex + 1) * reviewsPerPage
  );

  const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % totalPages);
  };

  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Video data
  const videoReviews = [
    {
      id: 1,
      video: "/Feedback/WhatsApp Video 2024-02-21 at 16.23.19_fd0537da.mp4",
      name: "Ms. Poonam & Mr. Pankaj",
      location: "Bali",
      description: "Amazing honeymoon experience!"
    },
    {
      id: 2,
      video: "/Feedback/WhatsApp Video 2024-12-23 at 6.27.27 PM.mp4",
      name: "Ms. Yashika & Mr. Ankush",
      location: "Maldives",
      description: "Perfect romantic getaway!"
    },
    {
      id: 3,
      video: "/Feedback/WhatsApp Video 2024-01-11 at 17.30.52.mp4",
      name: "Mr. Vaibhav & Mrs. Kashish",
      location: "Dubai",
      description: "Proposal was magical!"
    },
    {
      id: 4,
      video: "/Feedback/WhatsApp Video 2024-12-28 at 7.06.55 PM.mp4",
      name: "Ms. Pallavi and Mr. Ankit",
      location: "Thailand",
      description: "Unforgettable adventure!"
    },
    {
      id: 5,
      video: "/Feedback/WhatsApp Video 2024-06-30 at 2.51.20 PM (1).mp4",
      name: "Mr. Pranabh",
      location: "Bali",
      description: "Crystal clear waters!"
    },
    {
      id: 6,
      video: "/Feedback/WhatsApp Video 2024-04-24 at 20.06.07_e81e8432.mp4",
      name: "Mr. Vikas",
      location: "Bali",
      description: "City romance at its best!"
    },
    {
      id: 7,
      video: "/Feedback/WhatsApp Video 2024-06-10 at 12.44.27_c8380109.mp4",
      name: "Kakkars",
      location: "Malaysia",
      description: "Cultural immersion!"
    },
    {
      id: 8,
      video: "/Feedback/WhatsApp Video 2024-05-07 at 17.06.28_77a16445.mp4",
      name: "Mr. Rakesh & FAM",
      location: "Vietnam",
      description: "Adventure of a lifetime!"
    }
  ];

  const nextVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => {
      const newIndex = (prev + 1) % videoReviews.length;
      console.log('Next video:', newIndex, videoReviews[newIndex].name);
      return newIndex;
    });
  }, [videoReviews]);

  const prevVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => {
      const newIndex = (prev - 1 + videoReviews.length) % videoReviews.length;
      console.log('Previous video:', newIndex, videoReviews[newIndex].name);
      return newIndex;
    });
  }, [videoReviews]);

  const getCurrentVideos = () => {
    const current = videoReviews[currentVideoIndex];
    const prev = videoReviews[(currentVideoIndex - 1 + videoReviews.length) % videoReviews.length];
    const next = videoReviews[(currentVideoIndex + 1) % videoReviews.length];
    return { prev, current, next };
  };

  const { prev: prevVideoData, current: currentVideoData, next: nextVideoData } = getCurrentVideos();

  const toggleMute = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const handleVideoError = (videoKey: string) => {
    console.warn(`Video failed to load: ${videoKey}`);
    setVideoErrors(prev => ({ ...prev, [videoKey]: true }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevVideo();
      } else if (event.key === 'ArrowRight') {
        nextVideo();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [nextVideo, prevVideo]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Gallery Layout */}
      <section className="relative h-screen bg-gray-50 overflow-hidden pt-32">
        <br /><br /><br />
        <div className="container mx-auto px-4 h-full">
          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex items-center justify-center h-full gap-8">
            
            {/* Left Side - Large Image */}
            <div className="w-1/2 h-5/6">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/gallery/IMG_1.JPG"
                  alt="Dubai romantic destination"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Dubai Romance</h3>
                  <p className="text-white/90">Luxury at its finest</p>
                </div>
              </div>
            </div>

            {/* Right Side - Four Equal Small Images */}
            <div className="w-1/2 h-5/6">
              <div className="grid grid-cols-2 gap-4 h-full">
                
                {/* Top Left */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src="/assets/gallery/IMG_2.jpg"
                    alt="Beach romance destination"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-lg font-semibold">Beach Paradise</h4>
                    <p className="text-xs text-white/80">Tropical bliss</p>
                  </div>
                </div>

                {/* Top Right */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src="/assets/gallery/IMG_3.jpg"
                    alt="Cultural heritage destination"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-lg font-semibold">Cultural Heritage</h4>
                    <p className="text-xs text-white/80">Ancient wonders</p>
                  </div>
                </div>

                {/* Bottom Left */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src="/assets/gallery/IMG_4.jpg"
                    alt="Mountain landscape destination"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-lg font-semibold">Mountain Escape</h4>
                    <p className="text-xs text-white/80">Serene valleys</p>
                  </div>
                </div>

                {/* Bottom Right */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src="/assets/gallery/IMG_5.JPG"
                    alt="Island paradise destination"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="text-lg font-semibold">Island Paradise</h4>
                    <p className="text-xs text-white/80">Crystal waters</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden flex flex-col h-full">
            {/* Hero Content - Mobile First */}
            <div className="text-center text-gray-900 bg-white/40 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className={`text-orange-500 ${lalezar.className}`}>CUSTOMER</span>
                <br />
                <span className={limelight.className}>REVIEWS</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Discover what our travelers say about their incredible journeys with us
              </p>
              <div className="flex items-center justify-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-sm sm:text-base">⭐</span>
                ))}
                <span className="text-gray-700 ml-2 font-semibold text-xs sm:text-sm">4.9/5 from 1000+ reviews</span>
              </div>
            </div>

            {/* Mobile Gallery Grid */}
            <div className="flex-1 grid grid-cols-2 gap-3">
              {/* Large Image - Top Left */}
              <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/gallery/IMG_1.JPG"
                  alt="Dubai romantic destination"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold mb-1">Dubai Romance</h3>
                  <p className="text-xs text-white/90">Luxury at its finest</p>
                </div>
              </div>

              {/* Small Images Grid */}
              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="/assets/gallery/IMG_2.jpg"
                  alt="Beach romance destination"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Beach Paradise</h4>
                  <p className="text-xs text-white/80">Tropical bliss</p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="/assets/gallery/IMG_3.jpg"
                  alt="Cultural heritage destination"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Cultural Heritage</h4>
                  <p className="text-xs text-white/80">Ancient wonders</p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="/assets/gallery/IMG_4.jpg"
                  alt="Mountain landscape destination"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Mountain Escape</h4>
                  <p className="text-xs text-white/80">Serene valleys</p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="/assets/gallery/IMG_5.JPG"
                  alt="Island paradise destination"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Island Paradise</h4>
                  <p className="text-xs text-white/80">Crystal waters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Hero Content Overlay */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none pt-16">
            <div className="text-center text-gray-900 bg-white/40 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                <span className={`text-orange-500 ${lalezar.className}`}>CUSTOMER</span>
                <br />
                <span className={limelight.className}>REVIEWS</span>
              </h1>
              <p className="text-lg text-gray-600 mb-4 max-w-xl">
                Discover what our travelers say about their incredible journeys with us
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
                <span className="text-gray-700 ml-2 font-semibold text-sm">4.9/5 from 1000+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reviews Slider Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Watch Our <span className="text-orange-500">Happy Travelers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real video testimonials from our customers sharing their amazing travel experiences
            </p>
          </div>

                     {/* Video Slider */}
           <div className="relative">
             {/* Desktop Layout - Three Videos */}
             <div className="hidden lg:flex justify-center items-center gap-6 overflow-hidden">
               {/* Left Video */}
               <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-lg opacity-70 scale-90 transition-all duration-500 relative">
                 {videoErrors[`prev-${currentVideoIndex}`] ? (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                     <div className="text-center text-gray-500">
                       <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                       </svg>
                       <p className="text-sm">Video unavailable</p>
                     </div>
                   </div>
                 ) : (
                   <video
                     key={`prev-${currentVideoIndex}`}
                     className="w-full h-full object-cover"
                     autoPlay
                     loop
                     muted
                     playsInline
                     onError={() => handleVideoError(`prev-${currentVideoIndex}`)}
                   >
                     <source src={prevVideoData.video} type="video/mp4" />
                   </video>
                 )}
                 <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                   {prevVideoData.name} - {prevVideoData.location}
                 </div>
               </div>

               {/* Center Video (Main) */}
               <div className="w-96 h-[28rem] rounded-2xl overflow-hidden shadow-2xl relative transform scale-100 transition-all duration-500">
                 {videoErrors[`current-${currentVideoIndex}`] ? (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                     <div className="text-center text-gray-500">
                       <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                       </svg>
                       <p className="text-lg font-medium">Video unavailable</p>
                       <p className="text-sm">Please check your connection</p>
                     </div>
                   </div>
                 ) : (
                   <video
                     key={`current-${currentVideoIndex}`}
                     className="w-full h-full object-cover"
                     autoPlay
                     loop
                     muted={isVideoMuted}
                     playsInline
                     onError={() => handleVideoError(`current-${currentVideoIndex}`)}
                   >
                     <source src={currentVideoData.video} type="video/mp4" />
                   </video>
                 )}
                 <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-lg">
                   <h4 className="font-semibold">{currentVideoData.name} - {currentVideoData.location}</h4>
                   <p className="text-sm text-gray-200">{currentVideoData.description}</p>
                 </div>
                 
                 {/* Play/Pause Button */}
                 <div className="absolute top-4 right-4">
                   <button className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z"/>
                     </svg>
                   </button>
                 </div>

                 {/* Mute/Unmute Button */}
                 <div className="absolute top-4 left-4">
                   <button 
                     onClick={toggleMute}
                     className="w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                   >
                     {isVideoMuted ? (
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                       </svg>
                     ) : (
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                       </svg>
                     )}
                   </button>
                 </div>
               </div>

               {/* Right Video */}
               <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-lg opacity-70 scale-90 transition-all duration-500 relative">
                 {videoErrors[`next-${currentVideoIndex}`] ? (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                     <div className="text-center text-gray-500">
                       <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                       </svg>
                       <p className="text-sm">Video unavailable</p>
                     </div>
                   </div>
                 ) : (
                   <video
                     key={`next-${currentVideoIndex}`}
                     className="w-full h-full object-cover"
                     autoPlay
                     loop
                     muted
                     playsInline
                     onError={() => handleVideoError(`next-${currentVideoIndex}`)}
                   >
                     <source src={nextVideoData.video} type="video/mp4" />
                   </video>
                 )}
                 <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                   {nextVideoData.name} - {nextVideoData.location}
                 </div>
               </div>
             </div>

             {/* Mobile Layout - Single Video */}
             <div className="lg:hidden flex justify-center">
               <div className="w-full max-w-sm h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl relative">
                 {videoErrors[`current-${currentVideoIndex}`] ? (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                     <div className="text-center text-gray-500">
                       <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                       </svg>
                       <p className="text-lg font-medium">Video unavailable</p>
                       <p className="text-sm">Please check your connection</p>
                     </div>
                   </div>
                 ) : (
                   <video
                     key={`current-${currentVideoIndex}`}
                     className="w-full h-full object-cover"
                     autoPlay
                     loop
                     muted={isVideoMuted}
                     playsInline
                     onError={() => handleVideoError(`current-${currentVideoIndex}`)}
                   >
                     <source src={currentVideoData.video} type="video/mp4" />
                   </video>
                 )}
                 <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                   <h4 className="font-semibold text-sm sm:text-base">{currentVideoData.name} - {currentVideoData.location}</h4>
                   <p className="text-xs sm:text-sm text-gray-200">{currentVideoData.description}</p>
                 </div>
                 
                 {/* Play/Pause Button - Mobile */}
                 <div className="absolute top-3 right-3">
                   <button className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
                     <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z"/>
                     </svg>
                   </button>
                 </div>

                 {/* Mute/Unmute Button - Mobile */}
                 <div className="absolute top-3 left-3">
                   <button 
                     onClick={toggleMute}
                     className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                   >
                     {isVideoMuted ? (
                       <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                       </svg>
                     ) : (
                       <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                       </svg>
                     )}
                   </button>
                 </div>
               </div>
             </div>

             {/* Navigation Buttons - Desktop */}
             <button 
               onClick={prevVideo}
               className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-orange-500 text-white rounded-full items-center justify-center hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
             </button>

             <button 
               onClick={nextVideo}
               className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-orange-500 text-white rounded-full items-center justify-center hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </button>

             {/* Navigation Buttons - Mobile */}
             <button 
               onClick={prevVideo}
               className="lg:hidden absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
             >
               <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
             </button>

             <button 
               onClick={nextVideo}
               className="lg:hidden absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
             >
               <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </button>
           </div>

           {/* Video Indicators */}
           <div className="flex justify-center mt-8 gap-3">
             {videoReviews.map((_, index) => (
               <div
                 key={index}
                 onClick={() => setCurrentVideoIndex(index)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                   index === currentVideoIndex
                     ? 'bg-orange-500 scale-125'
                     : 'bg-gray-300 hover:bg-orange-300'
                 }`}
               />
             ))}
           </div>

          
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-orange-500">Travelers Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real travelers who trusted us with their dream vacations
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {currentReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-orange-600 font-medium">{review.location}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">⭐</span>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  &ldquo;{review.review}&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                    Verified Traveler
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevReviews}
              className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReviews}
              className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Review counter */}
          <div className="text-center mt-6 text-gray-600 text-sm">
            Showing {currentReviewIndex * reviewsPerPage + 1}-{Math.min((currentReviewIndex + 1) * reviewsPerPage, reviews.length)} of {reviews.length} reviews
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Your Own <span className="text-orange-500">Amazing Story?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers and let us plan your perfect getaway
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Planning Your Trip
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage; 