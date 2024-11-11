// src/components/LawyersSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const SectionContainer = styled(motion.section)`
  background-color: #0a223d;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
`;

const GraphicContainer = styled.div`
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
`;

const Graphic = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 47, 92, 0.8), rgba(10, 34, 61, 0.7));
  z-index: 1;
  border-radius: 15px;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #f0f6ff;
`;

const Title = styled.h2`
  font-size: 2.7rem;
  font-weight: 800;
  margin: 0;
  color: #ffffff;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #c3d6e2;
  line-height: 1.6;
  max-width: 600px;
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(6px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  }
`;

const CheckIcon = styled(FaCheckCircle)`
  color: #31d095;
  font-size: 1.4rem;
`;

const JoinButton = styled(motion.button)`
  background: linear-gradient(135deg, #d4af37, #f7d774);
  color: #333333;
  border: none;
  padding: 0.9rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 2rem;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
  transition: all 0.4s ease;
  
  &:hover {
    background: linear-gradient(135deg, #c89f35, #e6c36b);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.6);
    transform: translateY(-3px) scale(1.05);
  }
`;

const LawyersSection = () => {
    return (
      <SectionContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContentContainer>
          <GraphicContainer>
            <Overlay />
            <Graphic>
              <img src="https://naseh.qa/assets/service-instant.CON0hbn2.svg" alt="Naseh Logo" />
            </Graphic>
          </GraphicContainer>
          <TextContainer>
            <h4 style={{ color: "#d4af37", fontWeight: "700" }}>Join As A Lawyer</h4>
            <Title>Expand Your Legal Network with Naseh</Title>
            <Subtitle>
              Join Naseh, Qatar's premier legal platform, to connect with clients nationwide.
              Offer consultations, manage your schedule, and grow your practice effortlessly.
            </Subtitle>
            <BenefitsList>
              <BenefitItem
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CheckIcon /> Expand Your Customer Network
              </BenefitItem>
              <BenefitItem
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CheckIcon /> Flexible Consultation Options
              </BenefitItem>
              <BenefitItem
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CheckIcon /> Control Your Schedule
              </BenefitItem>
              <BenefitItem
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CheckIcon /> Secure and Fast Payments
              </BenefitItem>
            </BenefitsList>
            <JoinButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </JoinButton>
          </TextContainer>
        </ContentContainer>
      </SectionContainer>
    );
  };
  
  export default LawyersSection;
  