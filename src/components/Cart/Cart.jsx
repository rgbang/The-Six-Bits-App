import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { CartItem } from './CartItem/CartItem';


export const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {


  const handleEmptyCart = () => onEmptyCart();
  const carddetailsStyle = {
    display: 'flex',
    marginTop: '4rem',
    width: '100%',
    justifyContent: 'space-between',


  };
  const titleStyle = {
    marginTop: '5rem',
    marginButtom: '2rem',

  };
  const buttonStyle = {
    marginTop: '1rem',

  };

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link to="/">start adding some!</Link>
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div
      style={carddetailsStyle}
      >
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button size="large" type="button" variant="contained" color="primary"><Link to={'/checkout'}>Checkout</Link></Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div/>
      <div
      style={carddetailsStyle}
      >
      <Typography variant="h3" gutterBottom>Your Shopping Cart </Typography>
        <div>
        <Button style={buttonStyle} size="small" type="button" variant="contained" color="primary"><Link to={'/'}>home</Link></Button>
        </div>
      </div>

      { !cart.line_items.length ? renderEmptyCart() : renderCart()  }
    </Container>

);
  };

