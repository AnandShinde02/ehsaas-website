import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';  // Importing the Gallery component

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <AboutUs />
      <Gallery />  {/* Adding the Gallery Section */}
      {/* Other components like Footer */}
    </div>
  );
}

export default App;
