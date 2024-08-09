// src/components/Footer.jsx
import React from 'react';
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ width: '100%', backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are committed to providing the best cars at unbeatable prices. Our dedicated team ensures that each car is thoroughly inspected and certified.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:info@carmarket.com">info@carmarket.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: <Link href="tel:+123456789">+123 456 789</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="primary" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="primary" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="primary" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton color="primary" href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Car Market. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
