import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import VisionMission from './components/VisionMission';
import Footer from './components/Footer';  // Importing Footer

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <Gallery />
      <VisionMission />
      <Footer />  {/* Adding Footer Section */}
    </div>
  );
}

export default App;
