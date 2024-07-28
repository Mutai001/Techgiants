import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import hero1 from '../assets/images/hero1.jpeg';
import hero2 from '../assets/images/hero2.jpeg';
import hero3 from '../assets/images/hero3.jpeg';

const heroImages = [hero1, hero2, hero3];

// Styled components
const CarouselWrapper = styled('div')(() => ({
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
}));

const CarouselSlide = styled('div')({
  position: 'relative',
  height: '100%',
  width: '100%',
});

const CarouselImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
});

const Title = styled(Typography)(() => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '10px',
}));

const Subtitle = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '20px',
});

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HeroSection: React.FC = () => {

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={true}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <Button
            onClick={onClickHandler}
            title={label}
            variant="contained"
            color="primary"
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
          >
            &#10094;
          </Button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <Button
            onClick={onClickHandler}
            title={label}
            variant="contained"
            color="primary"
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
          >
            &#10095;
          </Button>
        )
      }
    >
      {heroImages.map((image, index) => (
        <CarouselWrapper key={index}>
          <CarouselSlide>
            <CarouselImage
              src={image}
              alt={`Hero Image ${index + 1}`}
            />
            <Overlay>
              <Title variant="h1">
                Tech Giants - Elevate Your Tech Experience
              </Title>
              <Subtitle variant="h5">
                Discover the latest in electronics and computing with Tech Giants. Shop now and experience innovation like never before.
              </Subtitle>
              <CustomButton variant="contained">
                Shop Now
              </CustomButton>
            </Overlay>
          </CarouselSlide>
        </CarouselWrapper>
      ))}
    </Carousel>
  );
};

export default HeroSection;
