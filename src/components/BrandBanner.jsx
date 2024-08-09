import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const logos = [
  'https://irp-cdn.multiscreensite.com/0d7fa43a/dms3rep/multi/Hyundai+AutoXperience+Logo.png', 
  'https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Isuzu+AutoXperience+Logo-462h.png', 
  'https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Chevrolet+AutoXperience+Logo-462h.png',
  'https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Toyota+AutoXperience-462h.png'
];

// Custom styled component for the logo
const Logo = styled('img')(({ theme }) => ({
  height: 200, // Adjust as needed
  margin: theme.spacing(1),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)', // Zoom effect on hover
  },
}));

const BrandBanner = () => (
  <Grid container spacing={2} justifyContent="center" alignItems="center">
    {logos.map((logo, index) => (
      <Grid item key={index}>
        <Logo src={logo} alt={`Brand ${index}`} />
      </Grid>
    ))}
  </Grid>
);

export default BrandBanner;