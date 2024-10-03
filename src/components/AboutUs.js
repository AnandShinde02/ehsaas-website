import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SVGBackground from './SVGBackground'; // Import the SVG background
import Lottie from 'lottie-react';

const AboutUs = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch('/Animation1.json'); // Fetch from public folder
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimationData();
  }, []);

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
        {animationData && <Lottie animationData={animationData} loop={true} style={{ width: '1400px', height: '400px' }} />} {/* Lottie animation */}
      </Content>
      <Image>
        <img src="/logo192.png" alt="Ehsaas about us" />
      </Image>
    </AboutUsContainer>
  );
};

// Styled Components
const AboutUsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 80px;
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


export default AboutUs;
