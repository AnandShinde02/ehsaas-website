import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
  const galleryImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
    '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery12.jpg',
    '/gallery10.jpg',
    '/gallery11.jpg',
  ];

  return (
    <GallerySection id="gallery">
      <GalleryHeading>Our Gallery</GalleryHeading>
      <GalleryGrid>
        {galleryImages.map((image, index) => (
          <ImageCard key={index}>
            {/* <ImageOverlay>
              <OverlayText>Image {index + 1}</OverlayText>
            </ImageOverlay> */}
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* Fixed height for uniformity */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg); /* Scale and tilt effect on hover */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the full card while maintaining aspect ratio */
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1); /* Zoom effect on hover */
    }
  }
`;

// const ImageOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5); /* Dark overlay */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   opacity: 0; /* Initially hidden */
//   transition: opacity 0.3s ease;

//   ${ImageCard}:hover & {
//     opacity: 1; /* Show overlay on hover */
//   }
// `;

// const OverlayText = styled.span`
//   color: white;
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: center;
//   transition: opacity 0.3s ease; /* Optional for smooth transition */
// `;

export default Gallery;
