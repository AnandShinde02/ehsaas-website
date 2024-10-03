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
          <p>123 Ehsaas Street, Satara, Maharashtra</p>
          <p>Email: info@ehsaas.org</p>
          <p>Phone: +91 1234567890</p>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </SocialIcons>
        </ContactSection>
      </FooterContent>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.7292263980285!2d74.020875074632!3d17.615588296192087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23a847ef4749d%3A0x9654f2ad41797532!2sEhsaas%20Matimand%20Mulanche%20Balgruh!5e0!3m2!1sen!2sin!4v1727956197495!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
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

const MapContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;

  iframe {
    width: 100%;
    height: 100%;
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
