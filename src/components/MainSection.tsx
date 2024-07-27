import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import styles from '../styles/LandingPage.module.scss';

const MainSection: React.FC = () => {
  return (
    <Box className={styles.mainSection}>
      <Typography variant="h4" gutterBottom>
        Welcome to Tech Giants
      </Typography>
      <Typography variant="h6" paragraph>
        Discover the latest in electronics with our top-of-the-line products and unbeatable deals.
      </Typography>
      <Button variant="contained" color="primary" className={styles.button}>
        Shop Now
      </Button>
    </Box>
  );
};

export default MainSection;
