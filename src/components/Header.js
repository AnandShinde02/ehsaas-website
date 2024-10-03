import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo.png" alt="Ehsaas Logo" />
        <h1></h1>
      </Logo>
      <NavBar>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#vision">Vision & Mission</NavLink>
        <NavLink href="#gallery">Gallery</NavLink>
        <DonateButton href="#donate">Donate</DonateButton>
      </NavBar>
    </HeaderContainer>
  );
};

// Styled Components with Color Scheme
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #A7C7E7;  /* Soft Blue Background */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 160px;
    height: 80px;
    margin-right: 10px;
  }

  h1 {
    font-family: 'Georgia', serif;
    color: #333333;  /* Dark Gray for Text */
    font-size: 24px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333333;  /* Dark Gray for Links */
  margin: 0 20px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  padding: 10px;

  &:hover {
    background-color: #F59E4C;  /* Soft Orange background on hover */
    color: #FFFFFF;  /* White text for readability */
    border-radius: 5px;  /* Add a slight border-radius for a softer feel */
  }
`;

const DonateButton = styled.a`
  text-decoration: none;
  background-color: #F59E4C;  /* Soft Orange for Call to Action */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;

  &:hover {
    background-color: #E37C32;  /* Slightly darker orange on hover */
  }
`;

export default Header;
