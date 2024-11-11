// src/components/LawyersPagesSection.js
import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Container } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample lawyer data
const lawyersData = [
  { name: 'Dawi Law Firm', description: 'Specialized Legal Consultations in Corporate Law', language: 'English', experience: '10-15 years' },
  { name: 'Saleh For Law', description: 'Legal Services for Individuals & Companies', language: 'Arabic & English', experience: '10-15 years' },
  { name: 'Al Ansari Law Firm', description: 'Expert in Commercial Law', language: 'Arabic & English', experience: '10-15 years' },
  { name: 'Dunne Law PLLC', description: 'Dedicated Legal Support', language: 'Arabic & English', experience: '10-15 years' },
  { name: 'Dunne Law I', description: 'Professional Legal Solutions', language: 'Arabic & English', experience: '10-15 years' },
];

// Settings for the carousel
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const LawyersPagesSection = () => {
  return (
    <Container sx={{ paddingY: '3rem', backgroundColor: '#f8f9fa' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Specialized Lawyers Around the Clock
      </Typography>
      <Slider {...carouselSettings}>
        {lawyersData.map((lawyer, index) => (
          <Box key={index} sx={{ paddingX: '1rem' }}>
            <Card
              sx={{
                maxWidth: 300,
                margin: '0 auto',
                borderRadius: '15px',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', padding: '2rem' }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#e0e0e0',
                    marginBottom: '1rem',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  ⚖️
                </Avatar>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  {lawyer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" sx={{ marginBottom: '1rem' }}>
                  {lawyer.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  <strong>Language:</strong> {lawyer.language}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  <strong>Experience:</strong> {lawyer.experience}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default LawyersPagesSection;
