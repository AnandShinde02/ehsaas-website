import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import GlassmorphicGallery from './components/GlassmorphicGallery'; // Importing the new gallery
import VisionMission from './components/VisionMission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <GlassmorphicGallery />  {/* Use the new Glassmorphic Gallery here */}
      <VisionMission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
