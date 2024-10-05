import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../animations/Animation1.json'; // Path to your Lottie animation file for Vision & Mission

const VisionMission = () => {
  return (
    <VisionMissionContainer id="vision-mission">
      {/* Lottie Animation as Background */}
      <AnimationBackground>
        <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%', transform: 'rotate(180deg)' }} />
      </AnimationBackground>

      <CardsContainer>
        {/* Vision Card */}
        <Card>
          <CardHeading>Vision</CardHeading>
          <CardContent>
            <p>
              At EHSAAS, our vision is to create a society where every child, regardless of their physical or intellectual challenges, has the opportunity to lead a meaningful life.
            </p>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card>
          <CardHeading>Mission</CardHeading>
          <CardContent>
            <p>
              Our mission is to provide care, education, and support to underprivileged and intellectually challenged children, helping them realize their full potential and integrate into society as valued members.
            </p>
          </CardContent>
        </Card>
      </CardsContainer>
    </VisionMissionContainer>
  );
};

// Styled Components
const VisionMissionContainer = styled.section`
  position: relative;
  padding: 60px 100px;
  background: linear-gradient(135deg, #E3D5F1, #A7C7E7); /* Gradient Background like AboutUs */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Shadow for 3D effect */
  margin: 20px; /* Margin around the section */
  overflow: hidden; /* Ensure the background animation doesn't overflow */

  @media (max-width: 768px) {
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative; /* To layer content above the background animation */
  z-index: 1; /* Ensure content appears above the animation */
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Card = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent for glass effect */
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px); /* Blurred background for glassmorphism effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for 3D effect */
  color: #333;
`;

const CardHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
  font-family: 'Georgia', serif;
`;

const CardContent = styled.div`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;

  p {
    margin-bottom: 20px;
  }
`;

export default VisionMission;
