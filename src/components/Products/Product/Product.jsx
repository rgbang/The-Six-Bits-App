import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import App from '../../../App';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';





import Grid from '@mui/material/Grid';


export const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => { 
    onAddToCart(product.id, 1) 
  };
  const cardStyle = {
    maxWidth: '700px',
    padding: '1rem',
    marginTop: '4rem',
    marginLeft: '1rem',
    paddingButtom: '7rem',
    color: 'rgb(128, 128, 128)',



  };
  const cardmediaStyle = {
    maxWidth: '100%',


  };
  const cardactionsStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
  };
  const typeStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  }


  return (
   
      <Card
      style={cardStyle}

      >
        <CardMedia
         component="img" image={product.image.url} alt="green iguana"

         />
        <CardContent

        >
          <div

          >
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
        <CardActions disableSpacing
        style={cardactionsStyle}
        
        >
         
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart} >
            <AddShoppingCartIcon color='primary' />
          </IconButton>
        </CardActions>
      </Card>

    
  );
};



