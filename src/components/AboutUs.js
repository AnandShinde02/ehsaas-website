import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
// Make sure your animation JSON file path is correct
import animationData from '../animations/Animation1.json';

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
      <AnimationBackground>
        <Lottie animationData={animationData} loop={true} />
      </AnimationBackground>

      <Content>
        <Heading>About Us</Heading>
        <Description>
          <p>
            EHSAAS is a Non-Governmental Organization (NGO) based on the philosophy of serving society.
            We believe that "Every child comes to earth with innumerable possibilities" and they are the
            hopes and founders of tomorrow.
          </p>
          <p>
            Founded in 2008, our mission is to create a support system for these children, helping them develop
            their skills and become integral members of society.
          </p>
        </Description>
      </Content>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(10px, 5vw, 40px);
  background: linear-gradient(135deg, #A7C7E7, #E3D5F1);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin: clamp(5px, 2vw, 20px);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AnimationBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 5;

  > div {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Content = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
  padding: clamp(10px, 3vw, 20px);
  color: #333;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: clamp(15px, 3vw, 20px);
  color: #333;
  font-family: 'Georgia', serif;
`;

const Description = styled.div`
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #555;
  font-family: 'Arial', sans-serif;
  line-height: 1.8;

  p {
    margin-bottom: clamp(15px, 3vw, 20px);
  }
`;

export default AboutUs;