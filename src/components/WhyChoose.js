// src/components/WhyChoose.js
import React from 'react';
import styled from 'styled-components';
import { FiCheckCircle } from 'react-icons/fi';

const WhyChooseContainer = styled.section`
  background: url('https://zippypixels.com/wp-content/uploads/2018/06/Android-app-mockup.jpg') no-repeat center center;
  background-size: cover;
  padding: 4rem 2rem;
  position: relative;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  gap: 0.5rem;
  max-width: 250px;
  font-size: 1rem;
`;

const Icon = styled(FiCheckCircle)`
  color: #ffd700;
  font-size: 1.5rem;
`;

const AppDownloadContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
`;

const AppCard = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const WhyChoose = () => {
  return (
    <WhyChooseContainer>
      <Overlay />
      <Content>
        <Title>Why Choose Us?</Title>
        <Description>
          Naseh application is the ideal solution for your legal consultations in Qatar, as we provide innovative legal services to meet your needs in a flexible and reliable manner.
        </Description>
        <FeatureList>
          {["Expand Your Network", "Flexible Options", "24/7 Support", "Secure Payments"].map((feature, index) => (
            <FeatureItem key={index}>
              <Icon />
              {feature}
            </FeatureItem>
          ))}
        </FeatureList>
        <AppDownloadContainer>
          <AppCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" />
          <AppCard src="https://inkan.media/wp-content/uploads/2022/07/App-Store-Badge.png" alt="App Store" />
        </AppDownloadContainer>
      </Content>
    </WhyChooseContainer>
  );
};

export default WhyChoose;
