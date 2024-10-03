import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
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
  background: linear-gradient(135deg, #A7C7E7, #E3D5F1);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin: 20px;
  position: relative;
  overflow: hidden; /* Ensure animations don't overflow */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1); /* Slightly transparent overlay */
    backdrop-filter: blur(10px);
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }

  /* Animated Background */
  &:hover {
    animation: pulse 4s infinite alternate; /* Animation on hover */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      background: linear-gradient(135deg, #A7C7E7, #E3D5F1);
    }
    100% {
      transform: scale(1.02);
      background: linear-gradient(135deg, #E3D5F1, #A7C7E7);
    }
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Georgia', serif;
  position: relative;
  z-index: 2; /* Ensure text is above the background */
`;

const Description = styled.div`
  font-size: 1.2rem;
  color: #555;
  font-family: 'Arial', sans-serif;
  line-height: 1.8;
  position: relative;
  z-index: 2;

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
