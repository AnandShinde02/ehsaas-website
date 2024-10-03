import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <img src="/logo.png" alt="Ehsaas Logo" />
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
          <p>near B.P Petrol Pump, Valase, Maharashtra 415519</p>
          <p>Email: info@ehsaas.org</p>
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
        <p>© 2024 EHSAAS. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 100px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  flex: 1;

  img {
    width: 80px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
  }
`;

const LinksSection = styled.div`
  flex: 1;

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
