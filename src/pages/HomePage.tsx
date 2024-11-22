import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Admissions from '../components/Admissions';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Admissions />
    </>
  );
}