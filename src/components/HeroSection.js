import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <Overlay>
        <HeroContent>
          <HeroHeading>EHSAAS - A Shelter of Hope</HeroHeading>
          <HeroSubheading>
            Helping intellectually challenged children realize their dreams.
          </HeroSubheading>
          <CTAContainer>
            <CTAButton href="#about">Learn More</CTAButton>
            <DonateButton href="#donate">Donate Now</DonateButton>
          </CTAContainer>
        </HeroContent>
      </Overlay>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  background: url('/hero-image.jpg') center center/cover no-repeat;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);  /* Dark overlay to enhance text visibility */
`;

const HeroContent = styled.div`
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

export default HeroSection;
