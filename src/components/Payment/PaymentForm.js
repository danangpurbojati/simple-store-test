import React, { useState, useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button, TextField } from '@material-ui/core';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import sumPrice from '../../utils/sumPrice';
import formatRupiah from '../../utils/formatRupiah';
import useStyles from './paymentFormStyles';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

const PaymentForm = () => {
    const { activeUser } = useContext(AuthContext);
    const { cart, clearCart } =  useContext(CartContext);
    const [errorMessage, setErrorMessage] = useState('');
    const classes = useStyles();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const submitPayment = async (event) => {
        event.preventDefault();

        const data = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if (!data.error) {
            /* 
                send to backend here
            */
            clearCart();
            setErrorMessage('');
            history.push('/payment-success');
        } else {
            setErrorMessage(data.error.message);
        }
    }
    return (
        <div>
            {
                errorMessage && <Alert className={classes.input} severity="error">{errorMessage}</Alert>
            }
            <form onSubmit={submitPayment}>
                <TextField 
                    fullWidth
                    variant="outlined"
                    label="Email"
                    value={activeUser.email}
                    size="small"
                    disabled
                    className={classes.input}
                />
                <TextField 
                    fullWidth
                    variant="outlined"
                    label="Total Pembayaran"
                    value={formatRupiah(sumPrice(cart))}
                    size="small"
                    disabled
                    className={classes.input}
                />
                <CardElement className={classes.cardInfo} />
                <Button variant="contained" fullWidth type="submit">Bayar</Button>
            </form>
        </div>
    )
}

export default PaymentForm
