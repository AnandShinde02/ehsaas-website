import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,  // Change slide every 6 seconds
    arrows: false
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {/* Slide 1 */}
        <Slide>
          <VideoContainer>
            <video src="/video1.mp4" autoPlay loop muted></video>
          </VideoContainer>
          <SlideContent>
            <HeroHeading>Support Special Children</HeroHeading>
            <HeroSubheading>Help them grow and become a part of our community.</HeroSubheading>
            <CTAContainer>
              <CTAButton href="#about">Learn More</CTAButton>
              <DonateButton href="#donate">Donate Now</DonateButton>
            </CTAContainer>
          </SlideContent>
        </Slide>
        
        {/* Slide 2 */}
        <Slide>
          <VideoContainer>
            <video src="/video2.mp4" autoPlay loop muted></video>
          </VideoContainer>
          <SlideContent>
            <HeroHeading>Change Their Future</HeroHeading>
            <HeroSubheading>Your small contribution can make a big difference.</HeroSubheading>
            <CTAContainer>
              <CTAButton href="#about">Learn More</CTAButton>
              <DonateButton href="#donate">Donate Now</DonateButton>
            </CTAContainer>
          </SlideContent>
        </Slide>
        {/* Slide 3 */}
        <Slide>
          <VideoContainer>
            <video src="/video3.mp4" autoPlay loop muted></video>
          </VideoContainer>
          <SlideContent>
            <HeroHeading>Change Their Future</HeroHeading>
            <HeroSubheading>Your small contribution can make a big difference.</HeroSubheading>
            <CTAContainer>
              <CTAButton href="#about">Learn More</CTAButton>
              <DonateButton href="#donate">Donate Now</DonateButton>
            </CTAContainer>
          </SlideContent>
        </Slide>

        {/* Add more slides as needed */}
      </Slider>
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh; /* Adjust height as per your need */
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  video {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFFFFF;
  text-align: center;
  z-index: 1;
  padding: 0 20px;
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
`;

const HeroSubheading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-family: 'Arial', sans-serif;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CTAButton = styled.a`
  text-decoration: none;
  padding: 12px 30px;
  background-color: #F59E4C;  /* Soft Orange */
  color: white;
  border-radius: 5px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;

  &:hover {
    background-color: #E37C32;
  }
`;

const DonateButton = styled(CTAButton)`
  background-color: #F44336;  /* Bright Red for Donate */
  &:hover {
    background-color: #D32F2F;  /* Darker Red on Hover */
  }
`;

export default HeroCarousel;
