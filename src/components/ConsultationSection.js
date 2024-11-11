// src/components/ConsultationSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaLanguage, FaUserTie } from 'react-icons/fa';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  color: #ffffff;
  position: relative;
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: -1.5rem;
  z-index: 2;
  position: relative;

  h2 {
    font-size: 2.4rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #dddddd;
  }
`;

const ConsultationBox = styled(motion.div)`
  background: #ffffff;
  padding: 2.5rem 1.8rem;
  max-width: 1100px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin-top: 2rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
  background: #f9fafb;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 150px;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e6ea;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.15);
  }

  select {
    border: none;
    background: none;
    color: #333;
    font-size: 0.95rem;
    margin-left: 0.5rem;
    outline: none;
    width: 100%;
  }
`;

const FilterIcon = styled.div`
  color: #0056b3;
  font-size: 1.3rem;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
`;

const BookButton = styled(motion.button)`
  background-color: #0056b3;
  color: #ffffff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 86, 179, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background-color: #004494;
    box-shadow: 0 8px 20px rgba(0, 86, 179, 0.5);
    transform: translateY(-3px);
  }
`;

const ConsultationSection = () => {
  return (
    <SectionContainer>
      <HeaderContainer>
        <h2>Choose & Filter & Schedule</h2>
        <p>Easy access to your legal advice. Choose, sort, and clearly define the options that best fit your schedule.</p>
      </HeaderContainer>
      <ConsultationBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiltersContainer>
          <FilterItem>
            <FilterIcon><FaCalendarAlt /></FilterIcon>
            <select><option>Select date</option></select>
          </FilterItem>
          <Divider />
          <FilterItem>
            <FilterIcon><FaClock /></FilterIcon>
            <select><option>Select time</option></select>
          </FilterItem>
          <Divider />
          <FilterItem>
            <FilterIcon><FaLanguage /></FilterIcon>
            <select><option>Select language</option></select>
          </FilterItem>
          <Divider />
          <FilterItem>
            <FilterIcon><FaUserTie /></FilterIcon>
            <select><option>Select experience</option></select>
          </FilterItem>
        </FiltersContainer>
        <BookButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Book a consultation
        </BookButton>
      </ConsultationBox>
    </SectionContainer>
  );
};

export default ConsultationSection;
