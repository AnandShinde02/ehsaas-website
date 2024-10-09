import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    beforeChange: (current, next) => {
      //Pause all videos except the next one
      const videos = document.querySelectorAll('.hero-video');
      videos.forEach((video, index) => {
        if (index === next) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  };

  // Array of slide data
  const slides = [
    {
      video: "/video1.mp4",
      heading: "Support Special Children",
      subheading: "Help them grow and become a part of our community.",
    },
    {
      video: "/video2.mp4",
      heading: "Change Their Future",
      subheading: "Your small contribution can make a big difference.",
    },
    {
      video: "/video3.mp4",
      heading: "Join Our Mission",
      subheading: "Together we can create a better world for these children.",
    }
  ];

  // Play/Pause toggle handler
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const videos = document.querySelectorAll('.hero-video');
    videos.forEach(video => {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    });
  };

  useEffect(() => {
    // Add intersection observer for video performance
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (!entry.isIntersecting) {
          video.pause();
        } else if (isPlaying) {
          video.play();
        }
      });
    }, options);

    const videos = document.querySelectorAll('.hero-video');
    videos.forEach(video => observer.observe(video));

    // Cleanup
    return () => {
      videos.forEach(video => observer.unobserve(video));
    };
  }, [isPlaying]);

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <VideoOverlay />
            <VideoContainer>
              <video
                className="hero-video"
                src={slide.video}
                autoPlay={index === 0}
                loop
                muted
                playsInline
                loading="lazy"
              />
            </VideoContainer>
            <SlideContent>
              <HeroHeading>{slide.heading}</HeroHeading>
              <HeroSubheading>{slide.subheading}</HeroSubheading>
              <CTAContainer>
                <CTAButton href="#about">Learn More</CTAButton>
                <DonateButton href="#donate">Donate Now</DonateButton>
              </CTAContainer>
            </SlideContent>
          </Slide>
        ))}
      </StyledSlider>

      {/* Carousel Controls */}
      <CarouselControls>
        <PlayPauseButton onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </PlayPauseButton>
      </CarouselControls>
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.section`
  position: relative;
  width: 100%;
  height: clamp(400px, 90vh, 800px);
  overflow: hidden;
  background-color: #000; // Fallback color
`;

const StyledSlider = styled(Slider)`
  height: 100%;

  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }

  .slick-dots {
    bottom: 25px;
    z-index: 10;

    li button:before {
      color: white;
      opacity: 0.5;
      font-size: 8px;
    }

    li.slick-active button:before {
      color: #F59E4C;
      opacity: 1;
    }
  }
`;

const Slide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const VideoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6)
  );
  z-index: 1;
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFFFFF;
  text-align: center;
  z-index: 2;
  width: 90%;
  max-width: 800px;
  padding: clamp(10px, 3vw, 20px);
`;

const HeroHeading = styled.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: clamp(10px, 3vw, 20px);
  font-family: 'Georgia', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
  }
`;

const HeroSubheading = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: clamp(20px, 4vw, 30px);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  }
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(10px, 2vw, 20px);
  flex-wrap: wrap;
`;

const CTAButton = styled.a`
  text-decoration: none;
  padding: clamp(10px, 2vw, 12px) clamp(20px, 4vw, 30px);
  background: linear-gradient(90deg, #F59E4C, #E37C32);
  color: white;
  border-radius: 25px;
  font-size: clamp(0.9rem, 2.5vw, 1.125rem);
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const DonateButton = styled(CTAButton)`
  background: linear-gradient(90deg, #F44336, #D32F2F);
`;

const CarouselControls = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
`;

const PlayPauseButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export default HeroCarousel;