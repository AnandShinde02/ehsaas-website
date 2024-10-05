import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
  const galleryImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
  ];

  return (
    <GallerySection id="gallery">
      <GalleryHeading>Our Gallery</GalleryHeading>
      <GalleryGrid>
        {galleryImages.map((image, index) => (
          <ImageCard key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </ImageCard>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

// Styled Components

const GallerySection = styled.section`
  padding: 60px 100px;
  background-color: #f9f9f9;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusted min width for larger rectangular cards */
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

const ImageCard = styled.div`
  width: 100%;
  height: 200px; /* Set height for rectangular shape */
  overflow: hidden;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for 3D effect */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the full card while keeping aspect ratio */
    border-radius: 10px; /* Keeps the rounded corners */
  }
`;

export default Gallery;
