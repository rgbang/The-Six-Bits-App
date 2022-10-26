import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@mui/material';


import { Link, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { styledAppBar } from './styles';
import { css } from '@emotion/react';


export const Navbar = ({ totalItems }) => {
  const appbarStyle = {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    position: 'fixed',
    backgroundcolor: 'rgb(180, 180, 180)',
  };
  const typographyStyle = {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  };
  const growStyle = {
   
    flexGrow: 1,

  };
  const shopcartStyle = {
    backgroundcolor: 'rgb(180, 180, 180)',

  };



  

  return (
    <div style={appbarStyle}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar

        color='primary'
         >
          <Toolbar  >          
            <Typography 
            variant="h6" color='inherit' sx={{ flexGrow: 1 }}
            style={typographyStyle}
            >
            The store
            </Typography>
            <div
            style={growStyle}

            ></div>
            <IconButton aria-label="Show cart items" color='inherit' >
              <Badge badgeContent={totalItems} color='secondary'>
                <Link to={'/cart'}> <ShoppingCartIcon color='inherit'/></Link>
               
              </Badge>
            </IconButton>
            
        </Toolbar>
        </AppBar>
    </Box>  
 


    </div>

    


  );
};

