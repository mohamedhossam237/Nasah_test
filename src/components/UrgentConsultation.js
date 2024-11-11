// src/components/UrgentConsultation.js
import React from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';

const UrgentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #0e1a3a, #182f56);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  width: 85%; /* Reduced width for a more compact look */
  max-width: 800px;
  margin: 1.5rem auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

const UrgentTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #ffffff;
`;

const UrgentIcon = styled(FaPhone)`
  font-size: 1.8rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.6rem;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const UrgentText = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  line-height: 1.1;
`;

const UrgentSmallText = styled.small`
  font-size: 0.85rem;
  color: #e0e0e0;
  opacity: 0.9;
  margin-top: 0.2rem;
`;

const ConsultNowButton = styled.button`
  background-color: #e63946;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(230, 57, 70, 0.4);
  transition: all 0.3s ease;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background: linear-gradient(135deg, #c62828, #ff7070);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 18px rgba(230, 57, 70, 0.5);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 4px 10px rgba(230, 57, 70, 0.5);
  }
`;

const ConsultButtonText = styled.span`
  font-size: 0.95rem;
`;

const UrgentConsultation = () => {
  return (
    <UrgentContainer>
      <UrgentTextContainer>
        <UrgentIcon />
        <TextContainer>
          <UrgentText>Urgent consultation now!</UrgentText>
          <UrgentSmallText>Book it in 5 minutes, a lawyer will respond to you in a few minutes</UrgentSmallText>
        </TextContainer>
      </UrgentTextContainer>
      <ConsultNowButton>
        <ConsultButtonText>Consult Now</ConsultButtonText>
      </ConsultNowButton>
    </UrgentContainer>
  );
};

export default UrgentConsultation;
