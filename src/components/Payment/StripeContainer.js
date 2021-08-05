import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripeKey = process.env.REACT_APP_STRIPE_KEY;

const stripePromise = loadStripe(stripeKey);

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
