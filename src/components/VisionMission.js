import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../animations/Animation1.json';

const VisionMission = () => {
  return (
    <VisionMissionContainer id="vision">
      <AnimationBackground>
        <Lottie 
          animationData={animationData} 
          loop={true} 
          style={{ 
            width: '100%', 
            height: '100%', 
            transform: 'rotate(180deg)' 
          }} 
        />
      </AnimationBackground>

      <ContentWrapper>
        <SectionTitle>Vision & Mission</SectionTitle>
        
        <CardsContainer>
          <Card>
            <CardHeading>Vision</CardHeading>
            <CardContent>
              <p>
                At EHSAAS, our vision is to create a society where every child, 
                regardless of their physical or intellectual challenges, has the 
                opportunity to lead a meaningful life.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeading>Mission</CardHeading>
            <CardContent>
              <p>
                Our mission is to provide care, education, and support to 
                underprivileged and intellectually challenged children, helping 
                them realize their full potential and integrate into society 
                as valued members.
              </p>
            </CardContent>
          </Card>
        </CardsContainer>
      </ContentWrapper>
    </VisionMissionContainer>
  );
};

const VisionMissionContainer = styled.section`
  position: relative;
  padding: clamp(30px, 5vw, 60px) clamp(20px, 5vw, 100px);
  background: linear-gradient(135deg, #E3D5F1, #A7C7E7);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin: clamp(10px, 2vw, 20px);
  overflow: hidden;
  min-height: 60vh;
`;

const AnimationBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  z-index: 0;
  opacity: 5;

  > div {
    width: 100% !important;
    height: 100% !important;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #333;
  text-align: center;
  margin-bottom: clamp(20px, 4vw, 40px);
  font-family: 'Georgia', serif;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(20px, 4vw, 40px);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: clamp(20px, 3vw, 30px);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  }

  /* Fallback for browsers that don't support backdrop-filter */
  @supports not (backdrop-filter: blur(10px)) {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const CardHeading = styled.h3`
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  margin-bottom: clamp(10px, 2vw, 15px);
  color: #333;
  font-family: 'Georgia', serif;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #F59E4C;
    margin-top: 10px;
    border-radius: 2px;
  }
`;

const CardContent = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #555;
  line-height: 1.8;

  p {
    margin-bottom: clamp(15px, 3vw, 20px);
  }
`;

export default VisionMission;