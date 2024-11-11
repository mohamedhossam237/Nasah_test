// src/components/FrequentlyAskedQuestions.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQContainer = styled.section`
  padding: 3rem 2rem;
  background-color: #f8f9fa;
  text-align: center;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItemContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const FAQItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #f0f0f5;
  }
`;

const QuestionText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const AnswerText = styled.div`
  padding: 1rem 1.5rem;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  background-color: #f8f9fa;
`;

const ChevronIcon = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <FAQItemContainer>
      <FAQItemHeader onClick={toggleOpen}>
        <QuestionText>{question}</QuestionText>
        <ChevronIcon>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</ChevronIcon>
      </FAQItemHeader>
      {isOpen && <AnswerText>{answer}</AnswerText>}
    </FAQItemContainer>
  );
};

const FrequentlyAskedQuestions = () => {
  const faqData = [
    {
      question: "What services does it offer?",
      answer: "We offer a wide range of legal services, including consultations, case tracking, and more.",
    },
    {
      question: "Is there a fee to use?",
      answer: "Yes, there is a nominal fee for accessing certain premium features and consultations.",
    },
    {
      question: "Can I track the progress of my legal case?",
      answer: "Yes, our platform provides real-time updates on your case status and progress.",
    },
    {
      question: "What types of legal issues can I get help with?",
      answer: "Our services cover a broad spectrum, including corporate law, family law, criminal law, and more.",
    },
    {
      question: "How can I find a lawyer?",
      answer: "You can browse our directory of certified lawyers and filter based on your needs.",
    },
  ];

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <FAQList>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FrequentlyAskedQuestions;
