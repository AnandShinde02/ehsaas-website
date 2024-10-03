import React from 'react';
import styled from 'styled-components';

const GlassmorphicGallery = () => {
  const galleryImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg'
  ];

  return (
    <GallerySection id="gallery">
      <GalleryHeading>Our Gallery</GalleryHeading>
      <GalleryDescription>
        <p>
          Welcome to our gallery! Here you can explore some wonderful moments
          captured at Ehsaas. Each image tells a story of our intellectually
          challenged children and the love, care, and support they receive in
          our nurturing environment.
        </p>
      </GalleryDescription>
      <GalleryGrid>
        {galleryImages.map((image, index) => (
          <ImageContainer key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </ImageContainer>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

// Styled Components
const GallerySection = styled.section`
  padding: 60px 100px;
  background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent background */
  backdrop-filter: blur(10px); /* Glassmorphism effect */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3); /* Shadow for 3D effect */
  margin: 20px; /* Margin around the section */

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const GalleryHeading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff; /* White text for better contrast */
  font-family: 'Georgia', serif;
`;

const GalleryDescription = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  p {
    font-size: 1.2rem;
    color: #ffffff; /* White text for better contrast */
    max-width: 800px;
    margin: 0 auto; /* Center the text */
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px; /* Space between grid items */

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjust for smaller screens */
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  transition: transform 0.3s; /* Smooth transition for hover effect */

  img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Maintain aspect ratio */
    transition: transform 0.3s; /* Smooth transition for zoom effect */

    &:hover {
      transform: scale(1.05); /* Zoom-in effect on hover */
    }
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3); /* Overlay effect on hover */
    backdrop-filter: blur(5px); /* Additional blur on hover */
    border-radius: 20px; /* Match rounded corners */
    transition: opacity 0.3s; /* Fade effect for overlay */
  }
`;

export default GlassmorphicGallery;
