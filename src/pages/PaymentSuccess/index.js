import { Button, Card, CardContent, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import useStyles from './paymentSuccessStyle';

const PaymentSuccess = () => {
    const classes = useStyles();
    const history = useHistory();

    const clickHomePage = () => {
        history.push('/')
    }
    return (
        <div>
            <Navbar />
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography className={classes.title} align="center" variant="h4">
                            Pembayaran Berhasil
                        </Typography>
                        <Button onClick={clickHomePage} variant="contained" fullWidth>Kembali Ke Halaman Utama</Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default PaymentSuccess
