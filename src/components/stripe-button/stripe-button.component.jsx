import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_fO5LGuexBCywsHsVHN2fB9Z400ffTDdpSR';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }

    return (
        price ? 
        <StripeCheckout
            label="Pay Now"
            currency="CAD"
            billingAddress
            shippingAddress
            image='images/logo.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        /> : null
    );
}

export default StripeCheckoutButton;