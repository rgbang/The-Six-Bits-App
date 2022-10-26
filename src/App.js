import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Products } from './components/Products/Products';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/CheckoutForm/Checkout/Checkout';
import { commerce } from './lib/commerce';
import { SignUp } from './SignUp';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Popup from './components/Popup';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(products);
  };


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
    console.log(cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity: quantity, });
    

    setCart(response);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
 
  
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, { newOrder });
    

    setOrder(incomingOrder);

    commerce.cart.refresh();

  };




  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log('products data');
  console.log(products);
  console.log(cart);




  return (
    <Router >
      <div style={{ display: 'flex' }}>
        
        

 
        <Routes>
          <Route index element={<SignUp />} />
        
          <Route path="products" element={<Products products={products} onAddToCart={handleAddToCart} totalItems={cart.total_items} handleUpdateCartQty />} />
            
       
          <Route path="cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
            
  
          <Route path="checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} onEmptyCart={handleEmptyCart} />} />
            
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
