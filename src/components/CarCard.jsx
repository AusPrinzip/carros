// CarCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea } from '@mui/material';

const CarCard = ({ car, onInterest }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        {/* Add the CardMedia component for the car image */}
        <CardMedia
          component="img"
          height="180" // Adjust the height to fit your long rectangle
          image={car.image}  // URL or path to the car image
          alt={`${car.make} ${car.model}`}
          sx={{ objectFit: 'cover' }} // Ensures the image covers the area
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {car.make} {car.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car.year} - {car.mileage} miles
          </Typography>
          <Typography variant="body1" color="text.primary" mt={2}>
            ${car.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button 
        size="small" 
        color="primary" 
        sx={{ m: 2 }} 
        onClick={() => onInterest(car)}
      >
        I'm Interested
      </Button>
    </Card>
  );
};

export default CarCard;
