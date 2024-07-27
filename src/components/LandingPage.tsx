import React from 'react';
import { Container } from '@mui/material';
// import HeroSection from './HeroSection';
import MainSection from './MainSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import styles from '../styles/LandingPage.module.scss';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      {/* <HeroSection /> */}
      <Container sx={{ my: 4 }}>
        <MainSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </Container>
    </div>
  );
};

export default LandingPage;
