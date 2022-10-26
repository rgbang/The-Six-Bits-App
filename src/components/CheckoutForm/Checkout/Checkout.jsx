import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import { AddressForm } from '../AddressForm';
import { PaymentForm } from '../PaymentForm';


const steps = ['Shipping address', 'Payment details'];

export const Checkout = ({ cart, onCaptureCheckout, order, error, onEmptyCart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const handleEmptyCart = () => onEmptyCart();


  let navigate = useNavigate();

  const appbarStyle = {
    position: 'relative',

  };

  const layoutStyle = {

    width: 'auto',
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: '7%',
    marginBottom: '7%',
   


  };

  const paperStyle = {
    paddingLeft: '2rem',
    paddingRight: '2rem',
 

  };

  const buttonStyle = {

  }

 

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  console.log(order);

  const test = (data) => {
    setShippingData(data);
      setIsFinished(true);

    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      console.log("okei")
    }, 3000);
  };
  console.log(order);



  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button variant="outlined" type="button">Back to home</Button>
    </>
  ) : isFinished ? (
 
  
 
    <>
      <div>

        <Typography variant="h5">Thank you for your purchase, {shippingData.firstName} {shippingData.lastName} !</Typography>
        <Divider />
        <Typography variant="subtitle2">Order ref: {checkoutToken.id} </Typography>
      </div>
      <br />
      <Button variant="outlined" type="button" onClick={handleEmptyCart}>
        <Link to='/'>Back to home</Link>
        </Button>
    </>


  ) : (
    <div>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button variant="outlined" type="button">Back to home</Button>
      </>
    );
  }

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />);
  console.log('orderthing');
  console.log(order);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          console.log(token);

          setCheckoutToken(token);
          console.log(checkoutToken);
        
        } catch {
          if (activeStep !== steps.length) navigate('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  return (
    <>
    <CssBaseline />

      <div />
      <main
      style={layoutStyle}
      >
        <Paper style={paperStyle}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

