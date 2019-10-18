import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publushableKey = 'pk_test_ZJ8ONDnDUWUN1GH7RvbVfTz500Sv1dWp58';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));

        alert(
          'There was an issue with your payment. Please sure you use the provided credit card.',
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='AG Clothing LTDA.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publushableKey}
    />
  );
};

export default StripeCheckoutButton;
