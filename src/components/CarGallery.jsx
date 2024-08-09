// CarGallery.js
import React from 'react';
import { Grid } from '@mui/material';
import CarCard from './CarCard';

const CarGallery = ({ cars, onInterest }) => {
  return (
    <Grid container spacing={2}>
      {cars.map((car) => (
        <Grid item xs={12} sm={6} md={4} key={car.id}>
          <CarCard car={car} onInterest={onInterest} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarGallery;
