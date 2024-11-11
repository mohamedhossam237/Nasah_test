// src/App.js
import React from 'react';
import Header from './components/Header';
import UrgentConsultation from './components/UrgentConsultation';
import ConsultationSection from './components/ConsultationSection';
import ServicesSection from './components/ServicesSection';
import LawyersSection from './components/LawyersSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import WhyChoose from './components/WhyChoose';
import styled from 'styled-components';
import LawyersPagesSection from './components/LawyersPagesSection';


const BackgroundContainer = styled.section`
  background: url('https://t3.ftcdn.net/jpg/09/10/21/08/360_F_910210812_hvVVCFKGRNiVebkY61wV6JqhuBDnzS1I.jpg') no-repeat center center;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 47, 92, 0.85);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

function App() {
  return (
    <div className="App">
      <Header />
      <BackgroundContainer>
        <UrgentConsultation />
        <ConsultationSection />
      </BackgroundContainer>
      <ServicesSection />
      <LawyersSection />
      <LawyersPagesSection />
      <BlogSection />
      <FrequentlyAskedQuestions />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default App;
