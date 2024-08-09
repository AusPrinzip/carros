import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';

const banners1 = [
  { id: 1, src: 'https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Banner-Toyota-Agosto-2024-1920w.png', alt: 'Banner 1' },
  { id: 2, src: 'https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Banner-Agosto-2024-1920w.png', alt: 'Banner 2' }
  // Add more images as needed
];

const banners2 = [
  { id: 1, src: 'https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Clientes-AutoXperience-12-1920w.jpg', alt: 'Banner 3' },
  { id: 2, src: 'https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Clientes+AutoXperience+01-1920w.jpg', alt: 'Banner 4' }
  // Add more images as needed
];



const Banner = ({type}) => {
  console.log("type", type)
  const [banners, setBanners] = useState(type == 0 ? banners1 : banners2)
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000); // Change banner every 6 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <Container maxWidth={false} style={{ width: '100%' }}>
    <img
      src={banners[currentBanner].src}
      alt={banners[currentBanner].alt}
      style={{
        marginTop: '60px',
        width: type == 0 ? '100%' : '50%',
        height: '30%',
        objectFit: 'cover', // Ensures the image covers the container while maintaining aspect ratio
      }}
    />
    </Container>
  );
};

export default Banner;
