import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import styles from '../styles/LandingPage.module.scss';

const FeaturesSection: React.FC = () => {
  return (
    <Box className={styles.featuresSection}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Our Features
      </Typography>
      <Grid container spacing={4}>
        {['Quality Products', 'Best Prices', 'Customer Support', 'Fast Shipping', 'Secure Payment'].map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} className={styles.featurePaper}>
              <Typography variant="h6" gutterBottom>
                {feature}
              </Typography>
              <Typography variant="body2">
                Brief description about {feature.toLowerCase()}.
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
