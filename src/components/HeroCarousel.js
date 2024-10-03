import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
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
      </Slider>
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;  /* To prevent overflow of video */
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);  /* 3D effect with shadow */
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
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);  /* Text shadow for depth */
`;

const HeroSubheading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-family: 'Arial', sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);  /* Text shadow for depth */
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CTAButton = styled.a`
  text-decoration: none;
  padding: 12px 30px;
  background: linear-gradient(90deg, #F59E4C, #E37C32); /* Gradient for button */
  color: white;
  border-radius: 25px; /* Rounded corners */
  font-size: 18px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge button on hover */
  }
`;

const DonateButton = styled(CTAButton)`
  background: linear-gradient(90deg, #F44336, #D32F2F); /* Gradient for donate button */
`;

export default HeroCarousel;
