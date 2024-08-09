// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light', // Use 'dark' for a dark theme
    primary: {
      main: '#1976d2', // Blue color
      contrastText: '#fff', // White text on primary buttons
    },
    secondary: {
      main: '#dc004e', // Pink color
      contrastText: '#fff', // White text on secondary buttons
    },
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#fff', // White paper background
    },
    text: {
      primary: '#333', // Dark grey text
      secondary: '#666', // Medium grey text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#333',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#333',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#666',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '10px 20px',
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          },
        },
        containedSecondary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '2.5rem',
          fontWeight: 600,
          color: '#333',
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 500,
          color: '#333',
        },
        h3: {
          fontSize: '1.75rem',
          fontWeight: 500,
          color: '#333',
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
          color: '#666',
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
