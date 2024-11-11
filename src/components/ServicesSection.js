// src/components/ServicesSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  padding: 4rem 1.5rem;
  background-color: #f5f7fa;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 2rem;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ServiceCard = styled(motion.div)`
  background: #ffffff;
  color: #333333;
  padding: 2rem;
  width: 230px;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #0056b3;
  margin-bottom: 1rem;
`;

const ServiceText = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333333;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666666;
  margin: 0;
`;

const ServicesSection = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>A Wide Range of Legal Services</SectionTitle>
      <ServicesContainer>
        <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ServiceIcon>📅</ServiceIcon>
          <ServiceText>Scheduled Consultation</ServiceText>
          <ServiceDescription>Book a consultation at a time that suits your schedule.</ServiceDescription>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ServiceIcon>⚡</ServiceIcon>
          <ServiceText>Urgent Consultation</ServiceText>
          <ServiceDescription>Get immediate legal assistance for urgent matters.</ServiceDescription>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ServiceIcon>🏢</ServiceIcon>
          <ServiceText>Corporate Portal</ServiceText>
          <ServiceDescription>Access legal services tailored for businesses and corporations.</ServiceDescription>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ServiceIcon>✍️</ServiceIcon>
          <ServiceText>Written Consultation</ServiceText>
          <ServiceDescription>Receive detailed written legal advice on complex issues.</ServiceDescription>
        </ServiceCard>
        {/* Add more ServiceCards as needed */}
      </ServicesContainer>
    </SectionContainer>
  );
};

export default ServicesSection;
