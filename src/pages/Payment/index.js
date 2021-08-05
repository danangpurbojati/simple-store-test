import { Card, CardContent, Container, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from '../../components/Navbar'
import StripeContainer from '../../components/Payment/StripeContainer'
import useStyles from './paymentStyles'

const Payment = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />

            <Container className={classes.pageWrapper} maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography className={classes.title} variant="h4" align="center">Pembayaran</Typography>
                        <StripeContainer />
                    </CardContent>
                </Card>
            </Container>

        </div>
    )
}

export default Payment
