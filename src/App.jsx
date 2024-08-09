// src/App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar'; // Import the Navbar component
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Banner from "./components/Banner";
import { Container, Typography, Button } from '@mui/material';
import CarGallery from './components/CarGallery';
import BrandBanner from './components/BrandBanner';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  const [cars] = useState([
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, mileage: 15000, price: 22000, image: 'https://irp.cdn-website.com/0d7fa43a/dms3rep/multi/Kona-2020-%28frente%29-gris-AutoXperience-80ca7be4.jpg' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, mileage: 20000, price: 20000, image: 'https://irp.cdn-website.com/0d7fa43a/dms3rep/multi/RSQ3-2016-%28frente%29-gris-AutoXperience-cd94a795.jpg' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, mileage: 5000, price: 30000, image: 'https://irp.cdn-website.com/0d7fa43a/dms3rep/multi/Genesis-2016-%28frente%29-negro-AutoXperience-7adeb0a4.jpg' },
    { id: 4, make: 'Toyota', model: 'Camry', year: 2020, mileage: 15000, price: 22000, image: 'https://irp.cdn-website.com/0d7fa43a/dms3rep/multi/Kona-2020-%28frente%29-gris-AutoXperience-80ca7be4.jpg' },
    { id: 5, make: 'Honda', model: 'Civic', year: 2019, mileage: 20000, price: 20000, image: 'https://irp.cdn-website.com/0d7fa43a/dms3rep/multi/RSQ3-2016-%28frente%29-gris-AutoXperience-cd94a795.jpg' },
    { id: 6, make: 'Ford', model: 'Mustang', year: 2021, mileage: 5000, price: 30000, image: 'https://irp.cdn-website.com/0d7fa43a/dms3rep/multi/Genesis-2016-%28frente%29-negro-AutoXperience-7adeb0a4.jpg' },
  ]);

  const handleInterest = () => {
    // Handle user interest
  }

  return (
    <>
      <Navbar />

      <div className="App">
        <Grid container>
          <Grid xs={12}>
            <Banner type={0} />
          </Grid>
          <Grid xs={12}>
            <a>Ver términos y condiciones de las promociones aquí.</a>
            <h1>LOS MEJORES AUTOS USADOS</h1>
          </Grid>
          <Grid xs={12}>
            <Container>
              <Typography variant="h4" gutterBottom>
                Car Deals
              </Typography>
              <CarGallery cars={cars} onInterest={handleInterest} />
            </Container>
          </Grid>
          <Grid xs={12}>
            <Banner type={1} />
          </Grid>
          <Grid xs={12}>
            <BrandBanner />
          </Grid>
          <Grid container xs={12}>
            <Grid xs={10}>
              <h1>PROBADOS Y CERTIFICADOS</h1>
              <h3>Usados de agencia, modelos del 2017 en adelante</h3>
            </Grid>
            <Grid xs={2}>
              <img src="https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/SIMBOLO-193w.png" alt="Symbol" />
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={8}>
              <img src="https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Icono-Calidad-404w.png" alt="Quality" />
            </Grid>
            <Grid xs={4}>
              <h1>CALIDAD Y RESPALDO</h1>
              <p>Todos nuestros autos se someten a un proceso de revisión, acondicionamiento y prueba en carretera. Los procesos son respaldados por los centros de servicio AutoPits.</p>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={4}>
              <h1>SEGURIDAD Y CONFIANZA</h1>
              <p>Realizamos un control de calidad de 9 etapas y más de 70 puntos de inspección</p>
            </Grid>
            <Grid xs={8}>
              <img src="https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Icono_Seguridad-AutoXperience-418w.png" alt="Safety" />
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={8}>
              <img src="https://lirp.cdn-website.com/0d7fa43a/dms3rep/multi/opt/Icono-Garantia+AutoXperience-397w.png" alt="Warranty" />
            </Grid>
            <Grid xs={4}>
              <h1>GARANTÍA Y COBERTURA</h1>
              <p>Todos nuestros autos cuentan con Garantía de Ley y además ofrecemos una Cobertura de Respaldo Extendida hasta por 6 meses sin costo adicional para el cliente.</p>
            </Grid>
          </Grid>
          <Grid xs={12} variant="outlined" color="success">
            <Button>Más Información</Button>
          </Grid>
        </Grid>
      </div>

      <Footer /> {/* Add the Footer component here */}
    </>
  );
}

export default App;
