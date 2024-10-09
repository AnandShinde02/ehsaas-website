// Footer.js

import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <img src="/WhatsApp Image 2024-10-01 at 15.54.22_8e0fc06e.jpg" alt="Ehsaas Logo" />
          <p>EHSAAS - Empowering Intellectually Challenged Children</p>
        </LogoSection>
        <LinksSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#vision">Vision & Mission</FooterLink>
            <FooterLink href="#gallery">Gallery</FooterLink>
            <FooterLink href="#donate">Donate</FooterLink>
          </FooterLinks>
        </LinksSection>
        <ContactSection>
          <h3>Contact Us</h3>
          <p>Near B.P Petrol Pump, Valase, Maharashtra 415519</p>
          <p>Email: <a href="mailto:info@ehsaas.org" style={{ color: 'white' }}>info@ehsaas.org</a></p>
          <p>Phone: +91 1234567890</p>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialIcons>
        </ContactSection>
      </FooterContent>
      <FooterBottom>
        <p>Made With ❤️ By Badbunny and © 2024 EHSAAS. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 100px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Shadow for 3D effect */

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start; /* Align items to the top */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  min-width: 220px; /* Minimum width for smaller screens */

  img {
    width: 300px;
    margin-bottom: 10px;
    border-radius: 10px; /* Rounded corners for logo */
  }

  p {
    font-size: 1.1rem;
  }
`;

const LinksSection = styled.div`
  flex: 1;
  min-width: 220px; /* Minimum width for smaller screens */

  h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #f59e4c; /* Soft Orange */
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.1rem;

  &:hover {
    color: #f59e4c; /* Soft Orange on hover */
  }
`;

const ContactSection = styled.div`
  flex: 1;
  min-width: 220px; /* Minimum width for smaller screens */

  h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #f59e4c;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;

const SocialIcons = styled.div`
  margin-top: 15px;

  a {
    color: white;
    font-size: 1.5rem;
    margin-right: 15px;

    &:hover {
      color: #f59e4c;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 20px;

  p {
    font-size: 1rem;
    color: #bbb;
  }
`;

export default Footer;
