// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiFileText } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: #f4f5f7;
  padding: 4rem 2rem;
  color: #333;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const NewsletterContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsletterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

const NewsletterText = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 400px;
  line-height: 1.5;
`;

const InputContainer = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 25px;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  border: 1px solid #ccc;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: none;
  font-size: 1rem;
  outline: none;
  color: #666;

  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  background-color: #001f3f;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003366;
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: start;
`;

const ContactTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #001f3f;
  font-size: 1rem;
`;

const IconWrapper = styled.div`
  font-size: 1.4rem;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #001f3f;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #d4af37;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

const FooterLogoText = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #d4af37;
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h4 {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }

  a {
    color: #666;
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #333;
    }
  }
`;

const CopyrightText = styled.p`
  font-size: 0.85rem;
  color: #777;
  text-align: center;
  flex: 1;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <NewsletterContainer>
          <NewsletterTitle>Newsletter</NewsletterTitle>
          <NewsletterText>
            Stay up to date with the latest legal developments and practical advice from Qatar's leading lawyers by subscribing to the newsletter.
          </NewsletterText>
          <InputContainer>
            <EmailInput type="email" placeholder="Enter your email" />
            <SubmitButton>Submit</SubmitButton>
          </InputContainer>
        </NewsletterContainer>

        <ContactInfoContainer>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactItem>
            <IconWrapper><FiMail /></IconWrapper>
            <span>Get in touch</span>
          </ContactItem>
          <ContactItem>
            <IconWrapper><FiPhone /></IconWrapper>
            <span>Let's Talk</span>
          </ContactItem>
          <ContactItem>
            <IconWrapper><FiFileText /></IconWrapper>
            <span>CR Number</span>
          </ContactItem>
          <ContactItem>
            <IconWrapper><FiMapPin /></IconWrapper>
            <span>Location</span>
          </ContactItem>
          <SocialLinksContainer>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></SocialLink>
          </SocialLinksContainer>
        </ContactInfoContainer>
      </TopSection>

      <BottomSection>
        <FooterLogoText>coca</FooterLogoText>
        <FooterLinkColumn>
          <h4>About</h4>
          <a href="/">About Us</a>
          <a href="/">Blog</a>
          <a href="/">Lawyers</a>
          <a href="/">Services</a>
          <a href="/">Community</a>
        </FooterLinkColumn>
        <FooterLinkColumn>
          <h4>Support</h4>
          <a href="/">Contact us</a>
          <a href="/">Online Chat</a>
          <a href="/">WhatsApp</a>
        </FooterLinkColumn>
        <FooterLinkColumn>
          <h4>Legal Links</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
          <a href="/">Cookie Policy</a>
        </FooterLinkColumn>
        <CopyrightText>&copy; 2024 Coca. All Rights Reserved.</CopyrightText>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
