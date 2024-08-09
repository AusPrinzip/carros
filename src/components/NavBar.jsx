import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="default">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AutoXperience
        </Typography>

        {/* Main Navigation Links (hidden on small screens) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Encuentra tu auto</Button>
          <Button color="inherit">Outlet</Button>
          <Button color="inherit">Compramos tu auto</Button>
          <Button color="inherit">Financiamiento</Button>
          <Button color="inherit">Respaldo</Button>
          <Button color="inherit">Contáctanos</Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        
        {/* Dropdown Menu for Mobile */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Encuentra tu auto</MenuItem>
          <MenuItem onClick={handleMenuClose}>Outlet</MenuItem>
          <MenuItem onClick={handleMenuClose}>Compramos tu auto</MenuItem>
          <MenuItem onClick={handleMenuClose}>Financiamiento</MenuItem>
          <MenuItem onClick={handleMenuClose}>Respaldo</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contáctanos</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
