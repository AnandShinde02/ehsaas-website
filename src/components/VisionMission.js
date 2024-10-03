import React from 'react';
import styled from 'styled-components';

const VisionMission = () => {
  return (
    <VisionMissionSection id="vision">
      <Heading>Our Vision & Mission</Heading>
      <ContentContainer>
        <ContentBlock>
          <SubHeading>Our Vision</SubHeading>
          <p>
            At EHSAAS, our vision is to build a society where intellectually challenged children
            are empowered to live independently, fully integrated into their communities. We aim
            to provide these children with the tools and resources they need to grow and develop,
            enabling them to reach their full potential.
          </p>
        </ContentBlock>

        <ContentBlock>
          <SubHeading>Our Mission</SubHeading>
          <p>
            Our mission is to create a nurturing environment for intellectually challenged children
            by offering free residential care, specialized education, and vocational training. By
            equipping them with essential life skills and fostering their natural talents, we help
            them lead fulfilling, independent lives while being active participants in society.
          </p>
        </ContentBlock>
      </ContentContainer>
    </VisionMissionSection>
  );
};

// Styled Components
const VisionMissionSection = styled.section`
  padding: 60px 100px;
  background: linear-gradient(135deg, #A7C7E7, #E3D5F1); /* Gradient Background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Shadow for 3D effect */
  margin: 20px; /* Margin around the section */
  text-align: center; /* Center text for a modern look */

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
  font-family: 'Georgia', serif;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContentBlock = styled.div`
  flex: 1;
  font-family: 'Arial', sans-serif;
  color: #555;
  line-height: 1.8;
  background: #fff; /* White background for content blocks */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding for inner content */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */

  p {
    font-size: 1.2rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
`;

export default VisionMission;
