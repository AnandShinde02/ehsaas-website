import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../animations/Animation1.json'; // Path to your Lottie animation file for Vision & Mission

const VisionMission = () => {
  return (
    <VisionMissionContainer id="vision-mission">
      {/* Lottie Animation as Background (Flipped Upside Down) */}
      <AnimationBackground>
        <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%', transform: 'rotate(180deg)' }} />
      </AnimationBackground>

      <Content>
        <Heading>Our Vision & Mission</Heading>
        <Description>
          <p>
            At **EHSAAS**, our vision is to create a society where every child, regardless of their physical or intellectual challenges, has the opportunity to lead a meaningful life.
          </p>
          <p>
            Our mission is to provide care, education, and support to underprivileged and intellectually challenged children, helping them realize their full potential and integrate into society as valued members.
          </p>
        </Description>
      </Content>
    </VisionMissionContainer>
  );
};

// Styled Components
const VisionMissionContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 100px;
  background: linear-gradient(135deg, #E3D5F1, #A7C7E7); /* Gradient Background like AboutUs */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Shadow for 3D effect */
  margin: 20px; /* Margin around the section */
  overflow: hidden; /* Ensure the background animation doesn't overflow */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const AnimationBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Ensure it's behind the content */
  opacity: 1; /* Adjust opacity to make the animation subtle */
`;

const Content = styled.div`
  flex: 1;
  position: relative; /* To layer content above the background animation */
  z-index: 1; /* Ensure content appears above the animation */
  padding-right: 20px;
  color: #333;

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

export default VisionMission;
