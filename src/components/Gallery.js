import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
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
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const GalleryHeading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
  font-family: 'Georgia', serif;
`;

const GalleryGrid = styled.div`
 
