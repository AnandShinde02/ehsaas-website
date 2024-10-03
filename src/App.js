import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import VisionMission from './components/VisionMission';  // Importing Vision & Mission

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <Gallery />
      <VisionMission />  {/* Adding Vision & Mission Section */}
      {/* Other components like Footer */}
    </div>
  );
}

export default App;
