// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGlobe } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoCircle = styled.div`
  background: linear-gradient(135deg, #f0f0f0, #d4af37);
  color: #333;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

const LogoText = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  background: linear-gradient(135deg, #d4af37, #002f5c);
  -webkit-background-clip: text;
  color: transparent;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;

    li a {
      text-decoration: none;
      color: #333333;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.3s ease, transform 0.3s ease;

      &:hover {
        color: #d4af37;
        transform: scale(1.05);
        text-shadow: 0px 0px 8px rgba(212, 175, 55, 0.5);
      }
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: ${({ isEnglish }) => (isEnglish ? "#d4af37" : "#ffffff")};
  color: ${({ isEnglish }) => (isEnglish ? "#ffffff" : "#333")};

  &:hover {
    background-color: ${({ isEnglish }) => (isEnglish ? "#b8952e" : "rgba(0, 0, 0, 0.05)")};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.div`
  font-size: 1.3rem;
  color: #333;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #d4af37;
    color: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

// Header Component
const Header = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <LogoContainer>
            <LogoCircle>C</LogoCircle>
            <LogoText>coca</LogoText>
          </LogoContainer>
          <Navigation>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#lawfirm">Law Firm</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Navigation>
          <HeaderActions>
            <Icon as={IoMdPerson} />
            <LanguageSwitcher isEnglish={isEnglish} onClick={toggleLanguage}>
              <FaGlobe style={{ marginRight: '5px' }} />
              {isEnglish ? "EN" : "AR"}
            </LanguageSwitcher>
          </HeaderActions>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
};

export default Header;
