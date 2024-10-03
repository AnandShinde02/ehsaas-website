import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo.png" alt="Ehsaas Logo" />
        <h1>EHSAAS</h1>
      </Logo>
      <NavBar>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#vision">Vision & Mission</NavLink>
        <NavLink href="#gallery">Gallery</NavLink>
        <NavLink href="#donate">Donate</NavLink>
      </NavBar>
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  h1 {
    font-family: 'Georgia', serif;
    color: #333;
    font-size: 24px;
  }
`;

const NavBar = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  margin: 0 15px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;

  &:hover {
    color: #007bff;
  }
`;

export default Header;

