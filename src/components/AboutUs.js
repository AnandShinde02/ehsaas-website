import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../animations/animation1.json'; // Path to your Lottie animation file

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

      {/* Lottie Animation */}
      <AnimationWrapper>
        <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
      </AnimationWrapper>

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
  background: linear-gradient(135deg, #A7C7E7, #E3D5F1); /* Gradient Background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Shadow for 3D effect */
  margin: 20px; /* Margin around the section */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
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

const AnimationWrapper = styled.div`
  flex: 1;
  max-width: 300px; /* Set a max width for the animation */
  margin: 0 20px; /* Optional: Add margin around the animation */

  @media (max-width: 768px) {
    margin: 20px 0;
    max-width: 100%; /* Make sure it adjusts on smaller screens */
  }
`;

const Image = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px; /* Rounded corners for image */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for 3D effect */
  }
`;

export default AboutUs;
