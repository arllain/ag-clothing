import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publushableKey = 'pk_test_ZJ8ONDnDUWUN1GH7RvbVfTz500Sv1dWp58';

   const onToken = token => {
      console.log(token);
      alert('Payment Succesful');
   };

   return (
      <StripeCheckout
         label="Pay Now"
         name="AG Clothing LTDA."
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publushableKey}
      />
   );
};

export default StripeCheckoutButton;
