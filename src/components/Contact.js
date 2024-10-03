import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactInfo>
        <h2>Contact Us</h2>
        <p>123 Ehsaas Street, Satara, Maharashtra</p>
        <p>Email: info@ehsaas.org</p>
        <p>Phone: +91 1234567890</p>
      </ContactInfo>
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
    </ContactSection>
  );
};

// Styled Components
const ContactSection = styled.section`
  padding: 60px 100px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 10px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 450px;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default Contact;
