import React from 'react';
import styled from 'styled-components';
import SVGBackground from './SVGBackground'; // Import the SVG background
import Lottie from 'lottie-react';
import animationData from './path_to_your_lottie_animation.json'; // Path to your Lottie animation file

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
      <SVGBackground /> {/* Add the animated SVG background */}
      <Content>
        <Heading>About Us</Heading>
        <Description>
          <p>
            EHSAAS is a Non-Governmental Organization (NGO) based on the philosophy of serving society.
            We believe that "Every child comes to earth with innumerable possibilities" and they are the
            hopes and founders of tomorrow. Ehsaas is dedicated to uplifting underprivileged and intellectually
            challenged children, providing them with the care and education they deserve.
          </p>
          <p>
            Founded in 2008, our mission is to create a support system for these children, helping them develop
            their skills and become integral members of society. Through continuous education and nurturing, we 
            aim to provide them with a future full of hope and opportunity.
          </p>
        </Description>
        <Lottie animationData={animationData} loop={true} style={{ width: '200px', height: '200px' }} /> {/* Lottie animation */}
      </Content>
      <Image>
        <img src="/about-image.jpg" alt="Ehsaas about us" />
      </Image>
    </AboutUsContainer>
  );
};

// Styled Components
const AboutUsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 100px;
  position: relative;
  margin: 20px;
  overflow: hidden; /* Ensure animations don't overflow */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 20px;
  position: relative; /* For layering with SVG */

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Georgia', serif;
`;

const Description = styled.div`
  font-size: 1.2rem;
  color: #555;
  font-family: 'Arial', sans-serif;
  line-height: 1.8;

  p {
    margin-bottom: 20px;
  }
`;

const Image = styled.div`
  flex: 1;

  img {
    width: 200px; /* Fixed width */
    height: 200px; /* Fixed height to maintain the circle */
    border-radius: 50%; /* Round image */
    object-fit: cover; /* Cover to maintain aspect ratio */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for 3D effect */
  }
`;

export default AboutUs;
