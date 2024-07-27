// import React from 'react';
// import Image from 'next/image';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import styles from '../styles/LandingPage.module.scss';

// // Import local images
// import heroImage1 from '../assets/images/hero1.jpeg';
// import heroImage2 from '../assets/images/hero2.jpeg';
// import heroImage3 from '../assets/images/hero3.jpeg';
// import placeholderImage from '../assets/images/hero1.jpeg'; // Placeholder image

// const heroImages = [heroImage1, heroImage2, heroImage3];

// const HeroSection: React.FC = () => {
//   return (
//     <Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false} className={styles.landingPage}>
//       {heroImages.map((image, index) => (
//         <div key={index}>
//           <Image
//             src={image} // Access the default export for the image
//             alt={`Hero Image ${index + 1}`}
//             layout="responsive"
//             width={1200}
//             height={600}
//             quality={100}
//             placeholder="blur"
//             blurDataURL={placeholderImage} // Correctly handle the placeholder image
//           />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default HeroSection;
