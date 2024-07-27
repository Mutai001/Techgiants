import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import styles from '../styles/LandingPage.module.scss';

const ContactSection: React.FC = () => {
  return (
    <Box className={styles.contactSection}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Have any questions or need support? Reach out to us, and we'll be happy to assist you.
      </Typography>
      <Button variant="outlined" color="primary" className={styles.button}>
        Contact Support
      </Button>
    </Box>
  );
};

export default ContactSection;
