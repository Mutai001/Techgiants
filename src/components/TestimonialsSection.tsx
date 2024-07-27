import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import styles from '../styles/LandingPage.module.scss';

const TestimonialsSection: React.FC = () => {
  return (
    <Box className={styles.testimonialsSection}>
      <Typography variant="h4" gutterBottom textAlign="center">
        What Our Customers Say
      </Typography>
      <Grid container spacing={4}>
        {[{
          name: 'John Doe',
          testimonial: 'Amazing experience! The products are top-notch and delivery was fast.',
        }, {
          name: 'Jane Smith',
          testimonial: 'Great service and fantastic prices. Will definitely shop here again.',
        }].map((testimony, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} className={styles.testimonialPaper}>
              <Typography variant="body1" paragraph className={styles.testimonial}>
                "{testimony.testimonial}"
              </Typography>
              <Typography variant="body2" className={styles.testimonialAuthor}>
                - {testimony.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
