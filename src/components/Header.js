import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo.png" alt="Ehsaas Logo" />
        <h1></h1>
      </Logo>

      {/* Hamburger Menu Button */}
      <MenuButton onClick={toggleMenu} isOpen={isMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>

      {/* Navigation Menu */}
      <NavBar isOpen={isMenuOpen}>
        <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
        <NavLink href="#vision" onClick={() => setIsMenuOpen(false)}>Vision & Mission</NavLink>
        <NavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
        <DonateButton href="#donate" onClick={() => setIsMenuOpen(false)}>Donate</DonateButton>
      </NavBar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(10px, 2vw, 15px) clamp(15px, 3vw, 30px);
  background-color: #A7C7E7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  z-index: 1001;

  img {
    width: clamp(120px, 20vw, 160px);
    height: auto;
    aspect-ratio: 8/3;
    margin-right: 10px;
  }

  h1 {
    font-family: 'Georgia', serif;
    color: #333333;
    font-size: clamp(18px, 3vw, 24px);
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 30px;
    height: 3px;
    background: #333333;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    max-width: 300px;
    flex-direction: column;
    padding-top: 80px;
    background-color: #A7C7E7;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
      visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
      transition: opacity 0.3s ease-in-out;
      z-index: -1;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333333;
  margin: 0 clamp(10px, 2vw, 20px);
  font-size: clamp(16px, 2.5vw, 18px);
  font-family: 'Arial', sans-serif;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #F59E4C;
    color: #FFFFFF;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    
    &:hover {
      background-color: #F59E4C;
      border-radius: 0;
    }
  }
`;

const DonateButton = styled.a`
  text-decoration: none;
  background-color: #F59E4C;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: clamp(16px, 2.5vw, 18px);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E37C32;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 80%;
    text-align: center;
  }
`;

export default Header;