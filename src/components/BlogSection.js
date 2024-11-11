// src/components/BlogSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #f0f4f8, #e4ebf3);
  color: #333;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #0a223d;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #0056b3, #0073e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BlogPostsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const BlogCard = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff, #f9fafb);
  width: 320px;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #333;
  transform-origin: center;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const BlogImage = styled.div`
  background: url('https://naseh.qa/assets/service-laptop.DCYRR150.svg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 180px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  transition: transform 0.4s ease;

  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

const BlogTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0a223d;
  margin-bottom: 0.7rem;
`;

const BlogDate = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.2rem;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.5;
  flex-grow: 1;
`;

const ReadMoreButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff8c42, #ff2d55);
  color: #ffffff;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.2rem;
  align-self: flex-start;
  box-shadow: 0 6px 12px rgba(255, 45, 85, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ff6b3b, #ff2d55);
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(255, 45, 85, 0.4);
  }
`;

const BlogSection = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Naseh Legal Blog</Title>
      <BlogPostsContainer>
        <BlogCard whileHover={{ scale: 1.02 }}>
          <BlogImage />
          <BlogTitle>Avoiding Trouble: Common Legal Mistakes</BlogTitle>
          <BlogDate>June 23, 2024 | Legal Consultations</BlogDate>
          <BlogDescription>
            In Qatar, as in any country, it’s essential to follow local laws and regulations to avoid legal troubles.
          </BlogDescription>
          <ReadMoreButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Read More
          </ReadMoreButton>
        </BlogCard>

        <BlogCard whileHover={{ scale: 1.02 }}>
          <BlogImage />
          <BlogTitle>How to Choose the Right Lawyer</BlogTitle>
          <BlogDate>May 12, 2024 | Legal Tips</BlogDate>
          <BlogDescription>
            Choosing the right lawyer is crucial for navigating legal issues effectively. Here’s what to consider.
          </BlogDescription>
          <ReadMoreButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Read More
          </ReadMoreButton>
        </BlogCard>

        <BlogCard whileHover={{ scale: 1.02 }}>
          <BlogImage />
          <BlogTitle>Understanding Legal Rights in Qatar</BlogTitle>
          <BlogDate>April 8, 2024 | Legal Awareness</BlogDate>
          <BlogDescription>
            Learn about the legal rights available to Qatar residents, helping you navigate life confidently.
          </BlogDescription>
          <ReadMoreButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Read More
          </ReadMoreButton>
        </BlogCard>

        {/* Additional BlogCard components as needed */}
      </BlogPostsContainer>
    </SectionContainer>
  );
};

export default BlogSection;
