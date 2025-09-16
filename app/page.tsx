import React from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load non-critical components for better performance
const TopDestinations = dynamic(() => import('./components/TopDestinations'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const BaliExploration = dynamic(() => import('./components/BaliExploration'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const MysticCoastline = dynamic(() => import('./components/MysticCoastline'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const PopularPackages = dynamic(() => import('./components/PopularPackages'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const TravelVibes = dynamic(() => import('./components/TravelVibes'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const DubaiExploration = dynamic(() => import('./components/DubaiExploration'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const WhyChooseTripsee = dynamic(() => import('./components/WhyChooseTripsee'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const PlanYourTrip = dynamic(() => import('./components/PlanYourTrip'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const Gallery = dynamic(() => import('./components/Gallery'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const TravelPostcard = dynamic(() => import('./components/TravelPostcard'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

const TheyLoveTripsee = dynamic(() => import('./components/TheyLoveTripsee'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <Header />
      <Hero />
      <TopDestinations />
      <BaliExploration />
      <MysticCoastline />
      <PopularPackages />
      <TravelPostcard />
      <TravelVibes />
      <DubaiExploration />
      <WhyChooseTripsee />
      <PlanYourTrip />
      <Gallery />
      <TheyLoveTripsee />
      <Footer />
    </div>
  );
}
