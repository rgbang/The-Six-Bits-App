import React from 'react';
import { useState } from 'react';
import { Typography, Button, Divider, TextField } from '@mui/material';


import { Review } from './Review';


export const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout, timeout }) => {
  
  const [cardNum, setCardNum] = useState('4242 4242 4242 4242');
  const [expMonth, setExpMonth] = useState('11');
  const [expYear, setExpYear] = useState('2023');
  const [cvv, setCvv] = useState('123');
  const [billingPostalZipcode, setBillingPostalZipcode] = useState('90089');


  const handleSubmit = async () => {







 
    console.log("ChechouTeken");
    console.log(checkoutToken);

    console.log('Theorder thing');
    console.log(checkoutToken.line_items);

      const orderData = {
        
        line_items: checkoutToken.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData["shipping-options"], },
        payment: {
          gateway: 'test_gateway',
          card: {
            number: cardNum,
            expiry_month: expMonth,
            expiry_year: expYear,
            cvc: cvv,
            postal_zip_code: billingPostalZipcode,
          },
        },
      };

 

      console.log(checkoutToken);

    onCaptureCheckout(checkoutToken.id, orderData);
    timeout();

    nextStep();

 };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method </Typography>
  
          <form onSubmit={() => handleSubmit()}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cardNum"
              label="Card Number"
              name="cardNum"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="expMonth"
              label="Expiry Month"
              name="expMonth"
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="expYear"
              label="Expiry Year"
              name="expYear"
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cvv"
              label="CVV"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="billingPostalZipcode"
              label="Postal/Zip Code"
              name="postalCode"
              value={billingPostalZipcode}
              onChange={(e) => setBillingPostalZipcode(e.target.value)}
            />

         
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained"  color="primary" onClick={() => handleSubmit()}>
                Pay {checkoutToken.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
     

    </>
  );

};
