import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';



export const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
  const cardmediaStyle = {
    height: 260,
  };
  const cardcontentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const cardactionsStyle = {
    justifyContent: 'space-between',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',

  };

  return (
    <Card>
      <CardMedia component="img" image={item.image.url} alt="green iguana"
      style={cardmediaStyle}
      
      />
      <CardContent
      style={cardcontentStyle}      
      >
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions
      style={cardactionsStyle}
      >
        <div
        style={buttonStyle}
        
        >
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};


