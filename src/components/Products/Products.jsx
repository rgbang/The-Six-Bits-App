import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';

import { AppBar, Box, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Product } from './Product/Product';
import Popup from '../Popup';
import { useState, useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';




export const Products = ({ products, onAddToCart, totalItems }) => {

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





  const [buttonPopup, setButtonPopup] = useState(true);
  const mainStyle = {
   color: 'rgb(0, 0, 280)',

  };


  if (!products.length) return <p> Loading... </p> ;

  return (
    <>

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








    <div
    style={mainStyle}
    >

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>
          Instructions
        </h3>
        <p>
          Click on button below each product description to add to cart
        </p>
        <p>
          Click on top right cart icon to go to cart
        </p>
      </Popup>
      <Grid style={mainStyle} container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid style={mainStyle}  key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>

             

        ))}
      </Grid>
    </div>

    </>
  );
};

